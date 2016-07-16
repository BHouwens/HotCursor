import { connect } from 'react-redux';
import { GreeterComponent } from './GreeterComponent';
import { resetProject } from '../../actions/greeterActions';
import { resetSessions } from '../../actions/sessionSelectionActions';

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