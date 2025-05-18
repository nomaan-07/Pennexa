import { useSearchParams } from "react-router";

type Field = "page" | "last" | "sortBy";
type DefaultValue = "all" | "date-desc" | "1";
type Option = {
  value: string;
  label: string;
};

interface Updates {
  last?: string;
  sortBy?: string;
  page: string;
}

export function useQueryParam() {
  const [searchParams, setSearchParams] = useSearchParams();

  function getQueryParam(field: Field, defaultValue: DefaultValue) {
    return searchParams.get(field) || defaultValue;
  }

  function setQueryParam(field: Field, value: string) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(field, value);
    setSearchParams(newParams);
  }

  function setQueryParams(updates: Updates) {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([field, value]) => {
      newParams.set(field, value);
    });
    setSearchParams(newParams);
  }

  function getCurrentQueryParam(field: Field, options: Option[]) {
    return searchParams.get(field) || options[0].value;
  }

  return { getQueryParam, setQueryParam, getCurrentQueryParam, setQueryParams };
}
