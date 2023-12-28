import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProjectPage = () => {
	const { id } = useParams();

	const [projectName, setProjectName] = useState("");

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const response = await fetch(
					`http://localhost:57679/Projects/${id}`
				);
				const data = await response.json();
				setProjectName(data.name);
			} catch (error) {
				console.error("Error fetching project:", error);
			}
		};

		fetchProject();
	}, [id]);

	const handleSave = async () => {
		try {
			await fetch(`http://localhost:57679/Projects`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id: id, name: projectName }),
			});
			// Handle success or navigate to another page
		} catch (error) {
			console.error("Error updating project:", error);
		}
	};

	return (
		<div>
			<h1>Edit Project</h1>
			<label>
				Name:
				<input
					type="text"
					value={projectName}
					onChange={(e) => setProjectName(e.target.value)}
				/>
			</label>
			<button onClick={handleSave}>Save</button>
		</div>
	);
};

export default EditProjectPage;
