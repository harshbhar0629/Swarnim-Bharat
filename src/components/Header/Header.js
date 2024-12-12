/** @format */

import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/lg.png";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/authAPI";

const nav__links = [
	{
		path: "/home",
		display: "Home",
	},
	{
		path: "/about",
		display: "About",
	},
	{
		path: "/heritage",
		display: "Heritage",
	},
	{
		path: "/contact",
		display: "Contact-Us",
	},
];

const Header = () => {
	const headerRef = useRef(null);
	const menuRef = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { token } = useSelector((state) => state.auth);

	const stickyheaderFunc = () => {
		let head = document.getElementById("head");
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 70 ||
				document.documentElement.scrollTop > 70
			) {
				head.classList.add("sticky__header");
			} else {
				head.classList.remove("sticky__header");
			}
		});
	};

	useEffect(() => {
		stickyheaderFunc();

		return window.removeEventListener("scroll", stickyheaderFunc);
	});

	const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
	return (
		<header
			className="header"
			ref={headerRef}
			id="head">
			<Container>
				<Row>
					<div className="nav__wrapper d-flex align-items-center justify-content-between">
						{/* ==================== logo ==================== */}

						<Link
							to="/"
							className="logo">
							<img
								src={logo}
								alt=""
							/>
						</Link>

						{/* ==================== logo end ==================== */}

						{/* ==================== menu start ==================== */}

						<div
							className="navigation"
							ref={menuRef}
							onClick={toggleMenu}>
							<ul className="menu d-flex align-items-center gap-5">
								{nav__links.map((item, index) => (
									<li
										className="nav__item"
										key={index}>
										<NavLink
											to={item.path}
											className={(navClass) =>
												navClass.isActive ? "active__link" : ""
											}>
											{item.display}
										</NavLink>
									</li>
								))}
							</ul>
						</div>

						{/* ==================== menu end ==================== */}

						<div className="nav__right d-flex align-items-center gap-4">
							<div className="nav__btns d-flex align-items-center gap-4">
								{!token ? (
									<>
										<Button className="btn primary__btn">
											<Link to="/">Explore</Link>
										</Button>
										<Button className="btn primary__btn">
											<Link to="/login">Sign-in</Link>
										</Button>
									</>
								) : (
									<>
										<Button className="btn primary__btn" onClick={()=> dispatch(logout(navigate, null))}>
											<Link to="/">LogOut</Link>
										</Button>
									</>
								)}
							</div>

							<span
								className="mobile__menu"
								onClick={toggleMenu}>
								<i class="ri-menu-line"></i>
							</span>
						</div>
					</div>
				</Row>
			</Container>
		</header>
	);
};

export default Header;
