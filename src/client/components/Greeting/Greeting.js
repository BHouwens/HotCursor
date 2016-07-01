import React from 'react';
import { ProjectSelector } from '../../containers/projectSelector';
import { SessionSelector } from '../../containers/sessionSelector';

import styles from './Greeting.css'

export class Greeting extends React.Component {

    constructor(props) {
        super(props);

        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.showWarning = this.showWarning.bind(this);
        this.hideWarning = this.hideWarning.bind(this);

        this.state = {
            panelClasses: styles.container,
            warningClasses: styles.warning
        };
    }

    showWarning(){
        let { selection } = this.props;

        if (selection.indexOf('Select a') != -1){
            this.setState({ warningClasses: styles.warning + ' ' + styles.visible });
        } 
    }

    hideWarning(){
        this.setState({ warningClasses: styles.warning });
    }

    hide() {
        let { onStartHeatmap, selection } = this.props;

        onStartHeatmap(selection);
        this.setState({ panelClasses: styles.container + ' ' + styles.hidden });
    }

    show() {
        this.setState({ panelClasses: styles.container });
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

                        <button 
                            onMouseEnter={this.showWarning} 
                            onMouseLeave={this.hideWarning} 
                            onClick={this.hide}>
                                Go!
                        </button>

                        <p className={this.state.warningClasses}>
                            Remember to choose both a project and session before you get going
                        </p>
                    </section>
                </div>

            </section>
        );
    }
}