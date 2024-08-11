import clsx from "clsx";
import { ThreeDots } from "react-loader-spinner";

function LoadingSkeleton({ width = "75", height = "40", wrapperClass = "" }) {
  return (
    <ThreeDots
      height={width}
      width={height}
      radius={9}
      color="rgb(var(--color-primary-900))"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
      wrapperClass={clsx(`w-full  ${wrapperClass}`)}
      visible={true}
    />
  );
}
export default LoadingSkeleton;
