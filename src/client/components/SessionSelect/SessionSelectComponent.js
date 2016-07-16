import React from 'react';

export class SessionSelectComponent extends React.Component {

    render() {
        let { sessions, onSessionSelect, defaultSelection } = this.props;

        return (
            <select defaultValue={defaultSelection} onChange={(e) => onSessionSelect(e.target.value) }>
                <option key="0">{defaultSelection}</option>
                {sessions.map(session => {
                    return <option key={session}>{session}</option>
                }) }
            </select>
        );
    }
}