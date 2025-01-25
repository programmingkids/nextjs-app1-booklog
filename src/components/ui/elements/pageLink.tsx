import Link from "next/link";
import { FaEllipsis, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import type {
  PageNavStartProps,
  PageNavEndProps,
  PageItemProps,
} from "@/types";

export const PageNavLeft = ({ page, baseUrl }: PageNavStartProps) => {
  return (
    <>
      {page === 1 ? (
        <div className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <FaAngleLeft />
        </div>
      ) : (
        <Link
          href={`${baseUrl}/${page - 1}`}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-violet-400 hover:text-white focus:z-20 focus:outline-offset-0"
        >
          <FaAngleLeft />
        </Link>
      )}
    </>
  );
};

export const PageNavRight = ({
  limit,
  page,
  total,
  baseUrl,
}: PageNavEndProps) => {
  const isLastPage = page * limit >= total;
  return (
    <>
      {isLastPage ? (
        <div className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <FaAngleRight />
        </div>
      ) : (
        <Link
          href={`${baseUrl}/${page + 1}`}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-violet-400 hover:text-white focus:z-20 focus:outline-offset-0"
        >
          <FaAngleRight />
        </Link>
      )}
    </>
  );
};

export const PageItem = ({ page, baseUrl, p }: PageItemProps) => {
  return (
    <>
      {p === -1 ? (
        <div className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          <FaEllipsis />
        </div>
      ) : p === page ? (
        <div className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {p}
        </div>
      ) : (
        <Link
          href={`${baseUrl}/${p}`}
          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          {p}
        </Link>
      )}
    </>
  );
};
