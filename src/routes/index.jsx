import MainLayout from "../layout/MainLayout";
import { privetRoutes } from "./privetRoutes";

export const getRoutes = () => {
  console.log("getRoutes");
  return {
    path: "/",
    element: <MainLayout />,
    children: privetRoutes,
  };
};
