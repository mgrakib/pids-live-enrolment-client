import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './router/router.jsx';
import AuthProvder from './AuthProvder/AuthProvder';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvder>
			<RouterProvider router={router} />
		</AuthProvder>
	</React.StrictMode>
);
