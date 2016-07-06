const initialState = {
    sessionData: {},
    panelClass: 'container',
    secondaryClass: ''
};

export function greeter(state = initialState, action) {
    switch(action.type) {
        case 'GOT_SESSION_DATA':
            return Object.assign({}, state, {
                sessionData: action.sessionData,
                secondaryClass: 'hidden'
            });

        case 'RESET_PROJECT':
            return initialState;

        default:
            return state;
    }
}