const initialState = {
    loading: false,
    defaultSelection: '- Select a project first -',
    sessions: []
};

export function sessionSelection(state = initialState, action) {
    switch(action.type) {
        case 'REQUEST_SESSIONS':
            return Object.assign({}, state, { 
                loading: true, 
                defaultSelection: '- Okay, fetching sessions -'
            });

        case 'GOT_SESSIONS':
            return Object.assign({}, state, {
                loading: false,
                defaultSelection: '- Select a session -',
                sessions: action.sessions
            });

        case 'SELECT_SESSION':
            return Object.assign({}, state, {
                defaultSelection: action.session
            });

        default:
            return state;
    }   
}