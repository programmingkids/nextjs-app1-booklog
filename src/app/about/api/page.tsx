import { type Metadata } from "next";
import { MdInfo } from "react-icons/md";
import { ButtonLink } from "@/components/ui/elements/button";

export const metadata: Metadata = {
  title: "About Google Book API",
};

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-violet-400 text-white text-2xl">
        <MdInfo className="inline align-bottom mr-2 text-2xl" />
        Google Book API
      </h1>
      <h2 className="p-4 text-xl">Google Book APIについて</h2>
      <div className="m-4 grid grid-cols-1 md:grid-cols-3">
        <div className="col-start-1 md:col-start-2 text-left">
          Google Book
          APIsは手軽に利用可能な書籍検索APIです。誰でも利用可能なAPIです。以下のような情報を提供します
        </div>
      </div>
      <ul className="m-4">
        <li>書籍タイトル</li>
        <li>著者</li>
        <li>出版日</li>
        <li>書籍の紹介文</li>
        <li>書籍画像</li>
      </ul>
      <div className="p-4">
        <ButtonLink href="/" text="HOME" color="orange" />
      </div>
    </div>
  );
}
