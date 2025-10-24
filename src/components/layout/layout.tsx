import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar";

export const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};
