import { connect } from 'react-redux';
import { HeatMapComponent } from './HeatMapComponent';
import { addData } from '../../actions/heatmapActions';

function mapStateToProps(state) {
    let { heatmap } = state;
    return { data: heatmap.data };
}

function mapDispatchToState(dispatch) {

}

export const HeatMap = connect(
    mapStateToProps,
    mapDispatchToState
)( HeatMapComponent );