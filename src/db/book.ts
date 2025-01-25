import prisma from "@/db/prisma";
import { Prisma } from "@prisma/client";
import { type Book, type BookWithPartialRelations } from "@/prisma-zod/index";

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

type BookReturnType =
  | {
      success: true;
      data: BookWithPartialRelations;
    }
  | {
      success: false;
    };

export async function getBookByGoogleId(
  googleBookId: string,
): Promise<BookReturnType> {
  // 1件を取得
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
