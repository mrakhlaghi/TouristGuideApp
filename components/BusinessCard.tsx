"use client";
import Link from "next/link";
import SubSection from "./SubSection";
import Image from "next/image";

export default function BusinessCard({ item }: any) {
  return (
    <Link
      href={{
        pathname: `/business/${item.id}`,
      }}
      className="w-fit h-fit flex flex-col justify-center items-start my-10 card shadow-xl hover:scale-[1.03] transition-all "
    >
      <figure className="w-full h-96">
        <Image
          src={item.logo ? item.logo : ""}
          alt={item.title}
          width={1000}
          height={1000}
          className=" object-cover rounded-t-md  "
        />
      </figure>
      <div className="w-full h-fit flex flex-col justify-center items-start gap-y-7 px-14 py-8 ">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl  text-primary-900 font-bold ">
            {item.title}
          </h1>

          <p className="text-xl  text-primary-600 font-semibold ">
            {item.description}
          </p>
        </div>
        <div className="h-24 flex flex-col justify-start items-start flex-wrap mt-3 gap-x-7 gap-y-5">
          <SubSection
            key={` ${item.id}subsection_industry`}
            label="industry "
            value={item.industry}
          />
          <SubSection
            key={` ${item.id}subsection_phone`}
            label="phone "
            value={item.phone}
          />
          <SubSection
            key={` ${item.id}subsection_delivery`}
            label="has delivery "
            value={item.has_delivery === true ? "✅" : "❌"}
          />
          <SubSection
            key={` ${item.id}subsection_store-shopping`}
            label="has in store shopping "
            value={item.has_in_store_shopping === true ? "✅" : "❌"}
          />
          <SubSection
            key={` ${item.id}subsection_delivery-same-day`}
            label="has delivery same day "
            value={item.has_delivery_same_day === true ? "✅" : "❌"}
          />
          <SubSection
            key={` ${item.workTime}subsection_workTime`}
            label="working time "
            value="More..."
          />
        </div>
      </div>
    </Link>
  );
}
