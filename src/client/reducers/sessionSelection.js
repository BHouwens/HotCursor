const initialState = {
    loading: false,
    defaultSelection: '- Select a project first -',
    sessions: []
};

export function sessionSelection(state = initialState, action) {
    switch(action.type) {
        case 'RESET_SESSIONS':
            return Object.assign({}, state, initialState);

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

        default:
            return state;
    }   
}