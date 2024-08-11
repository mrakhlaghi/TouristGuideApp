"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button className="hover:scale-110 transition-all"  onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
}
export default DarkModeToggle;
