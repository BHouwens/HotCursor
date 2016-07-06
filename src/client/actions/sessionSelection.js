import { hotCursor } from '../utils/HotCursor';
import { fetchWebView } from './webView';

export function setVisibility(state) {
    return {
        type: 'SET_WARNING',
        state
    }
}

/*- Fetches data for specific session -*/

export function fetchSessionData(session) {
    return async function (dispatch) {
        dispatch(requestSessionData);

        let sessionData = await hotCursor.currentProjectRef
            .child(session).once('value')
            .then(snap => snap.val());

        let { width, height, url } = sessionData;

        dispatch(gotSessionData(sessionData));
        dispatch(fetchWebView(width, height, url));
    }
}

function requestSessionData() {
    return { type: 'REQUEST_SESSION_DATA' };
}

function gotSessionData(sessionData) {
    return {
        type: 'GOT_SESSION_DATA',
        sessionData
    }
}

export function selectSession(session) {
    return {
        type: 'SELECT_SESSION',
        session
    };
}

/*- Fetches all possible sessions for the selected project -*/

export function fetchSessions(project) {
    return async function (dispatch) {
        dispatch(requestSessions);

        try {
            let projectContents = await hotCursor.getAllSessionIDs(project);
            dispatch(gotSessions(projectContents));
        } catch (error) {
            throw new Error(`Process to fetch the sessions fell over with error: ${error}`);
        }
    }

}

function gotSessions(sessions) {
    return {
        type: 'GOT_SESSIONS',
        sessions
    };
}

function requestSessions() {
    return { type: 'REQUEST_SESSIONS' };
}