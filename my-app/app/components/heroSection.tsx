'use client'
import { Inter } from "next/font/google";
import { GiCheckMark } from "react-icons/gi";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection() {
  return (
    <main className={inter.className}>
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-center mt-12 w-9/12 px-8">

        <div className="flex justify-center items-center -mb-4">
          <div className="border-t border-gray-300 w-48 "></div>
          <h1 className="mx-6 text-2xl font-semibold">
            Sell Your Car on PakWheels and Get the Best Price
          </h1>
          <div className="border-t border-gray-300 w-48"></div>
          </div>

        </div>
        <section className="flex flex-1 justify-center items-center border-x-2 border-b-2 w-11/12 h-auto py-10 px-2 
        lg:w-8/12 lg:py-12 lg:px-10">
          <div className="w-1/2 text-sm lg:pl-16">
            <h1 className="flex font-semibold text-xl text-blue-800">
              Post your Ad on PakWheels
            </h1>
            <br />
            <ul>
              <li className="flex">
                <span className="mr-2 text-green-500">
                  <GiCheckMark />
                </span>
                Post your Ad for Free in 3 Easy Steps
              </li>
              <li className="flex">
                <span className="mr-2 text-green-500">
                  <GiCheckMark />
                </span>
                Get Genuine offers from Verified Buyers
              </li>
              <li className="flex">
                <span className="mr-2 text-green-500">
                  <GiCheckMark />
                </span>
                Sell your car Fast at the Best Price
              </li>
              <br />
              <button className="px-7 py-2 rounded-md bg-red-700 text-white text-gl">
                Post Your Ad
              </button>
            </ul>
          </div>
          <div 
          className="flex flex-col items-center">
            <span className="flex-grow h-20 border-2 bg-gray-300"></span>
            <span className="mx-2 text-gray-500 font-semibold text-2xl">OR</span>
            <span className="flex-grow h-20 border-2 bg-gray-300"></span>
          </div>

          <div className="w-1/2 text-sm lg:pl-16">
            <h1 className="flex font-semibold text-xl text-blue-800">
              Try PakWheels Sell It For Me
            </h1>
            <br />
            <ul>
              <li className="flex">
                <span className="mr-2 text-green-500">
                  <GiCheckMark />
                </span>
                Dedicated Sales Expert to Sell your Car
              </li>
              <li className="flex">
                <span className="mr-2 text-green-500">
                  <GiCheckMark />
                </span>
                We Bargain for you and share the Best Offer
              </li>
              <li className="flex">
                <span className="mr-2 text-green-500">
                  <GiCheckMark />
                </span>
                We ensure Safe & Secure Transaction
              </li>
              <br />
              <button className="px-5 py-2 rounded-md bg-blue-800 text-white text-gl">
                Register Your Car
              </button>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}
