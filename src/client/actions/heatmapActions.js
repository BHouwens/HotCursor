import { hotCursor } from '../utils/HotCursor';

/*- Straight actions -*/

export function setupHeatmap(session) {
    return {
        type: 'SETUP_HEATMAP',
        session
    };
}

export function setConfig(config) {
    return {
        type: 'SET_CONFIG',
        config
    };
}

function setData(data) {
    return {
        type: 'SET_DATA',
        data
    };
}



/**
 *  Generates the needed heatmap
 * 
 *  @param {Object} config - Config to set the heatmap up on
 *  @param {string} session - Session to get heatmap data for
 */

export function generateHeatmap(config, session) {

    return async function(dispatch) {
        dispatch(setupHeatmap(session));
        
        const dataFeed = await hotCursor.getHeatMapData(config, session);
        subscribeAndGenerate(dispatch, dataFeed);
    }

}


/**
 *  Subscribes to the data feed and pipes it to the heatmap
 * 
 *  @param {function} dispatch - Redux dispatch function
 *  @param {Rx.Observable} dataFeed - Data feed to subscribe to
 */

function subscribeAndGenerate(dispatch, dataFeed) {
    let dataStore = [];

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

            dataStore.push(entry);
        },

        error => {
            throw new Error(
                `Error processing subscription data from Firebase: ${error}`
            );
        },

        () => {
            dispatch(setData(dataStore));
        }
    );
}