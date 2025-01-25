import { type Metadata } from "next";
import { MdInfo } from "react-icons/md";
import { ButtonLink } from "@/components/ui/elements/button";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-violet-400 text-white text-2xl">
        <MdInfo className="inline align-bottom mr-2 text-2xl" />
        About
      </h1>
      <h2 className="p-4 text-xl">読書アプリ</h2>
      <ul className="m-4">
        <li>Google Book APIと連動します</li>
        <li>書籍の検索</li>
        <li>書籍の感想を記録</li>
      </ul>
      <div className="p-4">
        <ButtonLink href="/" text="HOME" color="orange" />
      </div>
    </div>
  );
}
