/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../components/Home/Home";
import ErrorPage from "../components/Error/ErrorPage";


const router = createBrowserRouter([
	{
		path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
	},
]);

export default router;