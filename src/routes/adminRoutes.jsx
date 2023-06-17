import { Suspense, lazy } from "react";
import Books from "../views/admin/Books";

const AdminDashboard = lazy(() => import("../views/admin/AdminDashboard"));
const LibraryCard = lazy(() => import("../views/admin/LibraryCard"));
const Users = lazy(() => import("../views/admin/Users"));
const RequestedBooks = lazy(() => import("../views/admin/RequestedBooks"));

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
  {
    path: "/admin/library-cards",
    element: (
      <Suspense fallback="loading...">
        <LibraryCard />
      </Suspense>
    ),
  },
  {
    path: "/admin/users",
    element: (
      <Suspense fallback="loading...">
        <Users />
      </Suspense>
    ),
  },
  {
    path: "/admin/requested-books",
    element: (
      <Suspense fallback="loading...">
        <RequestedBooks />
      </Suspense>
    ),
  },
];
