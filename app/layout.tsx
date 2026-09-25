import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BottomNav, TopNav, UserBox } from "@/components/app-nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Учёт офисов",
  description: "Приложение для учёта помещений, арендаторов и затрат",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full bg-white text-zinc-900">
        <header className="sticky top-0 z-10 hidden border-b border-zinc-200 bg-white md:block">
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-6">
            <Link
              href="/"
              className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900"
            >
              Учёт офисов
            </Link>
            <div className="flex flex-1 items-center justify-between gap-6">
              <TopNav />
              <UserBox />
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl px-4 py-6 pb-24 md:px-6 md:py-8 md:pb-8">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}