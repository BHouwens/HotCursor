const initialState = {
    time: '00:00:00'
};

export function clock(state = initialState, action) {
    switch(action.type) {
        case 'UPDATE_CLOCK':
            return { time: action.time };
        default:
            return state;
    }
}