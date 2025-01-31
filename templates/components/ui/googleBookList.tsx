import { type GoogleBookListProps } from "@/types/index";
import { GoogleBookItem } from "@/components/ui/googleBookItem";

export const GoogleBookList = ({ books }: GoogleBookListProps) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((b) => (
          <GoogleBookItem key={b.googleBookId} {...b} />
        ))}
      </div>
    </div>
  );
};
