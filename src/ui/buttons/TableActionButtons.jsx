import { useNavigate } from "react-router";
import { Edit, Trash2 } from "lucide-react";

import TableActionButton from "./TableActionButton";
import { useCurrentPage } from "../../hooks/useCurrentPage";

function TableActionButtons({ id }) {
  const currentPage = useCurrentPage();
  const navigate = useNavigate();

  return (
    <div className="absolute -top-6.5 right-9 z-50 w-26 overflow-hidden rounded-lg bg-white shadow sm:-top-4.5 dark:bg-slate-800 dark:shadow-slate-700">
      <TableActionButton
        type="edit"
        onClick={() => navigate(`/${currentPage}/${id}`)}
      >
        <Edit />
        <span>edit</span>
      </TableActionButton>
      <TableActionButton type="delete">
        <Trash2 />
        <span>delete</span>
      </TableActionButton>
    </div>
  );
}

export default TableActionButtons;
