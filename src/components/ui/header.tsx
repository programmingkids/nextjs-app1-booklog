import Link from "next/link";
import { MdEditDocument } from "react-icons/md";

export const Header = function () {
  return (
    <header className="sticky top-0 min-h-14 bg-violet-700 text-gray-100 grid place-items-center grid-cols-3 gap-4 px-5 z-10">
      <div className="justify-self-start">
        <Link href="/">
          <MdEditDocument className="inline align-bottom mr-2 text-2xl" />
        </Link>
      </div>
      <div className="justify-self-center">
        <Link href="/" className="text-xl">
          読書アプリ
        </Link>
      </div>
      <div className="justify-self-end"></div>
    </header>
  );
};
