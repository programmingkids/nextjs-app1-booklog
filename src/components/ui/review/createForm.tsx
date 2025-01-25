"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createReviewAction } from "@/actions/review";
import { SuccessModal } from "@/components/ui/modal";
import { ErrorModal } from "@/components/ui/errorModal";
import { ReviewGoogleIdSchema } from "@/types/schema";
import { type ReviewOptionalDefaults } from "@/prisma-zod/index";
import { type GoogleBookIdProps, type ReviewGoogleIdType } from "@/types/index";

export const ReviewCreateForm = ({ googleBookId }: GoogleBookIdProps) => {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState<ReviewOptionalDefaults>();
  const router = useRouter();

  // Formの入力パーツの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    setError,
    clearErrors,
    reset,
  } = useForm<ReviewGoogleIdType>({
    resolver: zodResolver(ReviewGoogleIdSchema),
    defaultValues: {
      googleBookId,
    },
  });

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<ReviewGoogleIdType> = async (
    data: ReviewGoogleIdType,
  ) => {
    // 送信時にエラー表示を解除
    clearErrors();
    // サーバアクションを起動
    const result = await createReviewAction(data);
    // サーバー側でエラー
    if (!result.success) {
      Object.entries(result.error!).map(([k, v]) => {
        setError(`root.${k}`, { message: v[0] });
      });
      return;
    }
    // 登録成功の場合、モーダルを表示する
    setData(result.data);
    setOpen(true);
    // フォームをクリアする
    reset();
  };

  const onSuccess = () => {
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 mt-4 text-left">
          <label className="block mb-2 font-bold" htmlFor="name">
            新規レビュー投稿
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
            {...register("comment")}
          />
          <div className="mt-1 mb-4 text-red-500 font-bold">
            {errors.comment?.message}
            {errors.root?.comment?.message}
          </div>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
            disabled={!isDirty || !isValid || isSubmitting}
          >
            登録
          </button>
        </div>
      </form>
      <SuccessModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={onSuccess}
        data={data}
        title="登録完了"
        successText="一覧へ移動"
      />
      {errors.root?.server_error?.message && (
        <ErrorModal
          onSuccess={onSuccess}
          message={errors.root?.server_error?.message}
          title="エラー"
          successText="一覧へ移動"
        />
      )}
    </>
  );
};
