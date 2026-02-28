import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => (
  <div className="flex min-h-screen">
    <DashboardSidebar />
    <main className="flex-1 lg:ml-0 p-6 lg:p-8 overflow-auto">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;
