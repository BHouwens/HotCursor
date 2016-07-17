import React from 'react';
import styles from './TimeScrubber.css';

export class TimeScrubberComponent extends React.Component {

    getRangeInputValues(data) {
        let rangeInputValues = {
            min: 0,
            max: data.length
        };
        return rangeInputValues;
    }

    render() {
        let { data } = this.props,
            inputValues = this.getRangeInputValues(data);
        
        return (
            <div className={styles.timescrub}>
                <input type="range" className={styles.slider} min={inputValues.min} max={inputValues.max} />
            </div>
        );
    }
}