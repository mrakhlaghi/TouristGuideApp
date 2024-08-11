"use client";
import { HiOutlineUser } from "react-icons/hi";
import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineFilter } from "react-icons/hi";

function HeaderMenu() {
  const imageLoader = ({ src, width, height, quality }: any) => {
    return `${src}?w=${width}?h=${height}&q=${quality || 75}`;
  };

  return (
    <div className="w-full flex  justify-between ">
      <ul className=" flex gap-x-4  items-center w-full   rounded-box ">
        <li className="hover:scale-110 transition-all">
          <Link href="/" className="tooltip tooltip-bottom" data-tip="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="stroke-primary-900"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Link>
        </li>
        <li className="hover:scale-110 transition-all">
          <Link
            href={{ pathname: "/filter", query: { category: "All" } }}
            className="tooltip tooltip-bottom"
            data-tip="Filter page"
          >
            <HiOutlineFilter className="h-6 w-6 stroke-primary-900" />
          </Link>
        </li>

        <li className="tooltip tooltip-bottom" data-tip="Theme">
          <DarkModeToggle />
        </li>
      </ul>
      <div className="avatar flex items-start justify-start ">
        <div className="ring ring-offset-2 ring-offset-white dark:ring-offset-base-100  ring-primary w-10 rounded-full ">
          <Image
            loader={imageLoader}
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="avatar"
            width={20}
            height={20}
            // className="w-96"
          />
        </div>
      </div>
    </div>
  );
}
export default HeaderMenu;
