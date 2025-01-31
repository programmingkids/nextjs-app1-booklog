import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { type GoogleBookIdProps } from "@/types/index";
import { getBookByGoogleId } from "@/db/book";

export const ReviewList = async ({ googleBookId }: GoogleBookIdProps) => {
  return (
    <>
      <h2 className="font-bold text-left mb-2">レビュー一覧</h2>
    </>
  );
};
