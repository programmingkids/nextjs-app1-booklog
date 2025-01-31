import { type Metadata } from "next";
import { type SearchPageProps } from "@/types/index";
import { MdSearch } from "react-icons/md";
import { getBooksByKeyword } from "@/api/book";
import { SearchBox } from "@/components/ui/searchBox";
import { Pagination } from "@/components/ui/elements/pagination";
import { GoogleBookList } from "@/components/ui/googleBookList";

export const metadata: Metadata = {
  title: "Search",
};

export default async function Page({ params: { slug } }: SearchPageProps) {
  // /search/{keyword}/{page}
  const [q = "", p = "1"] = slug || [];

  const keyword = decodeURIComponent(q);
  const page = Number(p);
  const baseUrl = `/search/${keyword}`;

  // APIで書籍データ検索
  const { limit, total, books } = await getBooksByKeyword(keyword, page);

  return (
    <div className="main">
      <h1 className="p-4 bg-violet-400 text-white text-2xl">
        <MdSearch className="inline align-bottom mr-2 text-2xl" />
        Search: {keyword}
      </h1>
      <SearchBox {...{ keyword }} />
      <h2 className="text-lg">検索結果</h2>
      {keyword == "" ? (
        <div className="m-4">検索語を入力してください</div>
      ) : total <= 0 ? (
        <div className="m-4">検索結果が見つかりません</div>
      ) : (
        <>
          <Pagination {...{ total, limit, page, baseUrl }} />
          <GoogleBookList {...{ books }} />
          <Pagination {...{ total, limit, page, baseUrl }} />
        </>
      )}
    </div>
  );
}
