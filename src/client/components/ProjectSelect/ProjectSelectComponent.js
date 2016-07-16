import React from 'react';

export class ProjectSelectComponent extends React.Component{
    render() {
        let { projects, onProjectSelect, defaultValue } = this.props;

        return (
            <select defaultValue={defaultValue} onChange={(e) => onProjectSelect(e.target.value) }>
                <option key="0">{defaultValue}</option>
                {projects.map(project => {
                    return <option key={project}>{project}</option>
                }) }
            </select>
        );
    }
}