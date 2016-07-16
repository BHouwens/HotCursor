const initialState = {
    data: []
};

export function heatmap(state = initialState, action) {
    switch(action.type) {
        case 'ADD_DATAPOINT':
            let { data } = state;
            data.push(action.datapoint);
            
            return { data };

        default:
            return state;
    }
}