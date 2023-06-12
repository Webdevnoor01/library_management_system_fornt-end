import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
