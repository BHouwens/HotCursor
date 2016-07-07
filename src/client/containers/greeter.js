import { connect } from 'react-redux';
import { GreeterComponent } from '../components/Greeter/Greeter';
import { resetProject } from '../actions/greeter';
import { resetSessions } from '../actions/sessionSelection';

function mapStateToProps(state) {
    let { greeter } = state;
    return { secondaryClass: greeter.secondaryClass };
}

function mapDispatchToState(dispatch) {
    return {
        onChooseProject: () => {
            dispatch(resetProject());
            dispatch(resetSessions());
        }
    }
}

export const Greeter = connect(
    mapStateToProps,
    mapDispatchToState
)( GreeterComponent );