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

        try{
            let projectContents = await hotCursor.getAllSessionIDs(project);
                dispatch(gotSessions(projectContents));
        } catch(error) {
            throw new Error(`Process to fetch the sessions fell over with error: ${error}`);
        }
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