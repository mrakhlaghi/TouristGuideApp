import HeaderMenu from "./HeaderMenu";
function Header() {
  return (
    <header className="bg-secondary-0 pb-4  px-16 border-b border-secondary-200">
      <div
        className={`container  flex items-center justify-end gap-x-8  pt-5`}
      >
        <HeaderMenu />
      </div>
    </header>
  );
}
export default Header;
