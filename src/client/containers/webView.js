import { connect } from 'react-redux';
import { WebView } from '../components/WebView/WebView';

function mapStateToProps(state) {
    let { webView } = state;

    return {
        height: webView.height,
        width: webView.width,
        url: webView.url
    }
}

export const WebViewer = connect(
    mapStateToProps
)( WebView );