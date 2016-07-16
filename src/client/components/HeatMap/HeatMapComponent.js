import React from 'react';
import * as Rx from 'rx';
import { config } from '../../utils/config';

import styles from './HeatMap.css';

export class HeatMapComponent extends React.Component {

    constructor(props) {
        super(props);

        this.generateHeatMap = this.generateHeatMap.bind(this);

        this.state = {
            overlayClasses: styles.overlay,
            buttonClasses: styles.button_container,
            completeClasses: styles.complete,
            loaderClasses: styles.loader + ' ' + styles.hidden
        };
    }
    
    generateHeatMap() {
        let { session, onGenerateHeatmap } = this.props,
            config = { container: document.querySelector('.' + styles.overlay), radius: 50 };

        this.setState({
            overlayClasses: styles.overlay + ' ' + styles.visible,
            buttonClasses: styles.button_container + ' ' + styles.hidden,
            loaderClasses: styles.loader
        });

        onGenerateHeatmap(config, session);
        this.setState({ loaderClasses: styles.loader + ' ' + styles.hidden });
    }

    shouldComponentUpdate() {
        let { active } = this.props;
        return active;
    }

    componentDidUpdate() {
        this.generateHeatMap();
    }

    render() {
        let { height, width, active } = this.props;
        let containerStyles = {
                height: height + 'px',
                width: width + 'px'
            };

        return (
            <div className={styles.heatmap} style={containerStyles}>
                <div className={this.state.loaderClasses}></div>

                <div className={this.state.buttonClasses}>
                    <button id="clicker" className={styles.button} onClick={this.generateHeatMap}>Start Heatmap</button>
                </div>

                <div className={this.state.overlayClasses}></div>
            </div>
        );
    }
}