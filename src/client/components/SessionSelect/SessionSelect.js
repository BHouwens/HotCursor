import { connect } from 'react-redux';
import { fetchSessionData } from '../../actions/sessionSelectionActions';
import { SessionSelectComponent } from './SessionSelectComponent';

function mapStateToProps(state) {
    let { sessionSelection } = state;

    return { 
        sessions: sessionSelection.sessions, 
        loading: sessionSelection.loading,
        defaultSelection: sessionSelection.defaultSelection
    };
}

function mapDispatchToState(dispatch) {
    return {
        onSessionSelect: (session) => {
            dispatch(fetchSessionData(session));
        }
    }
}

export const SessionSelect = connect(
    mapStateToProps,
    mapDispatchToState
)( SessionSelectComponent );