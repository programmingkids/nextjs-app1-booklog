import { PaginationProps } from "@/types/index";
import { getPageNumbers } from "@/lib/pageNumbers";
import {
  PageNavLeft,
  PageNavRight,
  PageItem,
} from "@/components/ui/elements/pageLink";

export const Pagination = ({
  total,
  limit,
  page,
  baseUrl,
}: PaginationProps) => {
  const pages = getPageNumbers({ page, limit, total });

  return (
    <div className="mt-4 mb-5 isolate inline-flex -space-x-px rounded-md shadow-sm">
      <PageNavLeft {...{ page, baseUrl }} />
      {pages.map((p, i) => (
        <PageItem key={i} {...{ page, baseUrl, p }} />
      ))}
      <PageNavRight {...{ page, baseUrl, limit, total }} />
    </div>
  );
};
