import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

// const exampleProduct = {
// 	"id": 7,
// 	"title": "White Gold Plated Princess",
// 	"price": 9.99,
// 	"description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
// 	"category": "jewelery",
// 	"image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
// 	"rating": {
// 	  "rate": 3,
// 	  "count": 400
// 	}
//   };
export const NewProduct = () => {
	const { actions } = useContext(Context);

	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [imageurl, setImageurl] = useState("");
	return (
		<div className="d-flex h-100">
			<div className="col-4 mx-auto my-auto">
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						value={title}
						onChange={event => setTitle(event.target.value)}
						className="form-control"
						id="productTitle"
					/>
					<small id="emailHelp" className="form-text text-muted">
						Name for the product.
					</small>
				</div>
				<div className="form-group">
					<label>Price</label>
					<input
						type="text"
						value={price}
						onChange={event => setPrice(event.target.value)}
						className="form-control"
						id="productPrice"
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<input
						type="text"
						className="form-control"
						value={description}
						onChange={event => setDescription(event.target.value)}
						id="productDescription"
					/>
				</div>
				<div className="form-group">
					<label>Category</label>
					<input
						type="text"
						value={category}
						onChange={event => setCategory(event.target.value)}
						className="form-control"
						id="productCategory"
					/>
				</div>
				<div className="form-group">
					<label>Image URL</label>
					<input
						type="text"
						value={imageurl}
						onChange={event => setImageurl(event.target.value)}
						className="form-control"
						id="productImage"
					/>
				</div>
				<button
					onClick={() =>
						actions.newProduct({
							// id: 7,
							title: title,
							price: price,
							description: description,
							category: category,
							image: imageurl,
							rating: {
								rate: 0,
								count: 0
							}
						})
					}
					type="submit"
					className="btn btn-primary">
					Publish Product
				</button>
			</div>
		</div>
	);
};
