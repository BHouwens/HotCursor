import React from 'react';
import { TimeScrubber } from '../TimeScrubber/TimeScrubber';
import { Clock } from '../Clock/Clock';
import { ControlButtons } from '../ControlButtons/ControlButtons';

import styles from './ControlBar.css';

export class ControlBarComponent extends React.Component {
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