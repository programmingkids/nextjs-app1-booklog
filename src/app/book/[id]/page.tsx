import { type Metadata } from "next";
import { FaCommentDots } from "react-icons/fa6";
import { type BookPageProps } from "@/types/index";
import { getBookById } from "@/api/book";
import { BookItem } from "@/components/ui/bookItem";
import { ReviewCreateForm } from "@/components/ui/review/createForm";
import { ReviewList } from "@/components/ui/review/list";

export const metadata: Metadata = {
  title: "Book",
};

export default async function Page({ params: { id } }: BookPageProps) {
  // APIから1件の書籍データを取得
  return (
    <div className="main">
      <h1 className="p-4 bg-violet-400 text-white text-2xl">
        <FaCommentDots className="inline align-bottom mr-2 text-2xl" />
        Review
      </h1>
      <div className="p-4"></div>
    </div>
  );
}
