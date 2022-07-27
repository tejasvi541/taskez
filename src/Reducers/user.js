import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_PROFILE,
} from "../Actions/types";

const initialState = {
	isLogin: false,
	userData: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				userData: action.payload,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLogin: true,
			};
		case LOGIN_FAIL:
			return {
				...state,
				isLogin: false,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				isLogin: true,
			};
		case REGISTER_FAIL:
			return {
				...state,
				isLogin: false,
			};
		case LOGOUT:
			return {
				...state,
				isLogin: false,
				userData: null,
			};
		default:
			return state;
	}
};

export default userReducer;
