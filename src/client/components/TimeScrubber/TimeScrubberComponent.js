import React from 'react';
import styles from './TimeScrubber.css';

export class TimeScrubberComponent extends React.Component {

    render() {
        return (
            <div className={styles.timescrub}>
                <input type="range" className={styles.slider} min="0" max="100" />
            </div>
        );
    }
}