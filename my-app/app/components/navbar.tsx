'use client'
import { Inter } from "next/font/google";
import Link from "next/link";
import { MdAppShortcut } from "react-icons/md";
import Image from "next/image";
import pwLogo from "../../public/pakwheelLogo.svg";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Navbar() {
  return (
    <div>
      <header>
        <nav className={inter.className}>
          <div className="flex flex-col justify-normal text-red-50 bg-slate-950 w-full h-auto items-center pb-2">
            <div className="flex justify-between bg-black w-3/4 border-b-slate-700 border-b-2 h-10">
              <div className="flex items-center h-auto text-red-50 text-xs font-semibold w-full">
                <span
                  className="mr-1"
                  style={{ fontSize: "1.7rem", color: "rgba(196, 77, 86);, 1" }}
                >
                  <MdAppShortcut />
                </span>
                Download App via SMS
              </div>
              <div className="flex items-center h-auto text-red-50 text-sm w-4/6 lg:w-2/6">
                <Link href="#">
                  <span className="text-0.7rem text-rose-600">Urdu</span>
                </Link>
                <Link href="#">
                  <span className="text-0.1rem text-red-50 flex justify-center items-center">
                    <span className="text-slate-600 mr-1 ml-2">|</span>Sign up
                  </span>
                </Link>
                <Link href="#">
                  <span className="text-0.1rem text-red-50 flex justify-center items-center">
                    <span className="text-slate-600 mr-1 ml-2">|</span>Sign in
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col w-full h-full items-center lg:flex-row">
              <div className=" flex  justify-around w-3/12 h-22 ml-16">
                <Image
                  className="text-0.5rem"
                  src={pwLogo}
                  alt="logo"
                  style={{ width: "160px", height: "auto" }}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-11/12 text-xs 
              lg:font-semibold lg:text-base lg:w-4/6 lg:flex-row">
                <div className="flex justify-between items-center">
                <div className="mr-2">
                  <span>Use Cars</span>
                  <select className="bg-transparent h-5 w-4">
                    <option value="1"></option>
                    <option value="2nd"></option>
                  </select>
                </div>
                <div className="mr-2">
                  <span>New Cars</span>
                  <select className="bg-transparent h-5 w-4">
                    <option value="1"></option>
                    <option value="2nd"></option>
                  </select>
                </div>
                <div className="mr-2">
                  <span>Bike</span>
                  <select className="bg-transparent h-5 w-4">
                    <option value="1"></option>
                    <option value="2nd"></option>
                  </select>
                </div>
                <div className="mr-2">
                  <span>Auto Store</span>
                  <select className="bg-transparent h-5 w-4">
                    <option value="1"></option>
                    <option value="2nd"></option>
                  </select>
                </div>
                </div>
                <div className="flex justify-between items-center">
                <div className="mr-2">
                  <span>Videos</span>
                </div>
                <div className="mr-2">
                  <span>Forums</span>
                </div>
                <div className="mr-2">
                  <span>Blogs</span>
                </div>
                <div className="w-4/12 mb-6">
                  <span className="ml-4 bg-blue-600 text-xs w-7 rounded-md px-1">New</span>
                  <br />
                  <span>More</span>
                  <select className="bg-transparent h-5 w-4">
                    <option value="1"></option>
                    <option value="2nd"></option>
                  </select>
                </div>
              </div>
              </div>
              <div>
                <button className="px-4 py-2 rounded-md font-bold bg-rose-600 lg:mr-4">
                  Post an Ad
                  <select className="bg-transparent h-5 w-4">
                    <option value="1"></option>
                    <option value="2nd"></option>
                  </select>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
