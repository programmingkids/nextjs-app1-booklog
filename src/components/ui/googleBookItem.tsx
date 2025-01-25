import Image from "next/image";
import { MdCalendarMonth } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ButtonLink, IconButtonLink } from "@/components/ui/elements/button";
import noimage from "@/assets/image/noimage.png";
import { GoogleBook } from "@/types/index";

export const GoogleBookItem = ({
  googleBookId,
  title,
  authors,
  description,
  publishDate,
  imageLink,
  volumeLink,
}: GoogleBook) => {
  return (
    <div className="border border-gray-400 rounded-lg bg-white flex flex-col justify-between">
      <div className="flex justify-center bg-gray-100 mb-4 rounded-t-lg">
        <div className="imageContainer">
          {imageLink ? (
            <Image
              src={imageLink}
              fill
              alt={title}
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
      </div>
      <div className="p-4 pt-2">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <MdCalendarMonth className="text-xl mr-2" />
            {publishDate.toString()}
          </p>
          <div className="text-left text-gray-900 font-bold text-lg mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-sm line-clamp-5 min-h-24">
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <HiAcademicCap className="inline-block text-xl -translate-y-0.5 mr-2" />
            {authors.join(", ")}
          </div>
        </div>
        <div className="mt-5 mb-2 grid grid-cols-2 gap-4">
          <ButtonLink
            href={`/review/${googleBookId}`}
            text="レビュー登録"
            color="orange"
          />
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
  );
};
