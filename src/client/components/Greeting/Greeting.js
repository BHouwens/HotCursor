import React from 'react';
import { ProjectSelector } from '../../containers/projectSelector';
import { SessionSelector } from '../../containers/sessionSelector';

import styles from './Greeting.css'

export class Greeting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            panelClasses: styles[this.props.panelClass],
            sessionData: this.props.sessionData
        };
    }

    shouldComponentUpdate() {
        if (this.state.sessionData.hasOwnProperty('0') && this.props.sessionData.hasOwnProperty('0')){
            return this.state.sessionData['0'] != this.props.sessionData['0'];
        }
        
        return true;
    }

    componentWillUpdate() {
        let { panelClass, secondaryClass, sessionData } = this.props;

        this.setState({ 
            panelClasses: styles[panelClass] + ' ' + styles[secondaryClass], 
            sessionData
        });
    }

    render() {

        return (
            <section className={styles.greeting}>

                <button className={styles.backButton} onClick={this.show}>
                    <span className={styles.arrow}></span>
                    <span className={styles.backTitle}>Select another project</span>
                </button>

                <div className={this.state.panelClasses}>
                    <h1 className={styles.greetingTitle}>Hey there</h1>

                    <section className={styles.selectors}>
                        <p>Choose a project and user session, then begin</p>

                        <ProjectSelector />
                        <SessionSelector />

                    </section>
                </div>

            </section>
        );
    }
}