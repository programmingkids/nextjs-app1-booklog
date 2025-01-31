import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { type GoogleBookIdProps } from "@/types/index";
import { getBookByGoogleId } from "@/db/book";

export const ReviewList = async ({ googleBookId }: GoogleBookIdProps) => {
  const result = await getBookByGoogleId(googleBookId);
  return (
    <>
      <h2 className="font-bold text-left mb-2">レビュー一覧</h2>
      {result.success ? (
        result.data.review &&
        result.data.review.map(({ id, comment }) => (
          <div
            key={id}
            className="border border-gray-400 rounded-lg bg-white mb-4 p-4 text-left flex justify-start"
          >
            <Link href={`/review/${id}/delete`}>
              <FaXmark className="mr-2 p-1 text-2xl rounded-lg bg-gray-200 hover:bg-gray-400 hover:text-gray-200" />
            </Link>
            <div>{comment}</div>
          </div>
        ))
      ) : (
        <div className="border border-gray-400 rounded-lg bg-white mb-4 p-4 text-left">
          レビューはありません
        </div>
      )}
    </>
  );
};
