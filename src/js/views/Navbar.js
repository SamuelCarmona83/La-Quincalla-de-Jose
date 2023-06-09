import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "./Navbar.css";
const Navbar = () => {
	const { store, actions } = useContext(Context);

	const [isOpen, setIsOpen] = useState(false); // locales

	return (
		<>
			<nav className="navbar sticky-top bg-warning">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<span className="text-dark">{store.title}</span>
					</Link>
					<div className="d-flex">
						<input className="form-control mx-2 rounded-0" type="search" placeholder="Search" />
						<div className="btn btn-outline-dark mx-2 rounded-0">Search</div>
						<Link to="/products/new" className="btn btn-outline-dark mx-2 rounded-0">
							New
						</Link>
						<div onClick={() => setIsOpen(!isOpen)} className="btn btn-dark rounded-0 mx-2">
							<i className="fa-brands fa-opencart"></i>
						</div>
						<div className="" style={{ position: "relative" }}>
							<div
								className={(!isOpen ? "sidebarClose" : "sidebarOpen") + " sidebar overflow-auto "}
								style={{
									height: "100vh",
									width: "50%",
									position: "fixed",
									top: 0,
									right: 0,
									backgroundColor: "#eee",
									zIndex: 100
								}}>
								<div
									className="p-4"
									onClick={() => setIsOpen(!isOpen)}
									style={{
										position: "absolute",
										top: 0,
										right: 0,
										display: isOpen ? "block" : "none"
									}}>
									<i className="fa-solid fa-xmark"></i>
								</div>
								<h3 className="mt-5 text-center">
									<i className="fa-brands fa-opencart"></i>
									<h3>Shopping Cart</h3>
								</h3>
								<div className="" style={{ overflow: "hidden" }}>
									{store.carrito.map((producto, index) => (
										<div key={index} className="">
											<div className="card m-3 rounded-0">
												<div className="row no-gutters p-2">
													<div className="col-md-4 d-flex">
														<img
															// style={{ maxHeight: "30vh" }}
															className="card-img my-auto"
															src={producto.image}
															alt={producto.title + index}
														/>
													</div>
													<div className="col-md-8">
														<div className="card-body">
															<h5 className="card-title">{producto.title}</h5>
															<h2 className="card-text font-weight-bolder">
																$ {producto.price}
															</h2>
															<p className="card-text">
																<small className="text-muted">
																	{producto.description}
																</small>
															</p>
															<div className="btn-group mx-2" role="group">
																<button type="button" className="btn btn-secondary">
																	<i className="fa-solid fa-plus"></i>
																</button>
																<button
																	type="button"
																	className="btn btn-outline-secondary">
																	1
																</button>
																<button type="button" className="btn btn-secondary">
																	<i className="fa-solid fa-minus"></i>
																</button>
															</div>
															<button
																onClick={() => actions.removeProductFromCart(producto)}
																className="btn btn-danger">
																Remover
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
								<div className="text-center my-3">
									<button type="button" className="btn btn-warning">
										<i className="fa-solid fa-cash-register mx-2"></i>
										Checkout
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
