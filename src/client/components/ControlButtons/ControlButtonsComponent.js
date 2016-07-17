import React from 'react';
import styles from './ControlButtons.css';

export class ControlButtonsComponent extends React.Component {
    render() {
        return (
            <div className={styles.controlButtonContainer}>
                <section>
                    <button className={styles.runningButton}></button>
                    <div className={styles.title}>pause</div>
                </section>

                <section>
                    <button className={styles.exportButton}></button>
                    <div className={styles.title}>export data</div>
                </section>
            </div>
        );
    }
}