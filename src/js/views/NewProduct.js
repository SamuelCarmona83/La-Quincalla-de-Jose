import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

export const NewProduct = () => {
	const { actions } = useContext(Context);

	const [item, setItem] = useState({
		title: "",
		price: "",
		description: "",
		category: "",
		image: ""
	});

	return (
		<div className="d-flex h-100">
			<div className="col-4 mx-auto my-auto">
				<div className="form-group">
					<label>Title</label>
					<input
						type="text"
						value={item.title || ""}
						onChange={event => {
							setItem({
								...item,
								title: event.target.value
							});
						}}
						className="form-control rounded-0"
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
						value={item.price || ""}
						onChange={event => {
							setItem({
								...item,
								price: event.target.value
							});
						}}
						className="form-control rounded-0"
						id="productPrice"
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<input
						type="text"
						className="form-control rounded-0"
						value={item.description || ""}
						onChange={event => {
							setItem({
								...item,
								description: event.target.value
							});
						}}
						id="productDescription"
					/>
				</div>
				<div className="form-group">
					<label>Category</label>
					<input
						type="text"
						value={item.category || ""}
						onChange={event => {
							setItem({
								...item,
								category: event.target.value
							});
						}}
						className="form-control rounded-0"
						id="productCategory"
					/>
				</div>
				<div className="form-group">
					<label>Image URL</label>
					<input
						type="text"
						value={item.imageurl || ""}
						onChange={event => {
							setItem({
								...item,
								imageurl: event.target.value
							});
						}}
						className="form-control rounded-0"
						id="productImage"
					/>
				</div>
				<button
					onClick={() => (item.title != "" ? actions.newProduct(item) : () => {})}
					type="submit"
					className="btn btn-primary rounded-0"
					style={{ backgroundColor: "teal", border: 0 }}>
					Publish Product
				</button>
			</div>
		</div>
	);
};
