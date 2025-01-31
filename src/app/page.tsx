import { type Metadata } from "next";
import { MdHome } from "react-icons/md";
import { SearchBox } from "@/components/ui/searchBox";
import { BookList } from "@/components/ui/bookList";
import { getBooks } from "@/db/book";

export const metadata: Metadata = {
  title: "Home | BookLog",
};

export default async function Home() {
  // DBから書籍一覧を取得
  const books = await getBooks();
  return (
    <div className="main">
      <h1 className="p-4 bg-violet-400 text-white text-2xl">
        <MdHome className="inline align-bottom mr-2 text-2xl" />
        Home
      </h1>
      <SearchBox keyword={""} />
      <div className="font-bold">書籍一覧（レビュー登録済み）</div>
      {books && <BookList {...{ books }} />}
    </div>
  );
}
