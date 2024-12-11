/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import CountryCode from "../../assets/data/countrycode.json";
import { useLocation } from "react-router-dom";

const ContactUsForm = ({ border }) => {
	const location = useLocation();
	console.log(location.pathname);
	console.log(border);
	const [loading, setLoading] = useState(false);
	const [ccode, setCode] = useState("");
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const submitContactForm = async (data) => {
		console.log("Form Data - ", data);
		setLoading(false);
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({
				email: "",
				firstname: "",
				lastname: "",
				message: "",
				phoneNo: "",
			});
		}
	}, [reset, isSubmitSuccessful]);

	return (
		<form
			className={`d-flex flex-column gap-4 mb-5 p-4 ${
				border ? "border border-dark rounded" : ""
                }`}
            style={{color: "black"}}
			onSubmit={handleSubmit(submitContactForm)}>
			<div className="d-flex flex-column flex-md-row gap-4">
				{/* First Name */}
				<div className="d-flex flex-column gap-2 col-md-6">
					<label
						htmlFor="firstname"
						className="label-style">
						First Name:
					</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						placeholder="Enter first name"
						className="form-style form-control"
						{...register("firstname", { required: true })}
					/>
					{errors.firstname && (
						<span
							className="text-warning"
							style={{ fontSize: "12px" }}>
							Please enter your name.
						</span>
					)}
				</div>

				{/* Last Name */}
				<div className="d-flex flex-column gap-2 col-md-6">
					<label
						htmlFor="lastname"
						className="label-style">
						Last Name:
					</label>
					<input
						type="text"
						name="lastname"
						id="lastname"
						placeholder="Enter last name"
						className="form-style form-control"
						{...register("lastname")}
					/>
				</div>
			</div>

			{/* Email Address */}
			<div className="d-flex flex-column gap-2">
				<label
					htmlFor="email"
					className="label-style">
					Email Address:
				</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Enter email address"
					className="form-style form-control"
					{...register("email", { required: true })}
				/>
				{errors.email && (
					<span
						className="text-warning"
						style={{ fontSize: "12px" }}>
						Please enter your valid Email address.
					</span>
				)}
			</div>

			{/* Phone Number */}
			<div className="d-flex flex-column gap-2">
				<label
					htmlFor="phonenumber"
					className="label-style">
					Phone Number:
				</label>
				<div className="d-flex gap-3">
					<div
						className="d-flex flex-column gap-2"
						style={{ width: "90px" }}>
						<select
							name="countrycode"
							id="countrycode"
							className="form-style form-select"
							{...register("countrycode", { required: true })}>
							{CountryCode.map((ele, i) => {
								return (
									<option
										key={i}
										value={ele.code}>
										{ele.code} {ele.country}
									</option>
								);
							})}
						</select>
					</div>

					<div
						className="d-flex flex-column gap-2"
						style={{ flexGrow: 1 }}>
						<input
							type="text"
							name="phonenumber"
							id="phonenumber"
							placeholder="12345 67890"
							className="form-style form-control"
							{...register("phoneNo", {
								required: {
									value: true,
									message: "Please enter your Phone Number.",
								},
								maxLength: { value: 10, message: "Invalid Phone Number" },
								minLength: { value: 10, message: "Invalid Phone Number" },
							})}
						/>
					</div>
				</div>
				{errors.phoneNo && (
					<span
						className="text-warning"
						style={{ fontSize: "12px" }}>
						{errors.phoneNo.message}
					</span>
				)}
			</div>

			{/* Message */}
			<div className="d-flex flex-column gap-2">
				<label
					htmlFor="message"
					className="label-style">
					Message
				</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="7"
					placeholder="Enter your message here"
					className="form-style form-control"
					{...register("message", { required: true })}
				/>
				{errors.message && (
					<span
						className="text-warning"
						style={{ fontSize: "12px" }}>
						Please enter your Message..
					</span>
				)}
			</div>

			{/* Submit Button */}
			<button
				disabled={loading}
				type="submit"
				className="btn btn-warning text-black font-weight-bold"
				style={{
					borderRadius: "5px",
					padding: "12px 20px",
					fontSize: "14px",
				}}>
				Send Message
			</button>
		</form>
	);
};

export default ContactUsForm;
