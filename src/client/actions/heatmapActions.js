import { hotCursor } from '../utils/HotCursor';

export function setupHeatmap(session) {
    return {
        type: 'SETUP_HEATMAP',
        session
    };
}

export function setToInactive() {
    return { type: 'INACTIVE' };
}

function addDataPoint(datapoint) {
    return {
        type: 'ADD_DATAPOINT',
        datapoint
    };
}

function complete() {
    return { type: 'COMPLETE_HEATMAP' };
}


/**
 *  Generates the needed heatmap
 * 
 *  @param {Object} config - Config to set the heatmap up on
 *  @param {string} session - Session to get heatmap data for
 */

export function generateHeatmap(config, session) {

    return async function(dispatch) {
        const dataFeed = await hotCursor.getHeatMapData(config, session);
        subscribeAndGenerate(dispatch, dataFeed);
    }

}


/**
 *  Subscribes to the data feed and pipes it to the heatmap
 * 
 *  @param {Rx.Observable} dataFeed - Data feed to subscribe to
 */

function subscribeAndGenerate(dispatch, dataFeed) {
    dataFeed.subscribe(
        entry => {
            hotCursor.heatmap.addData({
                x: entry.x,
                y: entry.y,
                value: entry.value
            });

            if (entry.scrollPosition != hotCursor.currentScrollPosition) {
                hotCursor.scrollToPosition(entry.scrollPosition);
                hotCursor.currentScrollPosition = entry.scrollPosition;
            }

            dispatch(addDataPoint(entry));
        },

        error => {
            throw new Error(
                `Error processing subscription data from Firebase: ${error}`
            );
        },

        () => {
            dispatch(complete);
            // this.setState({ completeClasses: styles.complete + ' ' + styles.visible });
        }
    );
}