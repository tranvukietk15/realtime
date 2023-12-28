import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
	id: number;
	name: string;
}

const ProjectsPage = () => {
	const [projects, setProjects] = useState([] as Project[]);
	const navigate = useNavigate();

	const handleEdit = (projectId: number) => {
		// Handle edit logic here
		console.log("Editing project with ID:", projectId);
		navigate(`/edit/${projectId}`);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:57679/Projects");
				const data = await response.json();
				setProjects(data.projects);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Projects</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{projects &&
						projects.map((project) => (
							<tr key={project.id}>
								<td>{project.id}</td>
								<td>{project.name}</td>
								<td>
									<button
										onClick={() => handleEdit(project.id)}
									>
										Edit
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};

export default ProjectsPage;
