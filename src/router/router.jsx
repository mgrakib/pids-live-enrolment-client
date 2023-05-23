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
import LongComponent from "../components/LongComponent/LongComponent";
import PersonalInfo from "../components/LongComponent/PersonalInfo/PersonalInfo";
import Address from "../components/LongComponent/Address/Address";
import Family from "../components/LongComponent/Family/Family";
import Education from "../components/LongComponent/Education/Education";
import Visitor from "../components/LongComponent/Visitor/Visitor";
import CallCenter from "../components/LongComponent/CallCenter/CallCenter";
import CaseInfo from "../components/LongComponent/CaseInfo/CaseInfo";
import Biometric from "../components/LongComponent/Biometric/Biometric";


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
			{
				path: "/inmate-enrollment",
				element: <LongComponent />,
				children: [
					{
						path: "/inmate-enrollment/biometric",
						element: <Biometric />,
					},
					{
						path: "/inmate-enrollment/personal-info",
						element: <PersonalInfo />,
					},
					{
						path: "/inmate-enrollment/address",
						element: <Address />,
					},
					{
						path: "/inmate-enrollment/family",
						element: <Family />,
					},
					{
						path: "/inmate-enrollment/education",
						element: <Education />,
					},
					{
						path: "/inmate-enrollment/case-info",
						element: <CaseInfo />,
					},
					{
						path: "/inmate-enrollment/helth",
						element: <Education />,
					},
					{
						path: "/inmate-enrollment/visitor",
						element: <Visitor />,
					},
					{
						path: "/inmate-enrollment/call-center",
						element: <CallCenter />,
					},
				],
			},
		],
	},
]);

export default router;