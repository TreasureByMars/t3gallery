import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "The Glorious Webpage",
  description: "노래하자 김정은 자랑하자 김정은 우리의 령도자 친근한 어버이",
  icons: [{ rel: "icon", url: "https://iauq6fdic2.ufs.sh/f/6FjQeyfANohveewM7NWPoYWGFRrMmi4hvwTLE5NCktjIHcQA" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable}`}>
        <div className="w-full"> First Layout</div>
        {children}
      </body>
    </html>
  );
}
