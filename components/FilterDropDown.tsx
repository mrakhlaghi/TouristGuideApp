import Select from "./Select";
import { ReactEventHandler } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function FilterDropDown({
  options,
  filterField,
  className,
  optionClassName,
}: {
  options: any;
  filterField: any;
  className: string;
  optionClassName: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const filterValue = searchParams.get(filterField);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    params.set(filterField, e.target.value);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Select
      className={className}
      optionClassName={optionClassName}
      onChange={handleChange}
      value={filterValue}
      // onChange={null}
      // value={filterValue}
      options={options}
    />
  );
}
export default FilterDropDown;
