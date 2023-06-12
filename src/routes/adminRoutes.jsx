import { Suspense, lazy } from "react";
import Books from "../views/admin/Books";

const AdminDashboard = lazy(() => import("../views/admin/AdminDashboard"));

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: (
      <Suspense fallback="loading...">
        <AdminDashboard />
      </Suspense>
    ),
  },
  {
    path: "/admin/books",
    element: (
      <Suspense fallback="loading...">
        <Books />
      </Suspense>
    ),
  },
];
