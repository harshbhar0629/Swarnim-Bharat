/** @format */

import signupImg from "../../assets/images/register.png";
import Template from "./Template"

function Signup() {
	return (
		<Template
			title="Discover the vibrant heritage of India with Swarnim Bharat—where every journey tells a story."
			description1="Celebrate India's timeless heritage, one story at a time."
			description2="Discover the heart of India, where history meets culture."
			image={signupImg}
			formType="signup"
		/>
	);
}

export default Signup;
