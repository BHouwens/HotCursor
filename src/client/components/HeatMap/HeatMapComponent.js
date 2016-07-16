import React from 'react';
import * as Rx from 'rx';
import { hotCursor } from '../../utils/hotCursor';
import { config } from '../../utils/config';
import styles from './HeatMap.css';

export class HeatMapComponent extends React.Component {

    constructor(props) {
        super(props);

        this.generateHeatMap = this.generateHeatMap.bind(this);

        this.state = {
            overlayClasses: styles.overlay,
            buttonClasses: styles.button_container,
            bgClasses: styles.background,
            completeClasses: styles.complete,
            loaderClasses: styles.loader + ' ' + styles.hidden
        };
    }


    /**
     *  Subscribes to the data feed and pipes it to the heatmap
     * 
     *  @param {Rx.Observable} dataFeed - Data feed to subscribe to
     */

    subscribeAndGenerate(dataFeed) {
        this.setState({ loaderClasses: styles.loader + ' ' + styles.hidden });

        dataFeed.subscribe(
            entry => {
                hotCursor.heatmap.addData({
                    x: entry.x,
                    y: entry.y,
                    value: entry.value
                });

                if (entry.scrollPosition != hotCursor.currentScrollPosition){
                    hotCursor.scrollToPosition(entry.scrollPosition);
                    hotCursor.currentScrollPosition = entry.scrollPosition;
                }
            },

            error => {
                throw new Error(
                    `Error processing subscription data 
                     from Firebase: ${error}`
                );
            },

            () => {
                this.setState({ completeClasses: styles.complete + ' ' + styles.visible });
            }
        );
    }


    /**
     *  Generates heatmap on button click. Removes event listener and gets heatmap data to subscribe to
     */

    generateHeatMap() {
        let config = { container: document.querySelector('.' + styles.overlay), radius: 50 };

        this.setState({
            overlayClasses: styles.overlay + ' ' + styles.visible,
            buttonClasses: styles.button_container + ' ' + styles.hidden,
            bgClasses: styles.background + ' ' + styles.visible,
            loaderClasses: styles.loader
        });

        hotCursor.getHeatMapData(config).then(dataFeed => {
            this.subscribeAndGenerate(dataFeed);
        });
    }

    render() {
        return (
            <div>
                <div className={this.state.loaderClasses}></div>

                <div className={this.state.buttonClasses}>
                    <button id="clicker" className={styles.button} onClick={this.generateHeatMap}>Start Heatmap</button>
                </div>

                <div className={this.state.overlayClasses}></div>
                <div className={this.state.bgClasses}></div>
            </div>
        );
    }
}