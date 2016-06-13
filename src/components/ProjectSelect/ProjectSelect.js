import React from 'react';

export const ProjectSelect = ({ projects, onProjectSelect }) => {
    return (
        <select onChange={(e) => onProjectSelect(e.target.value) }>
            {projects.map(project => {
                return <option key={project}>{project}</option>
            }) }
        </select>
    );
}