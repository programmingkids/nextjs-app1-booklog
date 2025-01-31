import { type ReviewOptionalDefaults } from "@/prisma-zod/index";
import prisma from "@/db/prisma";

export async function createReview(data: ReviewOptionalDefaults) {
  // 新規登録
  try {
    const result = await prisma.review.create({
      data,
    });
    return {
      success: true,
      data: result,
    };
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}

export async function deleteReview(id: number) {
  // 削除
  try {
    // Prismaで削除のSQLを実行
    // 戻り値の型は以下の通り
    /*
    { 
      success: true,
      data: {}
    }
    */
  } catch {
    // データベースエラー発生
    return {
      success: false,
      error: { server_error: ["Database Error"] },
    };
  }
}
