import { useSearchParams } from "react-router";

export function useQueryParam(field, options) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(field) || options.at(0).value;

  function setQuery(value) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(field, value);
    setSearchParams(newParams);
  }

  return { setQuery, currentFilter };
}
