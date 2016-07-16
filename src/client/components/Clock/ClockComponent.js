import React from 'react';
import styles from './Clock.css';

export class ClockComponent extends React.Component {
    render() {
        let { time } = this.props;

        return (
            <div className={styles.clock}>
                {time}
            </div>
        );
    }
}