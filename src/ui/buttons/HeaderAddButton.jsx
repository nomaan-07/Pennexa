import { LucidePlus } from "lucide-react";

import HeaderButton from "./HeaderButton";

function HeaderAddButton() {
  return (
    <HeaderButton to="/add-transaction">
      <LucidePlus />
    </HeaderButton>
  );
}

export default HeaderAddButton;
