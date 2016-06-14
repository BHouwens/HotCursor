import { hotCursor } from '../utils/HotCursor';
import { config } from '../utils/config';

export function selectProject(project){
    return {
        type: 'SELECT_PROJECT',
        project
    };
}

export function fetchProjects(){
    hotCursor.initialise(config);

    return async function(dispatch) {
        dispatch(requestProjects);
        
        let databaseContents = await hotCursor.db.ref().once('value').then(snap => snap.val());
        dispatch( gotProjects(Object.keys(databaseContents)) );
    }
}

function gotProjects(projects){
    return {
        type: 'GOT_PROJECTS',
        projects
    };
}

function requestProjects(){
    return { type: 'REQUEST_PROJECTS' };
}