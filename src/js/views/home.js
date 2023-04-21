import React, { useState, useEffect } from "react";
import "../../styles/home.scss";

export const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json())
			.then(json => setProducts(json));
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Store fakeAPI</h1>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{products.map((item, key) => (
					<div className="col-3" key={key}>
						<div className="card m-2">
							<img
								src={item.image}
								className="card-img-top"
								style={{ maxHeight: "30vh", objectFit: "contain", padding: "3vh" }}
								alt={item.description}
							/>
							<div className="card-body">
								<h5 className="card-title text-truncate">{item.title}</h5>
								<p className="card-text text-truncate">{item.description}</p>
								<a href="#" className="btn btn-primary">
									Add to cart
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
