import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "عضوية الفندق", // Hotel Membership
  description: "تطبيق عضوية فندق حديث", // Modern hotel membership application
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl"><head/><body className={inter.className}>{children}</body></html>
  );
}
