import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MainPage from './pages/MainPage.tsx'

export const AppRouter = () => {
    const routes = createBrowserRouter([
            {
                path: '/',
                Component: MainPage
            }
        ]);
    return RouterProvider({ router: routes});
};