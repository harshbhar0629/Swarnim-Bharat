/** @format */

import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signUp } from "../../utils/authAPI";

function SignupForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const { firstName, lastName, email, password, confirmPassword } = formData;

	// Handle input fields, when some value changes
	const handleOnChange = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle Form Submission
	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords Do Not Match");
			return;
		}
		console.log(firstName, lastName);
		dispatch(signUp(firstName, lastName, email, password, confirmPassword, navigate));

		// Reset
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div>
			{/* Form */}
			<div
				style={{
					border: "1px solid black",
					width: "95%",
					padding: "20px 30px 30px 30px",
					borderRadius: "10px",
					backgroundColor: "whitesmoke",
					margin: "0px auto",
				}}
				className="shadow-lg">
				<h1
					className="display-4 fw-bold text-dark"
					style={{ width: "90%", margin: "0px auto", paddingBottom: "10px" }}>
					Explore Swarnim Bharat
				</h1>
				<form
					onSubmit={handleOnSubmit}
					style={{ width: "95%", margin: "0px auto" }}>
					<div className="row mb-3">
						<div className="col-md-6">
							<label className="form-label">
								First Name <sup className="text-danger">*</sup>
							</label>
							<input
								required
								type="text"
								name="firstName"
								value={firstName}
								onChange={handleOnChange}
								placeholder="Enter first name"
								className="form-control"
							/>
						</div>
						<div className="col-md-6">
							<label className="form-label">
								Last Name <sup className="text-danger">*</sup>
							</label>
							<input
								required
								type="text"
								name="lastName"
								value={lastName}
								onChange={handleOnChange}
								placeholder="Enter last name"
								className="form-control"
							/>
						</div>
					</div>
					<div className="mb-3">
						<label className="form-label">
							Email Address <sup className="text-danger">*</sup>
						</label>
						<input
							required
							type="email"
							name="email"
							value={email}
							onChange={handleOnChange}
							placeholder="Enter email address"
							className="form-control"
						/>
					</div>
					<div className="row mb-3">
						<div className="col-md-6 position-relative">
							<label className="form-label">
								Create Password <sup className="text-danger">*</sup>
							</label>
							<input
								required
								type={showPassword ? "text" : "password"}
								name="password"
								value={password}
								onChange={handleOnChange}
								placeholder="Enter Password"
								className="form-control"
							/>
							<span
								onClick={() => setShowPassword((prev) => !prev)}
								className="position-absolute  translate-middle-y cursor-pointer"
								style={{ top: "70%", right: "18px" }}>
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
						<div className="col-md-6 position-relative">
							<label className="form-label">
								Confirm Password <sup className="text-danger">*</sup>
							</label>
							<input
								required
								type={showConfirmPassword ? "text" : "password"}
								name="confirmPassword"
								value={confirmPassword}
								onChange={handleOnChange}
								placeholder="Confirm Password"
								className="form-control"
							/>
							<span
								onClick={() => setShowConfirmPassword((prev) => !prev)}
								className="position-absolute translate-middle-y cursor-pointer"
								style={{ top: "70%", right: "18px" }}>
								{showConfirmPassword ? (
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
					</div>
					<button
						type="submit"
						className="btn btn-primary" style={{width: "90%", marginLeft: "30px", marginTop: "20px"}}>
						Create Account
					</button>
				</form>

				<div
					style={{
						margin: "0px auto",
						fontSize: "12px",
						marginTop: "10px",
						textAlign: "center",
					}}>
					Do you already have account?{" "}
					<Link
						to="/login"
						style={{ fontSize: "14px", color: "blueviolet" }}>
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SignupForm;
