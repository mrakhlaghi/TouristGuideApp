"use client";

import Image from "next/image";
import MainBusinessCard from "@/components/MainBusinessCard";
import StoreCard from "@/components/StoreCard";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
 
  return (
    <>
      <div className="flex flex-col gap-y-11 justify-start items-start divide-y divide-gray-600">
        <div className=" flex flex-col justify-center items-stretch gap-y-5 pb-10 ">
          <h1 className="text-4xl font-bold text-primary-900 mb-5 ">
            Amsterdam{" "}
          </h1>
          <div className=" flex justify-between items-center  lg:items-start flex-wrap lg:flex-nowrap gap-y-10 gap-x-10 h-full">
            <Image
              src="/image/Amsterdam.png"
              alt="car!"
              width={600}
              height={600}
              className=" object-cover lg:aspect-square xl:aspect-square lg:order-2 sm:w-full  lg:w-1/2 xl:w-2/5 h-full   lg:max-h-full xl:max-h-96 2xl:max-h-80  rounded-lg"
            />
            <div className="flex flex-col justify-start items-start w-full lg:w-1/2  ">
              <div className="pl-2 ">
                <p className="text-lg !text-slate-600 dark:!text-[#A6ADBB] text-justify prose first-line:uppercase first-line:tracking-widest first-letter:text-3xl first-letter:font-bold ">
                  Amsterdam, city and port, western Netherlands, located on the
                  IJsselmeer and connected to the North Sea. It is the capital
                  and the principal commercial and financial centre of the
                  Netherlands.
                </p>
                <p className="text-lg !text-slate-600 dark:!text-[#A6ADBB] text-justify prose ">
                  To the scores of tourists who visit each year, Amsterdam is
                  known for its historical attractions, for its collections of
                  great art, and for the distinctive colour and flavour of its
                  old sections, which have been so well preserved. However,
                  visitors to the city also see a crowded metropolis beset by
                  environmental pollution, traffic congestion, and housing
                  shortages. It is easy to describe Amsterdam, which is more
                  than 700 years old, as a living museum of a bygone age and to
                  praise the eternal beauty of the centuries-old canals, the
                  ancient patrician houses, and the atmosphere of freedom and
                  tolerance, but the modern city is still working out solutions
                  to the pressing urban problems that confront it.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-lg text-justify text-slate-600 dark:text-[#A6ADBB]  ">
              Amsterdam is the nominal capital of the Netherlands but not the
              seat of government, which is The Hague. The royal family, for
              example, is only occasionally in residence at the Royal Palace, on
              the square known as the Dam, in Amsterdam. The city lacks the
              monumental architecture found in other capitals. There are no wide
              squares suitable for big parades, nor are there triumphal arches
              or imposing statues. Amsterdam’s intimate character is best
              reflected in the narrow, bustling streets of the old town, where
              much of the population still goes about its business. While there
              are reminders of the glorious past—gabled houses, noble brick
              facades clad with sandstone, richly decorated cornices, towers and
              churches, and the music of carillons and barrel organs—the
              realities of life in the modern city often belie this romantic
              image.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center pt-10 gap-y-20 ">
          <h1 className="text-2xl font-bold text-primary-600">
            {" "}
            Do you wanna explore the Amsterdam ?? 👇
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-x-10 gap-y-5">
            <MainBusinessCard
              key="hotels-card"
              alt="hotels-card"
              src="/image/hotels(3).jpg"
              cardTitle="Most Luxury Hotels"
              subtitle="Most Luxury hotels you can go ..."
              href="/filter"
              params="hotel"
            />
            <MainBusinessCard
              key="restaurants-card"
              alt="restaurants-card"
              src="/image/restaurant(2).jpg"
              cardTitle="Best Restaurants"
              subtitle="Best Restaurants you can go ..."
              href="/filter"
              params="restaurant"
            />
            <MainBusinessCard
              key="travel-card"
              alt="travel-card"
              src="/image/travel(3).jpg"
              cardTitle="Tourist places"
              subtitle="The most beautiful places to visit ..."
              href="/filter"
              params="tourist-places"
            />
            <StoreCard
              key="stores-card"
              alt="stores-card"
              src="/image/amsterdam-store.jpg"
              cardTitle="Stores"
              subtitle="Best Stores you can go ..."
              href="/filter"
              params="store"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
