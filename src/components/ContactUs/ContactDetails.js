/** @format */

import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";
import "./ContactDetails.css"; // External CSS file for custom styles

const contactDetails = [
	{
		icon: "HiChatBubbleLeftRight",
		heading: "Chat on us",
		description: "Our friendly team is here to help.",
		details: "harshbhar.0629.com",
	},
	{
		icon: "BiWorld",
		heading: "Visit us",
		description: "Come and say hello at our office HQ.",
		details: "Bulandhshar Uttar-Pradesh, India",
	},
	{
		icon: "IoCall",
		heading: "Call us",
		description: "Mon - Sat From 10am to 10pm",
		details: "+91 88698 26279",
	},
];

const ContactDetails = () => {
	return (
		<div className="contact-container shadow-lg">
			{contactDetails.map((ele, i) => {
				let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
				return (
					<div
						className="contact-item"
						key={i}>
						<div className="d-flex align-items-center gap-3">
							<Icon size={25} />
							<h1 className="heading">{ele?.heading}</h1>
						</div>
						<p className="description">{ele?.description}</p>
						<p className="details">{ele?.details}</p>
					</div>
				);
			})}
		</div>
	);
};

export default ContactDetails;
