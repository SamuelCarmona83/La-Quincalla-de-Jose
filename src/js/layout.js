import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { NewProduct } from "./views/NewProduct";
import Navbar from "./views/Navbar.js";

export const Layout = () => {
	return (
		<>
			<BrowserRouter>
				<div className="h-100">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/products/new" component={NewProduct} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
