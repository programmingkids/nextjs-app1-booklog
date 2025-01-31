"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { type SearchBoxProps } from "@/types/index";
import { IconButton } from "@/components/ui/elements/button";

export const SearchBox = ({ keyword = "" }: SearchBoxProps) => {
  const router = useRouter();
  const [q, setQ] = useState(keyword);

  const handleChange = function (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setQ(event.target.value);
  };

  const handleKeyDown = function (
    event: React.KeyboardEvent<HTMLInputElement>,
  ): void {
    if (event.key === "Enter") {
      searchAction();
    }
  };

  const handleClick = function (): void {
    searchAction();
  };

  const searchAction = function (): void {
    router.push(`/search/${encodeURIComponent(q)}`);
  };

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          name="q"
          className="p-2 mr-2 border border-orange-400 rounded-md focus:outline-orange-400"
          value={q}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton
          text=""
          color="orange"
          icon={<MdSearch className="inline-block text-xl" />}
          onClick={handleClick}
        />
      </div>
      <hr className="border-violet-400 m-4" />
    </>
  );
};
