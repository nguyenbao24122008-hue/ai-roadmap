import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "AI Engineer Roadmap",
  description: "Tổng quan ngành AI, cách trở thành AI Engineer và lộ trình học.",
};

const navLinks = [
  { href: "/", label: "Tổng quan" },
  { href: "/become", label: "Trở thành AI Engineer" },
  { href: "/roadmap", label: "Lộ trình" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3">
            <Link href="/" className="text-lg font-bold text-indigo-600">
              AI Roadmap
            </Link>
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-indigo-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          AI Engineer Roadmap – dự án học Next.js
        </footer>
      </body>
    </html>
  );
}