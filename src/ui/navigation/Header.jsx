import HeaderButtonGroup from "../buttons/HeaderButtonGroup";
import Logo from "./Logo";

function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-white px-4 py-2 md:left-70 md:justify-end md:py-4 dark:bg-slate-800">
      <div className="md:hidden">
        <Logo type="header" />
      </div>
      <HeaderButtonGroup />
    </div>
  );
}

export default Header;
