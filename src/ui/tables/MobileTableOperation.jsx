import { useState } from "react";

import MobileFilterSort from "../filters/MobileFilterSort";
import BottomSheet from "../common/BottomSheet";
import Button from "../buttons/Button";
import FilterCheckbox from "../forms/FilterCheckbox";
import MobileFilterButton from "../buttons/MobileFilterButton";

import { useModal } from "../../hooks/uesModal";
import { useQueryParam } from "../../hooks/useQueryParam";

function MobileTableOperation({ field, options, icon }) {
  const { isOpen, openModal, closeModal } = useModal();
  const { getCurrentQueryParam, setQueryParam } = useQueryParam();
  const [value, setValue] = useState(() =>
    getCurrentQueryParam(field, options),
  );

  const currentFilter = getCurrentQueryParam(field, options);
  const fieldName = field === "sortBy" ? "sort" : "filter ";

  function handleSubmit(e) {
    e.preventDefault();
    if (value === currentFilter) return closeModal();

    setQueryParam({ [field]: value, page: 1 });
    closeModal();
  }

  function handleClose() {
    setValue(currentFilter);
    closeModal();
  }

  return (
    <>
      <MobileFilterButton
        iconName={icon}
        fieldName={fieldName}
        onClick={openModal}
      />

      <BottomSheet isOpen={isOpen} onClose={handleClose}>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <MobileFilterSort fieldName={fieldName}>
            {options.map((option) => (
              <FilterCheckbox
                key={option.value}
                option={option}
                onChange={setValue}
                currentFilter={currentFilter}
                value={value}
              />
            ))}
          </MobileFilterSort>
          <Button className="w-64">Apply</Button>
        </form>
      </BottomSheet>
    </>
  );
}

export default MobileTableOperation;
