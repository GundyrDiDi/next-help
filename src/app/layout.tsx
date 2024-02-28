import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CKBLayout from "@/components/CKBLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "THE CKB",
  // TODO: add description
  description: "Generated by create next app",
  keywords:'',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CKBLayout>
      {children}
      </CKBLayout>
        </body>
    </html>
  );
}
