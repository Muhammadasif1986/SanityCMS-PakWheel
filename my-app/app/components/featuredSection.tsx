'use client'
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarOutline, MdOutlineStar } from "react-icons/md";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const revalidate = 60;

interface Car {
  name: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: number;
  model: string;
  slug: string;
}

export default async function FeaturedSection() {
  let allCar: Car[] = [];

  try {
    const query = `*[_type == 'cars']{
      name,
      image,
      price,
      model,
      "slug":slug.current
    }`;
    allCar = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching featured cars:", error);
  }

  return (
    <main className={inter.className}>
      <div className="flex justify-center items-center bg-gray-200 w-full h-auto mt-10">
        <div className="w-11/12 md:w-10/12 lg:w-8/12">
          <div className="flex justify-between py-14">
            <h1 className="text-2xl">Featured New Cars</h1>
            <p className="text-blue-700 text-sm">View All New Cars</p>
          </div>

          <div>
            <ul className="flex w-full justify-between md:w-3/6">
              <Link href="#">
                <li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">
                  Popular
                </li>
              </Link>
              <Link href="#">
                <li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">
                  Upcoming
                </li>
              </Link>
              <Link href="#">
                <li className="active:font-semibold border-b-4 active:border-blue-700 pb-2">
                  Newly Launched
                </li>
              </Link>
            </ul>
            <hr className="border-2 border-gray-300" />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 gap-7 mt-5 mb-10">
            
             { allCar.map((Cars: Car) => (
                <div key={Cars.slug}>
                  <Link href={`/carDetails/${Cars.slug}`}>
                    <div className="bg-white mr-4 rounded-xl shadow-xl">
                      <div className="w-full h-auto">
                        {Cars.image && (
                          <Image
                            src={urlFor(Cars.image).width(500).height(300).url()}
                            alt={`${Cars.name}`}
                            width={300}
                            height={300}
                          />
                        )}
                      </div>
                      <div className="flex flex-col justify-center items-center py-5">
                        <h1 className="text-blue-900 text-base font-semibold">
                          {Cars.name}
                        </h1>
                        <p className="text-green-500 text-base">PKR {Cars.price}</p>
                        <div className="flex items-center py-4">
                          <span className="flex items-center text-base text-orange-500">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStarOutline />
                            <MdOutlineStarOutline />
                          </span>
                          <p className="text-blue-700 text-sm">{Cars.model}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
           }
          </section>
        </div>
      </div>
    </main>
  );
}
