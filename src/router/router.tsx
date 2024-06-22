import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Generator } from "../pages/Generator";
import { Reader } from "../pages/Reader";
import { Login } from "../pages/Login";
import { Welcome } from '../pages/Welcome';
import { ErrorPage } from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Welcome />,
                errorElement: <ErrorPage />
            },
            {
                path: "/generator",
                element: <Generator />,
                errorElement: <ErrorPage />
            },
            {
                path: "/reader",
                element: <Reader />,
                errorElement: <ErrorPage />
            },
            {
                path: "/login",
                element: <Login />,
                errorElement: <ErrorPage />
            },
        ],
    },
]);