import { connect } from 'react-redux';
import { ClockComponent } from './ClockComponent';

function mapStateToProps(state) {
    return { time: '00:00:00' };
}

export const Clock = connect(
    mapStateToProps
)( ClockComponent );