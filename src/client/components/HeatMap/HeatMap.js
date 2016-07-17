import { connect } from 'react-redux';
import { HeatMapComponent } from './HeatMapComponent';
import { setConfig } from '../../actions/heatmapActions';

function mapStateToProps(state) {
    let { heatmap, webView } = state;

    return {
        height: webView.height,
        width: webView.width
    };
}

function mapDispatchToState(dispatch) {
    return {
        onSetupConfig: config => {
            dispatch(setConfig(config));
        }
    }
}

export const HeatMap = connect(
    mapStateToProps,
    mapDispatchToState
)( HeatMapComponent );