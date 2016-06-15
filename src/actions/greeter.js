import { hotCursor } from '../utils/HotCursor';

export function fetchSessionData(session){
    return async function(dispatch) {
        dispatch(requestSessionData);

        let sessionData = await hotCursor.currentProjectRef
                                .child(session).once('value')
                                .then(snap => snap.val());

        console.log('I can get here', sessionData);

        dispatch( gotSessionData(sessionData) );
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