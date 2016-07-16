import React from 'react';
import styles from './ControlButtons.css';

export class ControlButtonsComponents extends React.Component {
    constructor(props){
        super(props);

        this.state = { active: false };
        this.setRunningState = this.setRunningState.bind(this);
    }

    setRunningState() {
        let { onRunningStateChange } = this.props;

        this.setState({ active: !this.state.active });
        onRunningStateChange(this.state.active);
    }

    render() {
        return (
            <div className={styles.controlButtonContainer}>
                <button className={styles.runningButton} onClick={this.setRunningState()}></button>
                <button className={styles.exportButton}></button>
            </div>
        );
    }
}