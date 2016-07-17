import React from 'react';
import styles from './ControlButtons.css';

export class ControlButtonsComponent extends React.Component {
    render() {
        return (
            <div className={styles.controlButtonContainer}>
                <button>run</button>
                <button>export</button>
            </div>
        );
    }
}