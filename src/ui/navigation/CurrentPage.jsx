import { useLocation } from "react-router";

function CurrentPage() {
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "").replace("-", " ");

  return (
    <h2 className="hidden text-2xl font-semibold capitalize md:block lg:text-3xl">
      {currentPage}
    </h2>
  );
}

export default CurrentPage;
