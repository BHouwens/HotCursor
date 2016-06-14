const initialState = {
    loading: false,
    currentSession: '',
    sessions: []
};

export function sessionSelection(state = initialState, action) {
    switch(action.type) {
        case 'REQUEST_SESSIONS':
            return Object.assign({}, state, { loading: true });

        case 'GOT_SESSIONS':
            return Object.assign({}, state, {
                loading: false,
                currentSession: action.sessions[0],
                sessions: action.sessions
            });

        default:
            return state;
    }   
}