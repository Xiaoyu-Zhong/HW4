import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Projects() {
    // Initial state with two example projects
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project A', description: 'Description for Project A', isJoined: false },
        { id: 2, name: 'Project B', description: 'Description for Project B', isJoined: true },
    ]);

    // State to handle adding new projects
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectDesc, setNewProjectDesc] = useState('');

    // Toggle join/leave for a project
    const handleToggleJoin = (id) => {
        setProjects((prevProjects) =>
            prevProjects.map((project) =>
                project.id === id
                    ? { ...project, isJoined: !project.isJoined }
                    : project
            )
        );
    };

    // Add a new project to the list
    const handleAddProject = () => {
        if (!newProjectName.trim() || !newProjectDesc.trim()) {
            return; // Do nothing if fields are empty
        }

        const newProject = {
            id: Date.now(), // Quick way to generate a unique ID
            name: newProjectName,
            description: newProjectDesc,
            isJoined: false,
        };

        setProjects((prevProjects) => [...prevProjects, newProject]);
        setNewProjectName('');
        setNewProjectDesc('');
    };

    return (
        <div style={{ padding: '16px' }}>
            <h2>Projects</h2>

            {/* Form to add new projects */}
            <div style={{ marginBottom: '16px' }}>
                <TextField
                    label="Project Name"
                    variant="outlined"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    style={{ marginRight: '8px' }}
                />
                <TextField
                    label="Project Description"
                    variant="outlined"
                    value={newProjectDesc}
                    onChange={(e) => setNewProjectDesc(e.target.value)}
                    style={{ marginRight: '8px' }}
                />
                <Button variant="contained" onClick={handleAddProject}>
                    Add Project
                </Button>
            </div>

            {/* Render each project as a ProjectCard */}
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    name={project.name}
                    description={project.description}
                    isJoined={project.isJoined}
                    onToggleJoin={handleToggleJoin}
                />
            ))}
        </div>
    );
}

export default Projects;