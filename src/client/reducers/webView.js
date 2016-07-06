const initialState = {
    width: 1920,
    height: 1080,
    loading: false,
    url: './screenshot'
};

export function webView(state = initialState, action) {
    switch(action.type) {
        case 'SET_VIEW':
            return Object.assign({}, state, { loading: false });

        case 'REQUEST_VIEW':
            return Object.assign({}, state, {
                loading: true,
                width: action.width,
                height: action.height
            });

        default:
            return state;
    }
}