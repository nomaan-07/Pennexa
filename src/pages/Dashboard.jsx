import DashboardLayout from "../features/dashboard/DashboardLayout";
import TableOperations from "../ui/tables/TableOperations";

function Dashboard() {
  return (
    <>
      <TableOperations isDashboard={true} />
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
