import React from 'react';

export class WebView extends React.Component {
    render() {
        let { height, width, url } = this.props;

        return (
            <object data={url} width={width} height={height}>
                <embed src={url} width={width} height={height}></embed>
                <p>Can't display the web page :(</p>
            </object>
        );
    }
}