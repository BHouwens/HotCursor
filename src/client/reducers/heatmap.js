const initialState = {
    session: '',
    active: false,
    data: []
};

export function heatmap(state = initialState, action) {
    switch(action.type) {
        case 'SETUP_HEATMAP':
            return Object.assign({}, state, { 
                session: action.session,
                active: true
            });

        case 'INACTIVE':
            return Object.assign({}, state, {
                active: false
            });

        case 'ADD_DATAPOINT':
            let { data } = state;
            data.push(action.datapoint);

            return Object.assign({}, state, { data });

        default:
            return state;
    }
}