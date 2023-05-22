/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import ErrorPage from "../components/Error/ErrorPage";
import SortComponent from "../components/SortComponent/SortComponent";
import Home from "../components/SortComponent/Home/Home";
import Enrollment from "../components/SortComponent/Enrollment/Enrollment";
import Login from "../components/Login/Login";
import PrivateRoute from "../Private/PrivateRoute";
import Register from "../components/Register/Register";


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
						path: "/",
						element: (
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						),
					},
					{
						path: "/enrollment",
						element: (
							<PrivateRoute>
								<Enrollment />
							</PrivateRoute>
						),
					},
					{
						path: "/login",
						element: <Login />,
					},
					{
						path: "/register",
						element: <Register />,
					},
				],
			},
		],
	},
]);

export default router;