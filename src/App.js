import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/landing" element={<Landing />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
			</Routes>
		</Router>
	);
}

export default App;
