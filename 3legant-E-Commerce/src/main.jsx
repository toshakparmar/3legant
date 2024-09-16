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
		path: "/3legant-E-Commerce",
		element: <Navigate to="/3legant-E-Commerce/sign-in" />
	},
	{
		path: "/3legant-E-Commerce/home",
		element:  <Home />,
		errorElement: <Error />,
	},
	{
		path: "/3legant-E-Commerce/sign-up",
		element: <SignUp />,
	},
	{
		path: "/3legant-E-Commerce/sign-in",
		element: <SignIn />,
	},
	{
		path: "/3legant-E-Commerce/product",
		element: (
			<>
				<NotificationBar />
				<Product />
			</>
		),
	},
	{
		path: "/3legant-E-Commerce/shop",
		element: (
			<>
				<NotificationBar />
				<Shop />
			</>
		),
	},
	{
		path: "/3legant-E-Commerce/contact",
		element: <Contact />,
	},
	{
		path: "/3legant-E-Commerce/product/:id",
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
