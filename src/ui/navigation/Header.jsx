import HeaderButtonGroup from "../buttons/HeaderButtonGroup";
import HeaderTile from "./HeaderTile";
import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-60 flex h-14 items-center justify-between bg-white px-4 sm:px-8 lg:left-70 lg:h-20 lg:px-12 lg:py-4 dark:bg-slate-800">
      <Logo type="header" className="lg:hidden" />
      <HeaderTile />
      <HeaderButtonGroup />
    </header>
  );
}

export default Header;
