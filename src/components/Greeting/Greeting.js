import React from 'react';
import { ProjectSelector } from '../../containers/projectSelector';
import { SessionSelector } from '../../containers/sessionSelector';

import styles from './Greeting.css'

export class Greeting extends React.Component {

    constructor(props) {
        super(props);

        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);

        this.state = {
            classes: styles.container
        };
    }

    hide() {
        let { onHide, selection } = this.props;

        onHide();
        this.setState({ classes: styles.container + ' ' + styles.hidden });
    }

    show() {
        this.setState({ classes: styles.container });
    }

    render() {
        return (
            <section>
                <div className={styles.back_button} onClick={this.show}></div>
                <div className={this.state.classes}>
                    <h1>Hey there</h1>
                    <p>Choose a project and user session, then begin</p>

                    <ProjectSelector />
                    <SessionSelector />

                    <button onClick={this.hide}>Go!</button>
                </div>
            </section>
        );
    }
}