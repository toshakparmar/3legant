import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import 'react-toastify/ReactToastify.css';
import { Home, Product, Shop, SignIn, SignUp, Contact, Error, SingleProduct } from "./pages";
import { NotificationBar } from "./components";
import { Provider } from "react-redux";
import store from "./Store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/sign-in" />
	},
	{
		path: "/home",
		element:  <Home />,
		errorElement: <Error />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
	{
		path: "/sign-in",
		element: <SignIn />,
	},
	{
		path: "/product",
		element: (
			<>
				<NotificationBar />
				<Product />
			</>
		),
	},
	{
		path: "/shop",
		element: (
			<>
				<NotificationBar />
				<Shop />
			</>
		),
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/product/:id",
		element: <SingleProduct />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
