/** @format */

import { useState } from "react";

function TermsAndConditions() {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	return (
		<div style={{ width: "100%", margin: "0px auto" }}>
			<div
				className={`${
					theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"
				} termsContainer`}
				style={{
					margin: "0px auto",
					borderRadius: "15px",
					border: "1px solid black",
					width: "70%",
					paddingLeft: "20px",
					marginTop: "30px",
				}}>
				<section className="container  px-4 py-5">
					<h1
						className="display-4  mb-4 text-center"
						style={{ fontSize: "3rem", fontWeight: "700" }}>
						Terms and Conditions
					</h1>
					<p className="lead mb-3">
						Welcome to our platform. Please read these terms and conditions
						carefully before using our services.
					</p>

					<div className="border-left border-primary pl-3 mb-4">
						<h2 className="h5 font-weight-semibold mb-3">
							1. Acceptance of Terms
						</h2>
						<p className="mb-3">
							By accessing or using our website, you agree to comply with these
							terms and all applicable laws.
						</p>
					</div>

					<div className="border-left border-success pl-3 mb-4">
						<h2 className="h5 font-weight-semibold mb-3">2. Privacy Policy</h2>
						<p className="mb-3">
							We respect your privacy and are committed to protecting your
							personal information. Please refer to our Privacy Policy for
							details.
						</p>
					</div>

					<div className="border-left border-danger pl-3 mb-4">
						<h2 className="h5 font-weight-semibold mb-3">
							3. User Obligations
						</h2>
						<p className="mb-3">
							You agree not to use the website for any unlawful purposes and to
							comply with all applicable laws and regulations.
						</p>
					</div>

					<div className="border-left border-warning pl-3 mb-4">
						<h2 className="h5 font-weight-semibold mb-3">
							4. Intellectual Property
						</h2>
						<p className="mb-3">
							All content on this site, including text, graphics, logos, and
							software, is the property of our platform and protected by
							copyright laws.
						</p>
					</div>

					<div className="border-left border-info pl-3 mb-4">
						<h2 className="h5 font-weight-semibold mb-3">
							5. Limitation of Liability
						</h2>
						<p className="mb-3">
							We are not liable for any damages or losses arising from your use
							of the service, including, but not limited to, direct, indirect,
							or consequential damages.
						</p>
					</div>

					<div className="border-left border-teal pl-3 mb-4">
						<h2 className="h5 font-weight-semibold mb-3">6. Termination</h2>
						<p className="mb-3">
							We reserve the right to suspend or terminate your access to the
							website if you breach any of these terms.
						</p>
					</div>

					<div className="border-left border-warning pl-3 mb-4">
						<h2 className="h5 font-weight-semibold mb-3">
							7. Changes to the Terms
						</h2>
						<p className="mb-3">
							We may update these terms from time to time, and it is your
							responsibility to review them regularly.
						</p>
					</div>

					<p className="lead">
						If you have any questions, feel free to contact us.
					</p>
				</section>
			</div>
		</div>
	);
}

export default TermsAndConditions;
