import type { PageNumbersArgs, PageNumbersReturn } from "@/types";

export const getPageNumbers = function ({
  page,
  limit,
  total,
  pageNumbersToShow = 3,
}: PageNumbersArgs): PageNumbersReturn {
  const lastPageNumber = Math.ceil(total / limit);
  const currentPageNumber = page <= lastPageNumber ? page : lastPageNumber;

  const maxPagesBeforeCurrentPage = Math.floor(pageNumbersToShow / 2);
  const maxPagesAfterCurrentPage = Math.ceil(pageNumbersToShow / 2) - 1;

  let startPage = 1;
  let endPage = lastPageNumber;

  if (lastPageNumber <= 1) {
    // 1ページなら空を返す
    return [];
  }

  if (currentPageNumber <= maxPagesBeforeCurrentPage) {
    // 左側より
    startPage = 1;
    endPage = pageNumbersToShow;
  } else if (currentPageNumber + maxPagesAfterCurrentPage >= lastPageNumber) {
    // 右側より
    startPage = lastPageNumber - pageNumbersToShow + 1;
  } else {
    // 中央部分
    startPage = currentPageNumber - maxPagesBeforeCurrentPage;
    endPage = currentPageNumber + maxPagesAfterCurrentPage;
  }

  let pageNumbers: number[] = Array.from(Array(endPage + 1 - startPage).keys())
    .map((pageNumber) => startPage + pageNumber)
    .filter((pageNumber) => pageNumber <= lastPageNumber && pageNumber > 0);

  if (pageNumbers[0] > 1) {
    if (pageNumbers[0] <= 2) {
      pageNumbers = [1, ...pageNumbers];
    } else {
      const ellipsis = pageNumbers[0] > 3 ? -1 : 2;
      pageNumbers = [1, ellipsis, ...pageNumbers];
    }
  }

  if (pageNumbers[pageNumbers.length - 1] !== lastPageNumber) {
    if (pageNumbers[pageNumbers.length - 1] === lastPageNumber - 1) {
      pageNumbers = [...pageNumbers, lastPageNumber];
    } else {
      const ellipsis =
        pageNumbers[pageNumbers.length - 1] < lastPageNumber - 2
          ? -1
          : lastPageNumber - 1;
      pageNumbers = [...pageNumbers, ellipsis, lastPageNumber];
    }
  }

  return pageNumbers;
};
