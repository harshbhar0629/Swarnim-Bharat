/** @format */

import React, { useState } from "react";
import "./Faqs.css";

const faqs = [
	{
		question: "What is Swarnim Bharat?",
		answer:
			"Swarnim Bharat is a React-based web application designed to showcase the rich cultural and historical heritage of India.",
	},
	{
		question: "What kind of content does Swarnim Bharat offer?",
		answer:
			"Swarnim Bharat provides a variety of content, including images, text, and audio, to explore India's diverse cultural heritage, historical landmarks, and traditional practices.",
	},
	{
		question: "Is Swarnim Bharat free to use?",
		answer:
			"Yes, Swarnim Bharat is completely free to use. You can access all its features without any cost.",
	},
	{
		question: "How can I access Swarnim Bharat?",
		answer:
			"You can access Swarnim Bharat through your web browser on any device with an internet connection.",
	},
	{
		question: "What devices is Swarnim Bharat compatible with?",
		answer:
			"Swarnim Bharat is designed to be responsive and compatible with various devices, including desktops, laptops, tablets, and smartphones.",
	},
	{
		question: "How does the text-to-speech feature work?",
		answer:
			"The text-to-speech feature allows you to listen to the content on the screen. Simply click on the audio icon to activate it.",
	},
	{
		question: "Can I customize the map to focus on specific regions?",
		answer:
			"Yes, you can zoom in and out on the interactive map to explore specific regions in detail.",
	},
	{
		question: "How often is the content on Swarnim Bharat updated?",
		answer:
			"The content on Swarnim Bharat is regularly updated to provide the latest information and insights.",
	},
	{
		question: "Can I contribute to Swarnim Bharat by adding content?",
		answer:
			"Currently, Swarnim Bharat is a curated platform. However, we welcome feedback and suggestions to improve the user experience.",
	},
	{
		question: "Are there any plans to add new features to Swarnim Bharat?",
		answer:
			"We are continuously working on improving Swarnim Bharat and adding new features to enhance your experience.",
	},
	{
		question: "What technology stack is used to build Swarnim Bharat?",
		answer:
			"Swarnim Bharat is built using React, a popular JavaScript library for building user interfaces.",
	},
	{
		question: "How is the data for Swarnim Bharat sourced and verified?",
		answer:
			"The data for Swarnim Bharat is sourced from reliable historical and cultural sources and is carefully verified to ensure accuracy.",
	},
	{
		question: "Are there any accessibility features in Swarnim Bharat?",
		answer:
			"Yes, Swarnim Bharat is designed with accessibility in mind. It includes features like text-to-speech and keyboard navigation.",
	},
	{
		question: "How can I report a bug or issue with Swarnim Bharat?",
		answer:
			"You can report bugs or issues by contacting our support team through the contact form on the website.",
	},
	{
		question: "Is my data safe and secure when using Swarnim Bharat?",
		answer:
			"Yes, we prioritize user privacy and data security. We implement strong security measures to protect your information.",
	},
	{
		question:
			"How can I navigate through the different sections of Swarnim Bharat?",
		answer:
			"You can use the navigation menu at the top of the page to explore different sections of the website.",
	},
	{
		question: "Can I save my favorite places or content for later reference?",
		answer:
			"While we don't currently have a specific bookmarking feature, you can use your browser's bookmarking functionality to save pages you'd like to revisit.",
	},
	{
		question: "How can I provide feedback on Swarnim Bharat?",
		answer:
			"You can provide feedback by contacting our support team or by sharing your thoughts on social media.",
	},
	{
		question:
			"Is there a community forum or social media group for Swarnim Bharat users?",
		answer:
			"Not yet, but we encourage you to follow us on social media for updates and to engage with other users.",
	},
	{
		question: "What is the future vision for Swarnim Bharat?",
		answer:
			"Our vision is to make Swarnim Bharat a comprehensive platform that offers a rich and immersive experience of India's cultural heritage.",
	},
];

const Faqs = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAnswer = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div
			style={{
				width: "100vw",
				backgroundColor: "#f3f3f3",
				padding: "4rem 2rem",
			}}>
			<div className="faq-container shadow-lg">
				<h1 id="faq">Frequently Asked Questions</h1>
				{faqs.map((faq, index) => (
					<div
						className={`faq-item ${activeIndex === index ? "active" : ""}`}
						key={index}>
						<h3 onClick={() => toggleAnswer(index)}>{faq.question}</h3>
						<p className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
							{faq.answer}
						</p>
					</div>
				))}
				<div className="button-container">
					<a
						href="/"
						className="back-button">
						Back to Home
					</a>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
