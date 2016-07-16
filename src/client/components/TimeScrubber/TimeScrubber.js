import { connect } from 'react-redux';
import { TimeScrubberComponent } from './TimeScrubberComponent';

function mapStateToProps(state) {
    let { timeScrubber } = state;
    return { data: timeScrubber.data };
}

export const TimeScrubber = connect(
    mapStateToProps
)( TimeScrubberComponent );