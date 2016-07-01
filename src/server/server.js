import * as path from 'path';

let express = require('express');

let app = express();
let isDev = process.env.NODE_ENV.indexOf('dev') != -1;

app.set('view engine', 'ejs');
app.set('views', path.resolve(process.cwd(), 'src/server/views'));

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

app.listen(3000, () => {
    console.log('App running on port 3000');
    if (isDev) console.log('App is in development mode');
});