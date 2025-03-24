import { SlidersHorizontal } from "lucide-react";

import { useMobileFilter } from "../../hooks/useMobileFilter";
import MobileFilterMenu from "./MobileFilterMenu";

import Modal from "../layout/Modal";
import HeaderButton from "../buttons/HeaderButton";

function MobileFilterModal() {
  const { isModalOpen, toggleFilterModal } = useMobileFilter(false);

  return (
    <>
      <HeaderButton type="filter" onClick={toggleFilterModal}>
        <SlidersHorizontal />
      </HeaderButton>
      <Modal isOpen={isModalOpen} onClick={toggleFilterModal} />
      <MobileFilterMenu />
    </>
  );
}

export default MobileFilterModal;
