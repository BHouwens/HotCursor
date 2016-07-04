import { hotCursor } from '../utils/HotCursor';
import { fetchWebView } from './webView';

export function fetchSessionData(session){
    return async function(dispatch) {
        dispatch(requestSessionData);

        let sessionData = await hotCursor.currentProjectRef
                                .child(session).once('value')
                                .then(snap => snap.val());

        let { width, height, url } = sessionData;

        dispatch( gotSessionData(sessionData) );
        dispatch( fetchWebView(width, height, url) );        
    }
}

function requestSessionData(){
    return { type: 'REQUEST_SESSION_DATA' };
}

function gotSessionData(sessionData){
    return {
        type: 'GOT_SESSION_DATA',
        sessionData
    }
}