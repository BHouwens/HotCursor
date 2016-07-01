const initialState = {
    width: 1920,
    height: 1080,
    url: 'http://houwens.com'
};

export function webView(state = initialState, action) {
    switch(action.type) {
        case 'SET_VIEW':
            let url = /localhost/g.test(action.url) ? 'https://houwens.com' : action.url;

            return Object.assign({}, state, {
                width: action.width,
                height: action.height,
                url
            });
        default:
            return state;
    }
}