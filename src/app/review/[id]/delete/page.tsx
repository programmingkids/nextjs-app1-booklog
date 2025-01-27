import { type Metadata } from "next";
import { FaCommentDots } from "react-icons/fa6";
import { type ReviewDeletePageProps } from "@/types/index";
import { ReviewDeleteForm } from '@/components/ui/review/deleteForm';

export const metadata: Metadata = {
  title: "Review Delete",
};

export default async function Page({ params: { id } }: ReviewDeletePageProps) {
  const reviewId = Number(id);
  
  return (
    <div className="main">
      <h1 className="p-4 bg-violet-400 text-white text-2xl">
        <FaCommentDots className="inline align-bottom mr-2 text-2xl" />
        Review Delete {reviewId}
      </h1>
      <ReviewDeleteForm {...{id:reviewId}} />
    </div>
  );
}
