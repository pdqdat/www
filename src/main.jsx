import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "@/scss/index.scss";
import Layout from "@comp/Layout";

const Home = lazy(() => import("@pages/Home"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const Test = lazy(() => import("@/components/Test"));

const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/test",
                element: <Test />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            }
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
