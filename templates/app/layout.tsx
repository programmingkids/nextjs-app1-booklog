import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const notoSansJP400 = Noto_Sans_JP({
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "BookLog",
    template: "%s | BookLog",
  },
  description: "読書アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJP400.className} suppressHydrationWarning={true}>
        <Header />
        <main className="min-h-[calc(100vh-7rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
