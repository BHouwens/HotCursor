var webshot = require('webshot'),
        options = {
            screenSize: {
                width: 360,
                height: 240
            },
            shotSize: {
                width: 360,
                height: 'all'
            }
        };

webshot('https://google.com', 'screenshot.jpeg', options, err => {
    console.log(err);
});