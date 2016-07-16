import { connect } from 'react-redux';
import { ClockComponent } from './ClockComponent';

function mapStateToProps(state) {
    let { clock } = state;
    return { time: clock.time };
}

export const Clock = connect(
    mapStateToProps
)( ClockComponent );