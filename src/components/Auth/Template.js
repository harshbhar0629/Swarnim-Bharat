/** @format */

// import { useSelector } from "react-redux";

import { useState } from "react";
import frameImg from "../../assets/images/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
	// const { loading } = useSelector((state) => state.auth);
	const [loading, setLoading] = useState(false);

	return (
		<div className="d-flex min-vh-100 justify-content-center align-items-center">
			{loading ? (
				<div
					className="spinner-border text-primary"
					role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<div className="container d-flex flex-column-reverse flex-md-row justify-content-between align-items-center py-5">
					<div
						className="text-center text-md-start "
						style={{ width: "80%" }}>
						<h1
							className="display-4 fw-bold text-dark"
							style={{ width: "95%" }}>
							{title}
						</h1>
						<p
							className="mt-3 fs-5"
							style={{
								width: "80%",
								margin: "0px auto",
								paddingBottom: "10px",
							}}>
							<span className="text-secondary">{description1}</span>{" "}
							<span className="fst-italic fw-bold text-primary">
								{description2}
							</span>
						</p>
						{formType === "signup" ? <SignupForm /> : <LoginForm />}
					</div>
					<div className="position-relative mt-4 mt-md-0">
						<img
							src={image}
							alt="User Login Image Loading.."
							height={400}
							width={400}
							className="shadow"
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Template;
