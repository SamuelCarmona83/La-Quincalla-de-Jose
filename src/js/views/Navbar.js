import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const Navbar = () => {
	const { store } = useContext(Context);

	const [isOpen, setIsOpen] = useState(false); // locales

	return (
		<>
			<nav className="navbar bg-warning">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						{store.title}
					</Link>
					<form className="d-flex" role="search">
						<input className="form-control mx-2 rounded-0" type="search" placeholder="Search" />
						<div className="btn btn-outline-dark mx-2 rounded-0">Search</div>
						<Link to="/products/new" className="btn btn-outline-dark mx-2 rounded-0">
							New
						</Link>
						<div className="dropdown">
							<div onClick={() => setIsOpen(!isOpen)} className="btn btn-dark dropdown-toggle rounded-0">
								<i className="fa-brands fa-opencart"></i>
							</div>
							<div className={`dropdown-menu dropdown-menu-right rounded-0 ${isOpen ? "show" : ""}`}>
								{store.carrito.map((producto, index) => (
									<div key={index} className="dropdown-item">
										<img
											src={producto.image}
											alt={producto.title + index}
											style={{ width: "40px", height: "40px", borderRadius: "3px" }}
										/>
										{producto.title}
									</div>
								))}
							</div>
						</div>
					</form>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
