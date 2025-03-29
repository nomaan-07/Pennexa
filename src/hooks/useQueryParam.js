import { useSearchParams } from "react-router";

export function useQueryParam() {
  const [searchParams, setSearchParams] = useSearchParams();

  function getQueryParam(field, defaultValue) {
    return searchParams.get(field) || defaultValue;
  }

  function setQueryParam(field, value) {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(field, value);
    setSearchParams(newParams);
  }

  function setQueryParams(updates) {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([field, value]) => {
      newParams.set(field, value);
    });
    setSearchParams(newParams);
  }

  function getCurrentQueryParam(field, options) {
    return searchParams.get(field) || options.at(0).value;
  }

  return { getQueryParam, setQueryParam, getCurrentQueryParam, setQueryParams };
}
