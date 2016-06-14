export function setWebView(width, height, url) {
    return {
        type: 'SET_VIEW',
        width,
        height, 
        url
    };
}