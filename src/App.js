import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import setAuthToken from "./Utils/setAuthToken";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser } from "./Actions/auth";

if (localStorage.getItem("token-taskz")) {
	setAuthToken(localStorage.getItem("token-taskz"));
}

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let { isLogin } = useSelector((state) => {
		return state.userReducer;
	});
	useEffect(() => {
		dispatch(loadUser(navigate));
	}, []);
	console.log(isLogin);
	return (
		// <Router>
		<Routes>
			<Route exact path="/landing" element={<Landing />} />
			<Route
				exact
				path="/dashboard"
				element={true ? <Dashboard /> : <Landing />} // We have to right isLogin where the true is placed so the dashboard is public now
			/>
		</Routes>
		// </Router>
	);
}

export default App;
