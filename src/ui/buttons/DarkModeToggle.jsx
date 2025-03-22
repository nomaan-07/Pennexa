import { LucideMoon } from "lucide-react";

import HeaderButton from "./HeaderButton";

import { useDarkMode } from "../../hooks/useDarkMode";

function DarkModeToggle() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <HeaderButton onClick={toggleDarkMode}>
      <LucideMoon strokeWidth={1.5} />
    </HeaderButton>
  );
}

export default DarkModeToggle;
