/** @format */

import React from "react";

import ContactDetails from "../components/ContactUs/ContactDetails";
import ContactForm from "../components/ContactUs/ContactForm";

const Contact = () => {
	return (
		<div className="container mt-5 text-white">
			<div className="row align-items-center justify-content-between gap-3">
				{/* Contact Details */}
				<div className="col-lg-4 col-md-6">
					<ContactDetails />
				</div>

				{/* Contact Form */}
				<div className="col-lg-7 col-md-6">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default Contact;
