import { MdHome } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdInfo } from "react-icons/md";
import { FaGoogle } from "react-icons/fa6";
import { BottomNavIconLink } from "@/components/ui/elements/button";

export const Footer = function () {
  return (
    <footer className="sticky bottom-0 min-h-14 bg-violet-400 grid place-items-center grid-cols-4 gap-4 px-5 text-slate-100 z-10">
      <div className="place-self-center">
        <BottomNavIconLink
          href="/"
          text="HOME"
          icon={<MdHome className="text-2xl mx-auto" />}
        />
      </div>
      <div>
        <BottomNavIconLink
          href="/search"
          text="SEARCH"
          icon={<MdSearch className="text-2xl mx-auto" />}
        />
      </div>
      <div>
        <BottomNavIconLink
          href="/about"
          text="ABOUT"
          icon={<MdInfo className="text-2xl mx-auto" />}
        />
      </div>
      <div>
        <BottomNavIconLink
          href="/about/api"
          text="API"
          icon={<FaGoogle className="text-2xl mx-auto" />}
        />
      </div>
    </footer>
  );
};
