/** @format */

import loginImg from "../../assets/images/login.png";
import Template from "./Template";

function Login() {
	return (
		<Template
			title="Discover the vibrant heritage of India with Swarnim Bharat—where every journey tells a story."
			description1="Celebrate India's timeless heritage, one story at a time."
			description2="Discover the heart of India, where history meets culture."
			image={loginImg}
			formType="login"
		/>
	);
}

export default Login;
