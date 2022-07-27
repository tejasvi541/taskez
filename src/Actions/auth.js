import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_PROFILE,
} from "./types";
import setAuthToken from "../Utils/setAuthToken";
import { GetUser, RegisterUser, LoginUser, Logout } from "../Api/api";

export const loadUser = (navigate) => async (dispatch) => {
	if (localStorage.getItem("token-taskz")) {
		setAuthToken(localStorage.getItem("token-taskz"));
	}
	try {
		const res = await GetUser();
		if (res.data) {
			dispatch({
				type: REGISTER_SUCCESS,
			});
			const result = {
				id: res.data._id,
				name: res.data.name,
				email: res.data.email,
			};
			dispatch({
				type: USER_LOADED,
				payload: result,
			});
			navigate("/dashboard");
		}
	} catch (err) {
		dispatch({
			type: AUTH_ERROR,
		});
		navigate("/landing");
	}
};

// Register User
export const register = (data, navigate) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await RegisterUser(data, config);
		if (res.data.token) {
			localStorage.setItem("token-taskz", res.data.token);
			dispatch({
				type: REGISTER_SUCCESS,
			});
			dispatch(loadUser(navigate));
			// navigate("/dashboard");
		}
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
		});
		navigate("/landing");
	}
};

// Login User
export const login = (data, navigate) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await LoginUser(data, config);
		if (res.data.token) {
			localStorage.setItem("token-taskz", res.data.token);
			const result = {
				id: res.data.user._id,
				name: res.data.user.name,
				email: res.data.user.email,
			};
			dispatch({
				type: REGISTER_SUCCESS,
			});
			dispatch({
				type: USER_LOADED,
				payload: result,
			});
			dispatch(loadUser(navigate));
		}
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
		});
		navigate("/landing");
	}
};

// Logout
export const logout = (navigate) => (dispatch) => {
	dispatch({
		type: LOGOUT,
	});
	localStorage.removeItem("token-taskz");
	navigate("/landing");
};
