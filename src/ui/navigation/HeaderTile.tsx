import { useLocation } from "react-router";

// TODO: rename to HeaderTitle
function HeaderTile() {
  const { pathname } = useLocation();

  return (
    <h1 className="hidden text-3xl font-semibold capitalize lg:block">
      {pathname.replace("/", "").replace("-", " ")}
    </h1>
  );
}

export default HeaderTile;
