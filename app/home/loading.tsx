"use client";
import LoadingSkeleton from "@/components/LoadingSkeleton";

function Loading() {
  return (
  <div className=" w-screen h-screen flex justify-center items-center relative ">
    <LoadingSkeleton/>
  </div>
  );
}
export default Loading;
