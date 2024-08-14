"use client";

import BusinessCard from "@/components/BusinessCard";
import { businessData } from "@/database";
import { Business, Timetable } from "@/types";
import React, { useEffect, useMemo, useState } from "react";
import Map from "@/components/Map/Map";
import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import axios from "axios";
import toast from "react-hot-toast";

function BusinessPage({ params }: any) {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  const [business, setBusiness] = useState<Business>();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/data");
      const selectedData = data.data.find(
        (item: Business) => item.id === params.id
      );
      setBusiness(selectedData);
    };
    try {
      getData();
    } catch (error: any) {
      toast.error(error?.message);
    }
  }, []);

  return (
    <div>
      {/* {business && <BusinessCard key={business.id} item={business} />} */}
      {/* <Map markerLocations={business} /> */}
      {business && (
        <div className=" w-full card gap-y-10    ">
          <figure className="w-full  h-fit">
            <Image
              src={business.logo}
              alt={business.title}
              width={1000}
              height={1000}
              className="w-full h-fit object-cover rounded-t-md"
            />
          </figure>
          <div className="w-full  flex  pb-10  gap-x-10 px-10 shadow-lg rounded-lg overflow-hidden">
            <div className=" w-1/2 flex flex-col    justify-start items-start gap-y-7">
              <h2 className="text-2xl text-primary-900 font-bold  ">
                {business.title}
              </h2>
              <p className="text-primary-700 text-xl ">
                {business.description}
              </p>
              <div className="text-primary-700 text-lg">
                <span>Type:</span> {business.type}
              </div>
              <div className="text-primary-700 text-lg">
                <span>Industry:</span> {business.industry}
              </div>
              <div className="text-primary-700 text-lg">
                <span>Address:</span>
                <p>
                  {business.addressInfo.address}, {business.addressInfo.borough}
                  , {business.addressInfo.region},{" "}
                  {business.addressInfo.countryCode}
                </p>
              </div>
              <div className="text-primary-700 text-lg">
                <span>Phone:</span> {business.phone}
              </div>
              <div className="text-primary-700 text-lg">
                <span>Latitude:</span> {business.latitude},{" "}
                <span>Longitude:</span> {business.longitude}
              </div>
              <div className="text-primary-700 text-lg">
                <span>Has Delivery:</span>{" "}
                {business.has_delivery ? "Yes" : "No"}
              </div>
              <div className="text-primary-700 text-lg">
                <span>Has In-Store Shopping:</span>{" "}
                {business.has_in_store_shopping ? "Yes" : "No"}
              </div>
              <div className="text-primary-700 text-lg">
                <span>Same Day Delivery:</span>{" "}
                {business.has_delivery_same_day ? "Yes" : "No"}
              </div>
              <div className="text-primary-700 text-lg">
                <span>Tags:</span> {business.tags.join(", ")}
              </div>
              <div className="flex flex-col justify-start px-7 gap-y-5">
                <span className="text-primary-700 text-xl">Working Hours:</span>
                <ul className="flex gap-x-10 gap-y-7 justify-start items-center flex-wrap">
                  {Object.keys(business.workTime.work_hours.timetable).map(
                    (day) => (
                      <li
                        key={day}
                        className="capitalize text-primary-600 text-lg"
                      >
                        <span className="flex flex-col justify-start items-center ">
                          {day}:
                        </span>{" "}
                        {(
                          business.workTime.work_hours.timetable as Record<
                            keyof Timetable,
                            any
                          >
                        )[day as keyof Timetable].map(
                          (time: any, index: any) => (
                            <span
                              className="text-teal-500 dark:text-yellow-300"
                              key={index}
                            >
                              {time.open.hour}:
                              {time.open.minute.toString().padStart(2, "0")} -{" "}
                              {time.close.hour}:
                              {time.close.minute.toString().padStart(2, "0")}
                            </span>
                          )
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="flex justify-start items-center gap-x-10">
                <span className="text-primary-700 text-lg">
                  Business Links:
                </span>
                <ul className="flex justify-start items-center gap-x-10">
                  {business.businessLinks.map((link, index) => (
                    <li className="text-primary-700 text-lg " key={index}>
                      <a
                        href={`tel:${link.value}`}
                        className="tooltip tooltip-right hover:scale-105 transition-all duration-200 cursor-pointer  "
                        data-tip={link.value}
                      >
                        {link.type === "Telephone" ? (
                          <div className="flex justify-center items-center p-2 rounded-full border-2  border-primary-900">
                            <BsFillTelephoneFill />
                          </div>
                        ) : (
                          ""
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                src="/image/map.png"
                width={1000}
                height={1000}
                alt="map"
                className="w-full h-full object-cover shadow-lg rounded-md"
              />
              {/* <Map
              item={{
                latitude: business.latitude,
                longitude: business.longitude,
              }}
            /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusinessPage;
