import prisma from "@/db/prisma";
import { type ReviewOptionalDefaults } from "@/prisma-zod/index";

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
