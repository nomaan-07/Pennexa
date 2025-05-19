import { FormEvent, useState } from "react";

import MobileFilterSort from "../filters/MobileFilterSort";
import BottomSheet from "../common/BottomSheet";
import Button from "../buttons/Button";
import FilterCheckbox from "../forms/FilterCheckbox";
import MobileFilterButton from "../buttons/MobileFilterButton";

import { useModal } from "../../hooks/uesModal";
import { useQueryParam } from "../../hooks/useQueryParam";
import { FilterValue, Option, SortValue } from "../../utils/types";

interface MobileTableOperationProps {
  field: "last" | "sortBy";
  options: (Option<FilterValue> | Option<SortValue>)[];
  icon: "Filter" | "ArrowUpDown";
}

type Value = FilterValue | SortValue;

function MobileTableOperation({
  field,
  options,
  icon,
}: MobileTableOperationProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const { getCurrentQueryParam, setQueryParams } = useQueryParam();
  const [value, setValue] = useState<Value>(
    () => getCurrentQueryParam(field, options) as Value,
  );

  const currentFilter = getCurrentQueryParam(field, options) as Value;
  const fieldName = field === "sortBy" ? "sort" : "filter";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value === currentFilter) return closeModal();

    setQueryParams({ [field]: value, page: "1" });
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
