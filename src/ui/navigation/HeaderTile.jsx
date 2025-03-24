import { useCurrentPage } from "../../hooks/useCurrentPage";

function HeaderTile() {
  const currentPage = useCurrentPage();

  return (
    <h1 className="hidden text-3xl font-semibold capitalize lg:block">
      {currentPage}
    </h1>
  );
}

export default HeaderTile;
