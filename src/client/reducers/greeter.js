const initialState = {
    secondaryClass: ''
};

export function greeter(state = initialState, action) {
    switch(action.type) {
        case 'GOT_SESSION_DATA':
            return { secondaryClass: 'hidden' };

        case 'RESET_PROJECT':
            return { secondaryClass: '' };

        default:
            return state;
    }
}