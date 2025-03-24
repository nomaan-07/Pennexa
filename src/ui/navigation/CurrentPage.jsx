import { useLocation } from "react-router";

function CurrentPage() {
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "").replace("-", " ");

  return (
    <h1 className="hidden text-3xl font-semibold capitalize lg:block">
      {currentPage}
    </h1>
  );
}

export default CurrentPage;
