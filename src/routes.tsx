import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MainPage from './pages/MainPage.tsx'
import PhotoPage from "./pages/PhotoPage.tsx";

export const AppRouter = () => {
    const routes = createBrowserRouter([
            {
                path: '/',
                Component: MainPage
            },
            {
                path: '/photos/:id',
                Component: PhotoPage
            },
            {
                path: '*',
                Component: MainPage
            }
        ]);
    return RouterProvider({ router: routes});
};