import "./globals.css";
import type { Metadata } from "next";
import { ClientLayoutWrapper } from "@/components/LayoutWrapper";
import { Space_Grotesk } from "next/font/google";
const font = Space_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
  title:
    "Lex & Gray Attorneys | Where Legal Excellence Meets Modern Professionalism",
  description:
    "Lex & Gray Attorneys provides premium legal services with a blend of tradition and innovation. Specialized in providing clear, reliable legal solutions.",
  keywords:
    "attorneys, law firm, legal services, Lex & Gray, corporate law, legal experts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${font.className}`}>
        <ClientLayoutWrapper>
          <main>{children}</main>
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
