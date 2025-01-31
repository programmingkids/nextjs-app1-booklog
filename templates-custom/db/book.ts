import { Prisma } from "@prisma/client";
import { type BookReturnType } from "@/types";
import { type Book, type BookWithPartialRelations } from "@/prisma-zod/index";
import prisma from "@/db/prisma";

export async function getBooks() {
  // 全件取得
  const result = await prisma.book.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      bookAuthors: {
        include: {
          author: true,
        },
      },
      review: true,
    },
  });
  return result;
}

export async function createBook(data: Prisma.BookCreateInput) {
  // 新規登録
  try {
    const result = await prisma.book.create({
      data,
      include: {
        review: true,
      },
    });
    return {
      success: true,
      data: result,
    };
  } catch (e) {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}

export async function getBookByGoogleId(
  googleBookId: string,
): Promise<BookReturnType> {
  // googleBookIdで指定した1件の書籍を取得
  const result = await prisma.book.findFirst({
    where: {
      googleBookId,
    },
    include: {
      bookAuthors: {
        include: {
          author: true,
        },
      },
      review: true,
    },
  });
  return result !== null
    ? {
        success: true,
        data: result,
      }
    : {
        success: false,
      };
}
