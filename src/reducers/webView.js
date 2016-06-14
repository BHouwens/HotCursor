const initialState = {
    width: 1920,
    height: 1080,
    url: 'http://houwens.com'
};

export function webView(state = initialState, action) {
    switch(action.type) {
        case 'SET_VIEW':
            return Object.assign({}, state, {
                width: action.width,
                height: action.height,
                url: action.url
            });
        default:
            return state;
    }
}