import { connect } from 'react-redux';
import { HeatMapComponent } from './HeatMapComponent';
import { generateHeatmap, setToInactive } from '../../actions/heatmapActions';

function mapStateToProps(state) {
    let { heatmap, webView } = state;

    return { 
        data: heatmap.data,
        active: heatmap.active,
        session: heatmap.session,
        height: webView.height,
        width: webView.width
    };
}

function mapDispatchToState(dispatch) {
    return {
        onGenerateHeatmap: (config, session) => {
            dispatch(generateHeatmap(config, session));
            dispatch(setToInactive);
        }
    }
}

export const HeatMap = connect(
    mapStateToProps,
    mapDispatchToState
)( HeatMapComponent );