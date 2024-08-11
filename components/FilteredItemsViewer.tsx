"use-client";
import { data } from "@/database";
import React, { useEffect, useState } from "react";
import BusinessCard from "./BusinessCard";
import { useSearchParams } from "next/navigation";
import { Business } from "@/types";

function FilteredItemsViewer() {
  const [businesses, setBusinesses] = useState(data);
  const [queryParams, setQueryParams] = useState<{ [k: string]: string }>({});

  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setQueryParams(params);
  }, [searchParams]);

  useEffect(() => {
    const filterBusinesses = () => {
      const filteredByType = businesses?.filter((business:Business) => {
        if (queryParams["category"] === "All") {
          return business;
        } else {
          return business.type === queryParams["category"];
        }
      });

      let filteredQuery = { ...queryParams };
      delete filteredQuery.category;
      let finallyFiltered = filteredByType;
      if (Object.keys(filteredQuery).length > 0) {
        Object.keys(filteredQuery).forEach((key) => {
          finallyFiltered = finallyFiltered?.filter((buss) => {
            return buss[key as keyof Business] === Boolean(filteredQuery[key]);
          });
        });
      }

      // setFilteredBusinesses(finallyFiltered);
      setFilteredBusinesses(finallyFiltered);
    };

    filterBusinesses();
  }, [queryParams,businesses]);

  // const handleFilter = () => {
  //     let filtered = businesses;
  //     if (type) {
  //       filtered = filtered.filter((business) => business.type === type);
  //     }
  //     if (attributes.length) {
  //       filtered = filtered.filter((business) =>
  //         attributes.every((attr) => business.attributes.includes(attr))
  //       );
  //     }
  //     setFilteredBusinesses(filtered);
  //   };

  return (
    <div>
      <div className="flex justify-start items-center gap-x-3">
        <span className="text-primary-800 text-xl" >Filtered Items : </span>
        <span className=" text-xl text-white  flex justify-center items-center rounded-full px-3 py-4 badge badge-primary badge-md ">
        {filteredBusinesses?.length}
      </span>
      </div>
      
      {filteredBusinesses?.map((item) => {
        return <BusinessCard key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FilteredItemsViewer;
