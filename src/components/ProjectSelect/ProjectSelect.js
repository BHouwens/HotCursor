import React from 'react';

export class ProjectSelect extends React.Component{
    render() {
        let { projects, onProjectSelect } = this.props;

        return (
            <select onChange={(e) => onProjectSelect(e.target.value) }>
                {projects.map(project => {
                    return <option key={project}>{project}</option>
                }) }
            </select>
        );
    }
}