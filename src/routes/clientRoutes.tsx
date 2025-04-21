import { Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import { Loader2 } from "lucide-react";
import React from "react";

const LoadingFallback = () => <div className="min-w-screen min-h-screen bg-gray-100/70  flex justify-center items-center">
    <Loader2 className="animate-spin text-blue-500" />
</div>;
const Home = React.lazy(() => import("../features/client/home/Home"));
const Layout = React.lazy(() => import("../shared/layout/Layout"));

const withSuspense = (Component: React.ReactNode) => (
    <Suspense fallback={<LoadingFallback />}>{Component}</Suspense>
);

export const ClientRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <div>Oops! Something went wrong.</div>,
        children: [
            {
                index: true,
                element: withSuspense(<Home />),
            },
            {
                path: "home",
                element: withSuspense(<Home />),
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
];