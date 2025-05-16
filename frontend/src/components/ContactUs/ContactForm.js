/** @format */

import React from "react";
import ContactUsForm from "./ContactUsForm";
import "./ContactForm.css";

const ContactForm = () => {
	return (
		<div className="contact-form-container" style={{color: "black"}} >
			<h1 className="contact-form-heading">
				Got an Idea? We&apos;ve got the skills. Let&apos;s team up
			</h1>
			<p className="contact-form-description">
				Tell us more about yourself and what you&apos;ve got in mind.
			</p>

			<div className="contact-form-content">
				<ContactUsForm />
			</div>
		</div>
	);
};

export default ContactForm;
