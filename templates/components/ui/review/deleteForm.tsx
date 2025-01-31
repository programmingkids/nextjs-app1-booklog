"use client";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { type ReviewDeleteFormProps } from "@/types";
import { deleteReviewAction } from "@/actions/review";

export const ReviewDeleteForm = ({ id }: ReviewDeleteFormProps) => {
  const router = useRouter();

  // Formの入力パーツの初期化
  const { handleSubmit } = useForm({
    defaultValues: {
      id,
    },
  });

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<{ id: number }> = async () => {
    // サーバアクションを起動

    // リダイレクト
    router.replace("/");
  };
  return (
    <div className="my-4 grid grid-cols-3">
      <form className="col-start-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full p-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            削除
          </button>
        </div>
      </form>
    </div>
  );
};
