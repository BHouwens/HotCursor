let fetch = require('node-fetch');

export function fetchWebView(width, height, url) {
    return async function(dispatch) {
        dispatch(requestWebView(width, height));

        // let postUrl = 'http://localhost:3000/get-image';

        // try {
        //     let image = await fetch(postUrl, { 
        //         method: 'POST',
        //         headers: {
        //             "Accept": "application/json",
		// 	        "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             'url': 'https://google.com',
        //             'height': height,
        //             'width': width
        //         })
        //     });

        //     d
        // }catch(err){
        //     throw new Error(`Fetching web view failed with error: ${err}`);
        // }

        dispatch(setWebView());
    }
}

function setWebView() {
    return {
        type: 'SET_VIEW'
    };
}

function requestWebView(width, height) {
    return { 
        type: 'REQUEST_VIEW',
        width,
        height
    };
}