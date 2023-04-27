import React, { useEffect, useContext } from "react";
import "../../styles/home.scss";

import { Context } from "../store/appContext.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// actions.loadProducts(); //despacha la accion que busca los productos al API
	}, []);

	return (
		<>
			<div className="text-center mt-5">
				<h1>{store.title}</h1>
				<div style={{ display: "flex", flexWrap: "wrap" }}>
					{store.products.map((
						item,
						key //aparecen productos si es que hay
					) => (
						<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3" key={key}>
							<div className="card m-2 rounded-0">
								<img
									src={item.image}
									className="card-img-top"
									style={{ maxHeight: "30vh", objectFit: "contain", padding: "3vh" }}
									alt={item.description}
								/>
								<div className="card-body">
									<h5 className="card-title text-truncate">{item.title}</h5>
									<p className="card-text text-truncate">{item.description}</p>
									<button
										onClick={() => actions.addToCart(item)}
										className="btn btn-warning rounded-0">
										<i className="fa-solid fa-cart-plus"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
