import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ProjectsPage from "./ProjectsPage";
import EditProjectPage from "./EditProjectPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ProjectsPage />} />
				<Route path="/edit/:id" element={<EditProjectPage />} />
				{/* Add other routes */}
			</Routes>
		</Router>
	);
}

export default App;
