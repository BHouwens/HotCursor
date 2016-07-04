export async function takeScreenshot(width, height, url){
    let webshot = require('webshot'),
        options = {
            screenSize: {
                width,
                height
            },
            shotSize: {
                width,
                height: 'all'
            }
        };

    let response = await webshot(url, 'screenshot.jpeg', options, err => {
        console.log(err);
    });

    return response;
}

