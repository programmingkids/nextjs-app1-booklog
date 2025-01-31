import { GoogleBook, GetBookByIdReturn } from "@/types/index";

// GoogleBookAPIのURL
const APIURL = "https://www.googleapis.com/books/v1/volumes";
// GoogleBookAPIのAPIKEYを環境変数から取得
const APIKEY = process.env.APIKEY;

// GoogleBookAPIの検索
export async function getBooksByKeyword(keyword: string, page: number = 1) {
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const errorData = { limit, page, total: 0, books: [] };

  // 検索語が空の場合、エラー
  if (!keyword) {
    return errorData;
  }

  // APIに対する通信処理
  const url = `${APIURL}?q=${keyword}&maxResults=${limit}&startIndex=${startIndex}&langRestrict=ja&printType=books&key=${APIKEY}`;

  // 検索結果が空の場合、エラー
  if (total <= 0 || !items) {
    return errorData;
  }

  // 取得したデータの取り出し
  const books: GoogleBook[] = items.map((res: any) => ({
    googleBookId: res.id,
    title: res.volumeInfo?.title ?? "",
    authors: res.volumeInfo?.authors ?? [],
    description: res.volumeInfo?.description ?? "",
    publishDate: res.volumeInfo?.publishedDate ?? "",
    imageLink: res.volumeInfo?.imageLinks?.smallThumbnail ?? "",
    volumeLink: res.volumeInfo?.canonicalVolumeLink ?? "",
  }));
  return { limit, page, total, books };
}

// GoogleBookAPIから1件を取得する
export async function getBookById(id: string): Promise<GetBookByIdReturn> {
  // APIに対する通信処理
  const url = `${APIURL}/${id}?key=${APIKEY}`;
  const data = await fetch(url);
  const res = await data.json();

  // 結果が空の場合、エラー
  if (res.error) {
    return {
      success: false,
    };
  }

  //　取得したデータの取り出し
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
