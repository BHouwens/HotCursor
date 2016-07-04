const initialState = {
    width: 1920,
    height: 1080,
    loading: false,
    url: 'http://houwens.com'
};

export function webView(state = initialState, action) {
    switch(action.type) {
        case 'SET_VIEW':
            let url = /localhost/g.test(action.url) ? 'https://houwens.com' : action.url;

            return Object.assign({}, state, { url });

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