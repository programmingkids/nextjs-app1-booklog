import { z } from "zod";

export const ReviewGoogleIdSchema = z.object({
  comment: z
    .string({ invalid_type_error: "文字を入力してください" })
    .min(1, { message: "必須です" }),
  googleBookId: z
    .string({ invalid_type_error: "文字を入力してください" })
    .min(1, { message: "必須です" }),
});
