"use server";

import { revalidatePath } from "next/cache";
import { type ReviewGoogleIdType } from "@/types/index";
import { ReviewGoogleIdSchema } from "@/types/schema";
import { getBookById } from "@/api/book";
import { createBook, getBookByGoogleId } from "@/db/book";
import { createReview, deleteReview } from "@/db/review";

// 新規登録処理を行うサーバーアクション関数
export async function createReviewAction(data: ReviewGoogleIdType) {
  // Zodによるバリデーションを実行する
  const result = ReviewGoogleIdSchema.safeParse(data);

  // バリデーション失敗の場合、errorを返す
  if (!result.success) {
    return {
      success: result.success,
      error: result.error.flatten().fieldErrors,
    };
  }

  const { googleBookId, comment } = data;

  // DBでのBookの存在確認
  const bookDataFromDB = await getBookByGoogleId(googleBookId);

  if (bookDataFromDB.success) {
    // 存在するならば、Reviewの追加
    const reviewData = {
      comment,
      bookId: bookDataFromDB.data.id,
    };
    // レビューのみの新規登録
    const review = await createReview(reviewData);
    // 一覧画面のキャッシュ削除
    revalidatePath("/");
    // 結果を返す
    return {
      success: true,
      data: review.data,
    };
  }

  // DBに存在しないならば、APIからデータ取得
  const bookDataFromAPI = await getBookById(googleBookId);

  if (!bookDataFromAPI.success) {
    return {
      success: false,
      error: { server_error: ["API Error"] },
    };
  }

  // APIから取得したデータ
  const { authors, title, description, publishDate, imageLink, volumeLink } =
    bookDataFromAPI.book;

  // Authorのデータ整形
  const authorCreateData = !authors
    ? []
    : authors.map((author: string) => ({
        author: {
          create: {
            name: author,
          },
        },
      }));

  // 新規登録するデータ整形
  const newBook = {
    googleBookId,
    title,
    description,
    publishDate,
    imageLink,
    volumeLink,
    bookAuthors: {
      create: authorCreateData,
    },
    review: {
      create: [
        {
          comment,
        },
      ],
    },
  };

  // Book、Author、Reviewの一括新規登録
  const newBookData = await createBook(newBook);

  // 一覧画面のキャッシュ削除
  revalidatePath("/");
  // 結果を返す
  return {
    success: true,
    data: newBookData.data?.review[0],
  };
}

// レビューを削除するサーバーアクション関数
export async function deleteReviewAction(id: number) {
  // DBからレビューを削除
  await deleteReview(id);
  // 一覧画面のキャッシュ削除
  revalidatePath("/");
  // 結果を返す
  return {
    success: true,
  };
}
