import { lazy, Suspense } from "react";
import { useRoutes, Outlet, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
export const HomePage = lazy(() => import("@/pages/Home"));
export const ProfilePage = lazy(() => import("@/pages/Profile"));
export const Page404 = lazy(() => import("@/pages/PageNonFound"));

export default function Route() {
  const routes = useRoutes([
    {
      element: (
        <MainLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        { path: "/profile", element: <ProfilePage /> },
      ],
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
}
