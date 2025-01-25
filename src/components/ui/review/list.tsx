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
            className="border border-gray-400 rounded-lg bg-white mb-4 p-4 text-left"
          >
            {comment}
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
