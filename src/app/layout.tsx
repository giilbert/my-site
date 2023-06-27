import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import "./globals.css";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gilbert Zhang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("flex justify-center", inter.className)}>
        <main className="mt-12 mx-4 w-[48rem]">
          <Header />

          <Nav />

          <hr className="mt-2 mb-6" />

          {children}
        </main>
      </body>
    </html>
  );
}
