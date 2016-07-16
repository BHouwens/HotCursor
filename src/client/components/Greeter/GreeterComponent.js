import React from 'react';
import { ProjectSelect } from '../ProjectSelect/ProjectSelect';
import { SessionSelect } from '../SessionSelect/SessionSelect';

import styles from './Greeter.css';

export class GreeterComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { onChooseProject, secondaryClass } = this.props;

        return (
            <section className={styles.greeting}>

                <button className={styles.backButton} onClick={onChooseProject}>
                    <span className={styles.arrow}></span>
                    <span className={styles.backTitle}>Select another project</span>
                </button>

                <div className={styles.container + ' ' + styles[secondaryClass]}>
                    <h1 className={styles.greetingTitle}>Hey there</h1>

                    <section className={styles.selectors}>
                        <p>Choose a project and user session, then begin</p>

                        <ProjectSelect />
                        <SessionSelect />

                    </section>
                </div>

            </section>
        );
    }
}