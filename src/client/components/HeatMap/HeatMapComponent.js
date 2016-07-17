import React from 'react';
import * as Rx from 'rx';
import { config } from '../../utils/config';

import styles from './HeatMap.css';

export class HeatMapComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            overlayClasses: styles.overlay + ' ' + styles.visible,
            loaderClasses: styles.loader + ' ' + styles.hidden
        };
    }

    componentDidMount() {
        let { onSetupConfig } = this.props;

        const config = {
            container: document.querySelector('.' + styles.overlay), 
            radius: 50 
        };

        onSetupConfig(config);
    }

    render() {
        let { height, width } = this.props;
        let containerStyles = {
                height: height + 'px',
                width: width + 'px'
            };

        return (
            <div className={styles.heatmap} style={containerStyles}>
                <div className={this.state.loaderClasses}></div>
                <div className={this.state.overlayClasses}></div>
            </div>
        );
    }
}