/** @format */

import React, { useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";
import toast from "react-hot-toast";

const Newsletter = () => {
	const [email, setEmail] = useState();
	const clickHandler = () => {
		toast.success("Thanks for subscribing my platform");
		setEmail("");
	};

	return (
		<section
			className="newsletter"
			style={{ backgroundColor: "rgb(245, 240, 240)", marginTop: "0px" }}>
			<Container>
				<Row>
					<Col lg="6">
						<div className="newsletter__content">
							<h2>
								Ready to explore world's most{" "}
								<span style={{ color: "#faa935" }}>Beautiful</span> &{" "}
								<span style={{ color: "#faa935" }}>Vibrant</span> heritage sites
							</h2>

							<div className="newsletter__input">
								<input
									style={{
										backgroundColor: "rgb(245, 240, 240)",
										width: "80%",
										padding: "5px 10px",
										borderRadius: "10px",
									}}
									type="email"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
								/>
								<button
									className="btn newsletter__btn"
									style={{ backgroundColor: "#FAA935" }}
									onClick={clickHandler}>
									Subscribe
								</button>
							</div>

							<p></p>
						</div>
					</Col>

					<Col lg="6">
						<div className="newsletter__img">
							<img
								src={maleTourist}
								alt=""
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Newsletter;
