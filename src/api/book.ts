import { GoogleBook, GetBookByIdReturn } from "@/types/index";
const APIURL = "https://www.googleapis.com/books/v1/volumes";
const APIKEY = process.env.APIKEY;

export async function getBooksByKeyword(keyword: string, page: number = 1) {
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const errorData = { limit, page, total: 0, books: [] };

  if (!keyword) {
    return errorData;
  }

  const url = `${APIURL}?q=${keyword}&maxResults=${limit}&startIndex=${startIndex}&key=${APIKEY}&langRestrict=ja&printType=books`;
  const data = await fetch(url);
  const { items, totalItems: total } = await data.json();

  if (total <= 0 || !items) {
    return errorData;
  }

  const books: GoogleBook[] = items.map((res: any) => ({
    googleBookId: res.id,
    title: res.volumeInfo?.title ?? "",
    authors: res.volumeInfo?.authors ?? [],
    description: res.volumeInfo?.description ?? "",
    publishDate: res.volumeInfo?.publishedDate ?? "",
    imageLink: res.volumeInfo.imageLinks?.smallThumbnail ?? "",
    volumeLink: res.volumeInfo?.canonicalVolumeLink ?? "",
  }));
  return { limit, page, total, books };
}

export async function getBookById(id: string): Promise<GetBookByIdReturn> {
  const url = `${APIURL}/${id}?key=${APIKEY}`;
  const data = await fetch(url);
  const res = await data.json();

  if (res.error) {
    return {
      success: false,
    };
  }

  const book: GoogleBook = {
    googleBookId: res.id,
    title: res.volumeInfo?.title ?? "",
    authors: res.volumeInfo?.authors ?? [],
    description: res.volumeInfo?.description ?? "",
    publishDate: res.volumeInfo?.publishedDate ?? "",
    imageLink: res.volumeInfo?.imageLinks?.smallThumbnail ?? "",
    volumeLink: res.volumeInfo?.canonicalVolumeLink ?? "",
  };
  return {
    success: true,
    book,
  };
}
