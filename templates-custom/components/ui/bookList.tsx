import Image from "next/image";
import { FaCommentDots } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BookListProps } from "@/types";
import { ButtonLink, IconButtonLink } from "@/components/ui/elements/button";
import noimage from "@/assets/image/noimage.png";

export const BookList = ({ books }: BookListProps) => {
  return (
    <div className="m-4">
      {books.map(
        ({
          id,
          title,
          googleBookId,
          imageLink,
          publishDate,
          description,
          bookAuthors,
          volumeLink,
          review,
        }) => (
          <div
            key={id}
            className="border border-gray-400 rounded-lg bg-white grid grid-cols-1 md:grid-cols-4 p-4 mb-4"
          >
            <div className="mr-4 imageContainer">
              {imageLink ? (
                <Image
                  src={imageLink}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <Image
                  src={noimage}
                  alt="Noimage"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
            </div>
            <div className="mt-4 md:mt-0 col-span-1 md:col-span-3">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center mb-2">
                  <MdCalendarMonth className="text-xl mr-2" />
                  {publishDate}
                </p>
                <p className="text-sm text-gray-600 flex items-center mb-2">
                  <FaCommentDots className="text-xl mr-2" />
                  {review ? review.length : 0}件のレビュー
                </p>
                <div className="text-left text-gray-900 font-bold text-lg mb-2">
                  {title}
                </div>
                <p className="text-gray-700 text-sm line-clamp-5 min-h-24 text-left">
                  {description}
                </p>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-left">
                  <HiAcademicCap className="inline-block text-xl -translate-y-0.5 mr-2" />
                  {bookAuthors
                    ? bookAuthors.map(({ author }) => author?.name).join(", ")
                    : ""}
                </div>
              </div>
              <div className="mt-5 mb-2 grid grid-cols-1 gap-4">
                <ButtonLink
                  href={`/book/${googleBookId}`}
                  text="レビュー"
                  color="orange"
                />
              </div>
              <div className="mt-5 mb-2 grid grid-cols-1 gap-4">
                <IconButtonLink
                  href={volumeLink}
                  text="詳細"
                  color="orange"
                  blank={true}
                  icon={
                    <HiOutlineExternalLink className="text-xl inline-block mr-2 " />
                  }
                />
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};
