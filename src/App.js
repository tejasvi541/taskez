import "./App.css";
import Landing from "./Pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/landing" element={<Landing />} />
			</Routes>
		</Router>
	);
}

export default App;
