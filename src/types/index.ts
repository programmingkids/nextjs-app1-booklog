import { z } from "zod";

import { ReviewGoogleIdSchema } from "@/types/schema";

export type SearchBoxProps = {
  keyword: string;
};

export type SearchPageProps = {
  params: {
    slug?: string[];
  };
};

export type BookPageProps = {
  params: {
    id: string;
  };
};

export type ReviewDeletePageProps = {
  params: {
    id: string;
  };
};

export type GoogleBook = {
  googleBookId: string;
  title: string;
  authors: string[];
  description: string;
  publishDate: string;
  imageLink: string;
  volumeLink: string;
};

export type GetBookByIdReturn =
  | {
      success: false;
    }
  | {
      success: true;
      book: GoogleBook;
    };

export type GoogleBookListProps = {
  books: GoogleBook[];
};

export type PaginationProps = {
  total: number;
  limit: number;
  page: number;
  baseUrl: string;
};

export type PageNavStartProps = {
  baseUrl: string;
  page: number;
};

export type PageNavEndProps = {
  baseUrl: string;
  page: number;
  limit: number;
  total: number;
};

export type PageItemProps = {
  page: number;
  baseUrl: string;
  p: number;
};

export type PageNumbersArgs = {
  page: number;
  limit: number;
  total: number;
  pageNumbersToShow?: number;
};

export type PageNumbersReturn = number[];

export type Color = "blue" | "red" | "green" | "orange";

export type ButtonLinkProps = {
  color: Color;
  href: string;
  text: string;
  blank?: boolean;
};

export type IconButtonLinkProps = ButtonLinkProps & {
  icon: React.ReactNode;
};

export type IconButtonProps = Pick<
  IconButtonLinkProps,
  "color" | "text" | "icon"
> & {
  onClick: () => void;
};

export type BottomNavigationIconLinkType = Pick<
  IconButtonLinkProps,
  "href" | "text" | "icon"
>;

export type GoogleBookIdProps = {
  googleBookId: string;
};

export type ReviewDeleteFormProps = {
  id: number;
};

export type ReviewGoogleIdType = z.infer<typeof ReviewGoogleIdSchema>;
