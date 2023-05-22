/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../components/Error/ErrorPage";
import SortComponent from "../components/SortComponent/SortComponent";
import Home from "../components/SortComponent/Home/Home";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
                element: <SortComponent />,
                children: [
                    {
                        path: '/',
                        element: <Home />
                    }
                ]
			},
		],
	},
]);

export default router;