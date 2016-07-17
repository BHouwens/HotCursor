import React from 'react';
import { Clock } from '../Clock/Clock';
import { TimeScrubber } from '../TimeScrubber/TimeScrubber';
import { ControlButtons } from '../ControlButtons/ControlButtons';

import styles from './ControlBar.css';

export class ControlBar extends React.Component {
    render() {
        return (
            <div className={styles.controlBar}>
                <Clock />
                <TimeScrubber />
                <ControlButtons />
            </div>
        );

    }
}