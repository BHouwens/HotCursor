import React from 'react';
import styles from './TimeSrub.css';

export class TimeSrub extends React.Component {

    constructor(props) {
        super(props);
    }

    getRangeBounds() {
        let { dataFeed } = this.props;

        return {
            min: dataFeed[0],
            max: dataFeed[dataFeed.length - 1]
        };
    }

    render() {
        let { min, max } = this.getRangeBounds();

        return (
            <div className={styles.timescrub}>
                <input type="range" className={styles.slider} min={min} max={max} />
            </div>
        );
    }
}