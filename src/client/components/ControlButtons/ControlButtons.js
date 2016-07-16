import { connect } from 'react-redux';
import { ControlButtonsComponent } from './ControlButtonsComponent';

function mapDispatchToState(dispatch) {
    return { 
        onRunningStateChange: (active) => {
            console.log(active);
        }
    };
}

export const ControlButtons = connect(
    null,
    mapDispatchToState
)( ControlButtonsComponent );