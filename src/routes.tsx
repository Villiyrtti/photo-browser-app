import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MainPage from './pages/MainPage.tsx'
import CardPage from "./pages/CardPage.tsx";

export const AppRouter = () => {
    const routes = createBrowserRouter([
            {
                path: '/',
                Component: MainPage
            },
            {
                path: '/photos/:id',
                Component: CardPage
            },
            {
                path: '*',
                Component: MainPage
            }
        ]);
    return RouterProvider({ router: routes});
};