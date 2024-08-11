import clsx from "clsx";

function Select({ className, optionClassName, value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={clsx(
        `textField__input py-2 text-xs bg-secondary-0 ${className}`
      )}
    >
      {options.map((item) => (
        <option className={clsx('',optionClassName)} key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}
export default Select;
