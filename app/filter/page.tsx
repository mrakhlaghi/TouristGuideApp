"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import FilterDropDown from "@/components/FilterDropDown";
import Business from "@/components/BusinessCard";
import FilterCheckBox from "@/components/FilterCheckBox";
import FilteredItemsViewer from "@/components/FilteredItemsViewer";

const FilterPage = ({ params }: any) => {
  // const [businesses, setBusinesses] = useState([]);

  // useEffect(() => {
  //   fetch("/businesses.json")
  //     .then((response) => response.json())
  //     .then((data) => setBusinesses(data));
  // }, []);

  const categoriesOptions = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "restaurant",
      value: "restaurant",
    },
    {
      label: "hotel",
      value: "hotel",
    },
    {
      label: "store",
      value: "store",
    },
    {
      label: "tourist-places",
      value: "tourist-places",
    },
  ];

  return (
    <>
      <div className="flex  divide-x  divide-slate-200 dark:divide-secondary-200 gap-x-7 w-full h-full  ">
        <div className=" sticky top-24 w-1/5 h-full flex flex-col justify-center items-start gap-x-32 gap-y-7 flex-wrap">
          <span className="text-primary-900 text-xl ">Filters :</span>
          <div className="filter-bar w-full flex-col flex justify-center items-center gap-x-10 pl-1">
            <div className="flex justify-start w-full flex-col items-center gap-x-5 gap-y-7 ">
              <div className="   dark:text-primary-400 w-full flex justify-between items-center gap-x-3">
                <label className="text-primary-900" htmlFor="category">
                  Category
                </label>
                <FilterDropDown
                  className=" !text-base text-primary-900 dark:text-primary-400 "
                  optionClassName="h-10 !text-base !py-5"
                  options={categoriesOptions}
                  filterField="category"
                />
              </div>
              <div className=" text-primary-900 justify-start w-full">
                Attributes:
              </div>

              <FilterCheckBox
                key="delivery-checkbox"
                id="delivery"
                inputClassName="w-5 h-5"
                label="Delivery"
                param="has_delivery"
              />
              <FilterCheckBox
                key="in-store-shopping-checkbox"
                id="in-store-shopping"
                inputClassName="w-5 h-5"
                label="In store Shopping"
                param="has_in_store_shopping"
              />
              <FilterCheckBox
                key="same-day-delivery-checkbox"
                id="same-day-delivery"
                inputClassName="w-5 h-5"
                label="Same Day Delivery"
                param="has_delivery_same_day"
              />
            </div>
          </div>
        </div>
        <div className="w-4/5 h-full pl-8">
          <FilteredItemsViewer />
        </div>
      </div>
    </>
  );
};

export default FilterPage;
