import Select from "./Select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

function FilterCheckBox({
  wrapperClassName,
  inputClassName,
  label,
  id,
  
  param,
}: {
  wrapperClassName?: string;
  inputClassName?: string;
  label: string;
  id: string;
  param: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const filterValue = searchParams.get(param) || "";


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    if (e.target.checked) {
      params.set(param, "true");
    } else {
      params.delete(param);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div
      className={clsx(
        "text-primary-900 dark:text-primary-400 w-full flex justify-between items-center gap-x-3 pl-2",
        wrapperClassName
      )}
    >
      <label className="" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={clsx("rounded-md", inputClassName)}
        type="checkbox"
        checked={filterValue === "true"}
        onChange={handleChange}
      />
    </div>
  );
}
export default FilterCheckBox;
