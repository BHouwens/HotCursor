import React from 'react';
import { ProjectSelector } from '../../containers/projectSelector';
import { SessionSelector } from '../../containers/sessionSelector';

import styles from './Greeting.css'

export class Greeting extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Hey there</h1>
                <p>Choose a project and user session, then begin</p>

                <ProjectSelector />
                <SessionSelector />

                <button>Go!</button>
            </div>
        );
    }
}