import { Suspense, lazy } from "react";
import AdminLogin from "../views/auth/admin";

const Login = lazy(() => import("../views/auth/login"));
const Signup = lazy(() => import("../views/auth/signup"));

const publicRoutes = [
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/admin/login",
    element: (
      <Suspense>
        <AdminLogin />
      </Suspense>
    ),
  },
];
export default publicRoutes;
