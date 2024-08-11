import { Business } from "@/types";
import clsx from "clsx";
import React from "react";

function SubSection({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-x-2 justify-center text-secondary-700 dark:text-primary-600 ">
      <label htmlFor="industry" className="text-lg">
        {label}:
      </label>

      <span
        id="industry"
        className={clsx("text-lg", value === "More..." ? "underline text-primary-300 text-base" : "")}
      >
        {value}
      </span>
    </div>
  );
}

export default SubSection;
