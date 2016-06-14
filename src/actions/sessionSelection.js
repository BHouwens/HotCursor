import { hotCursor } from '../utils/HotCursor';

export function selectSession(session){
    return {
        type: 'SELECT_SESSION',
        session
    };
}

export function fetchSessions(project){
    return async function(dispatch) {
        dispatch(requestSessions);
        
        let projectContents = await hotCursor.db.ref(project).once('value').then(snap => snap.val());
        dispatch( gotSessions(Object.keys(projectContents)) );
    }
}

function gotSessions(sessions){
    return {
        type: 'GOT_SESSIONS',
        sessions
    };
}

function requestSessions(){
    return { type: 'REQUEST_SESSIONS' };
}