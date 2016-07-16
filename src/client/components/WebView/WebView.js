import { connect } from 'react-redux';
import { WebViewComponent } from './WebViewComponent';

function mapStateToProps(state) {
    let { webView } = state;

    return {
        height: webView.height,
        width: webView.width,
        url: webView.url
    }
}

export const WebView = connect(
    mapStateToProps
)( WebViewComponent );