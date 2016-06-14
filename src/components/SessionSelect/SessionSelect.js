import React from 'react';

export class SessionSelect extends React.Component {
    render() {
        let { sessions, onSessionSelect, defaultSelection } = this.props;

        console.log('sessions', defaultSelection);

        return (
            <select defaultValue={defaultSelection} onChange={(e) => onSessionSelect(e.target.value) }>
                <option key="0">{defaultSelection}</option>
                {sessions.map(session => {
                    return <option key={session}>{session}</option>
                })}
            </select>
        );
    }
}