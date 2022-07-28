import axios from "axios";
// const url = "https://api-nodejs-todolist.herokuapp.com";
const url =
	"https://cors-anywhere.herokuapp.com/https://api-nodejs-todolist.herokuapp.com";

export const LoginUser = (data) => axios.post(`${url}/user/login`, data);
export const RegisterUser = (data) => axios.post(`${url}/user/register`, data);
export const Logout = (data) => axios.post(`${url}/user/logout`, data);
export const GetUser = () => axios.get(`${url}/user/me`);
export const AddTask = (data) => axios.post(`${url}/task`);
export const GetAllTask = () => axios.get(`${url}/task`);
