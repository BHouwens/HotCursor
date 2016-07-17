const initialState = {
    session: '',
    data: [],
    config: {}
};

export function heatmap(state = initialState, action) {
    switch(action.type) {
        case 'SETUP_HEATMAP':
            return Object.assign({}, state, { session: action.session });

        case 'SET_CONFIG':
            return Object.assign({}, state, { config: action.config });

        case 'ADD_DATA':
            return Object.assign({}, state, { data: action.data });

        default:
            return state;
    }
}