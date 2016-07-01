const initialState = {
    sessionData: {}
};

export function greeter(state = initialState, action) {
    switch(action.type) {
        case 'GOT_SESSION_DATA':
            console.log('action in greeter reducer', action);
            return Object.assign({}, state, {
                sessionData: action.sessionData
            });
        default:
            return state;
    }
}