/** @format */

import { toast } from "react-hot-toast";

import { setLoading, setToken } from "../slices/authSlice";
import { apiConnector } from "./apiConnector";
import { endpoints } from "./apis";

export function login(email, password, navigate, refFromSignup) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        const { LOGIN_API } = endpoints;
		try {
			const response = await apiConnector("POST", LOGIN_API, {
				email,
				password,
			});

			console.log("LOGIN API RESPONSE............", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}

            if(!refFromSignup) toast.success("Login Successful");
			dispatch(setToken(response.data.token));
			
			localStorage.setItem("token", JSON.stringify(response.data.token)); // now i'm able to understand the significance of local storage
			navigate("/");
		} catch (error) {
			console.log("LOGIN API ERROR............", error);
		    if(refFromSignup) toast.error("Login Failed");
		}
		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}


export function signUp(
	firstName,
	lastName,
	email,
	password,
    confirmPassword,
    navigate
) {
	return async (dispatch) => {
		const toastId = toast.loading("Loading...");
        dispatch(setLoading(true));
        const { SIGNUP_API } = endpoints;
		try {
			const response = await apiConnector("POST", SIGNUP_API, {
				firstName,
				lastName,
				email,
				password,
			});

			console.log("SIGNUP API RESPONSE............", response);

			if (!response.data.success) {
				throw new Error(response.data.message);
			}
            login(email, password, navigate, true);
			toast.success("Account created Successfully");
		} catch (error) {
			console.log("SIGNUP API ERROR............", error);
			toast.error("Signup Failed");
			navigate("/signup");
		}
		dispatch(setLoading(false));
		toast.dismiss(toastId);
	};
}

export function logout(navigate, flag) {
	return (dispatch) => {
		dispatch(setToken(null));
		localStorage.removeItem("token");
		if (flag === null || flag === undefined || flag !== true)
			toast.success("Logged Out");
		navigate("/");
	};
}