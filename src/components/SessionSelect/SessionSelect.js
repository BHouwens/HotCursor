import React from 'react';

export class SessionSelect extends React.Component {
    render() {
        let { sessions, onSessionSelect } = this.props;

        console.log('sessions', sessions);

        return (
            <select onChange={(e) => onSessionSelect(e.target.value) }>
                {sessions.map(session => {
                    return <option key={session}>{session}</option>
                })}
            </select>
        );
    }
}