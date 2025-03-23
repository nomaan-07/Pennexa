import HeaderButtonGroup from "../buttons/HeaderButtonGroup";
import CurrentPage from "./CurrentPage";
import Logo from "./Logo";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-white px-4 py-2 md:left-70 md:py-4 dark:bg-slate-800">
      <Logo type="header" className="md:hidden" />
      <CurrentPage />
      <HeaderButtonGroup />
    </header>
  );
}

export default Header;
