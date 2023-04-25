import React from "react";

const Navbar = () => {
	return (
		<>
			<nav className="navbar bg-warning">
				<div className="container-fluid">
					<a className="navbar-brand">Navbar</a>
					<form className="d-flex" role="search">
						<input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-dark mx-2" type="submit">
							Search
						</button>
						{/* <button className="btn btn-outline-dark mx-2" type="submit">
							<i className="fa-brands fa-opencart"></i>
						</button> */}
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Dropdown button
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</div>
					</form>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
