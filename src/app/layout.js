import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import FbImg from "@/../public/facebook.png";
import InstImg from "@/../public/instagram.png";
import ThreadsImg from "@/../public/threads.png";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "我的網站",
  description: "早安",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-gray-200 p-8">
          <div
            className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex 
            justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden"
          >
            <Link href="/">
              <Image
                src={AvatarImg}
                alt="Avatar"
                className="w-[80px] h-[80px] rounded-full cursor-pointer"
              />
            </Link>

            <h1 className="mt-2 text-xl font-semibold">曾泓語</h1>
            <p className="max-w-[300px] text-center text-sm text-gray-600">
              實名上網。
            </p>

            {/* 社群連結 */}
            <div className="flex gap-4 my-5">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Image src={FbImg} alt="Facebook" width={30} height={30} className="cursor-pointer" />
              </a>

              <a href="https://www.instagram.com/hongyu_ts" target="_blank" rel="noopener noreferrer">
                <Image src={InstImg} alt="Instagram" width={30} height={30} className="cursor-pointer" />
              </a>

              <a href="https://www.threads.net/hongyu_ts" target="_blank" rel="noopener noreferrer">
                <Image src={ThreadsImg} alt="Threads" width={30} height={30} className="cursor-pointer" />
              </a>

              
            </div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-2">
              <Link href="/about">
                <div className={`w-full h-[84px] bg-gray-300 rounded-xl flex justify-center items-center`}>
                  About
                </div>
              </Link>

              <Link href="/hyu-friends">
                <div className={`w-full h-[84px] bg-gray-300 rounded-xl flex justify-center items-center`}>
                  HYU Friends
                </div>
              </Link>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl flex justify-center items-center">
                （以後作品放這）
              </div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl flex justify-center items-center">
                （空空如也）
              </div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl flex justify-center items-center">
                （以後做個小遊戲放這）
              </div>
            </div>
          </div>

          {children}
        </div>
      </body>
    </html>
  );
}
