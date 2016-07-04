import * as path from 'path';
import { takeScreenshot } from './utils/screenshot';

let express = require('express'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    webshot = require('webshot');

let app = express();
let isDev = process.env.NODE_ENV.indexOf('dev') != -1;

app.set('view engine', 'ejs');
app.set('views', path.resolve(process.cwd(), 'src/server/views'));

app.use(bodyParser.json());

if (isDev) {
    let webpack = require("webpack"),
        webpackDevMiddleware = require("webpack-dev-middleware"),
        webpackHotMiddleware = require("webpack-hot-middleware"),
        clientConfig = require("../../webpack.client");

    let compiler = webpack(clientConfig);

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: clientConfig.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

}else{
    app.use(express.static(path.join(process.cwd(), "dist"), { maxAge: 3 * 60 * 60 * 1000 }));
}

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/get-image', (req, res) => {
    let width = req.body.width,
        height = req.body.height,
        url = req.body.url;

    let options = {
            screenSize: {
                width,
                height
            },
            shotSize: {
                width,
                height: 'all'
            },
            onLoadFinished: {
                fn: () => {
                    this.res.sendFile('./screenshot.jpeg');
                },
                context: { res }
            }
        };
    
    res.sendFile(path.join(process.cwd(), 'screenshot.jpeg'));

});

app.listen(3000, () => {
    console.log('App running on port 3000');
    if (isDev) console.log('App is in development mode');
});