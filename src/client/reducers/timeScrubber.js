const initialState = {
    data: [0, 3, 4, 57, 3]
};

export function timeScrubber(state = initialState, action) {
    switch(action.type) {
        case 'SET_TIMESCRUBBER':
            return { data: action.data }

        default:
            return state;
    }
}