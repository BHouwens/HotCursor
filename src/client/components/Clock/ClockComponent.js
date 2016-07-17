import React from 'react';
import styles from './Clock.css';

export class ClockComponent extends React.Component {

    getTimeIntervals(time) {
        const timeArray = time.split(':');

        return {
            mins: timeArray[0],
            secs: timeArray[1],
            msecs: timeArray[2]
        };
    }

    render() {
        let timeIntervals = this.getTimeIntervals(this.props.time);

        return (
            <div className={styles.clock}>
                <section className={styles.chunk}>
                    <div>{timeIntervals.mins}</div>
                    <div className={styles.title}>mins</div>
                </section>

                <section className={styles.chunk}>:</section>

                <section className={styles.chunk}>
                    <div>{timeIntervals.secs}</div>
                    <div className={styles.title}>secs</div>
                </section>

                <section className={styles.chunk}>:</section>

                <section className={styles.chunk}>
                    <div>{timeIntervals.msecs}</div>
                    <div className={styles.title}>msecs</div>
                </section>
            </div>
        );
    }
}