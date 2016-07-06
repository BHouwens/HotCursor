import React from 'react';

import styles from './WebView.css';

export class WebView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0,
            url: '#'
        };
    }

    setImage() {
        let { width, height, url } = this.state,
            context = this.refs.canvas.getContext('2d');

        let image = new Image();
        image.src = url;
        image.onload = () => {
            context.drawImage(image, 0, 0);
        }
    }

    shouldComponentUpdate() {
        let { width, height, url } = this.props;
        return (this.state.width != width && this.state.height != height) || this.state.url != url;
    }

    componentWillUpdate() {
        let { url, width, height } = this.props;

        this.setState({ url, width, height });
        this.setImage();
    }

    render() {
        let { width, height } = this.state;

        return (
            <div className={styles.webView}>
                <div className={styles.cover}></div>
                <canvas ref="canvas" width={width} height={height}></canvas>
            </div>
        );
    }
}