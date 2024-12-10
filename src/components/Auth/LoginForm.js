/** @format */

import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [showPassword, setShowPassword] = useState(false);

	const { email, password } = formData;

	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		// dispatch(login(email, password, navigate));
	};

	return (
		<div>
			<div
				style={{
					width: "80%",
					border: "1px solid black",
					padding: "20px 30px 30px 30px",
					borderRadius: "10px",
					margin: "0px auto",
				}}
				className="shadow-lg">
				<h1
					className="display-4 fw-bold text-dark"
					style={{ width: "90%", margin: "0px auto" }}>
					Welcome Back
				</h1>
				<form
					onSubmit={handleOnSubmit}
					className="mt-4"
					style={{ width: "90%", margin: "0px auto" }}>
					<div className="mb-3">
						<label
							htmlFor="email"
							className="form-label fw-semibold">
							Email Address <sup className="text-danger">*</sup>
						</label>
						<input
							required
							type="text"
							name="email"
							id="email"
							value={email}
							onChange={handleOnChange}
							placeholder="Enter email address"
							className="form-control"
						/>
					</div>
					<div className="mb-3 position-relative">
						<label
							htmlFor="password"
							className="form-label fw-semibold">
							Password <sup className="text-danger">*</sup>
						</label>
						<input
							required
							type={showPassword ? "text" : "password"}
							name="password"
							id="password"
							value={password}
							onChange={handleOnChange}
							placeholder="Enter password"
							className="form-control"
						/>
						<span
							onClick={() => setShowPassword((prev) => !prev)}
							className="position-absolute  translate-middle-y me-3"
							style={{ top: "70%", right: "0px" }}>
							{showPassword ? (
								<AiOutlineEyeInvisible
									style={{ cursor: "pointer" }}
									fontSize={20}
								/>
							) : (
								<AiOutlineEye
									style={{ cursor: "pointer" }}
									fontSize={20}
								/>
							)}
						</span>
					</div>
					<button
						type="submit"
						style={{
							width: "90%",
							margin: "0px auto",
							marginLeft: "22px",
							marginTop: "10px",
						}}
						className="btn btn-primary fw-semibold">
						Sign In
					</button>
				</form>

				<div
					style={{
						margin: "0px auto",
						fontSize: "12px",
						marginTop: "10px",
						textAlign: "center",
					}}>
					Don't have account?{" "}
					<Link
						to="/signup"
						style={{ fontSize: "14px", color: "blueviolet" }}>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
