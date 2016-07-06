import { connect } from 'react-redux';
import { selectSession, fetchSessionData } from '../actions/sessionSelection';
import { SessionSelect } from '../components/SessionSelect/SessionSelect';

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
            dispatch(selectSession(session));
            dispatch(fetchSessionData(session));
        },

        fetchSessions: () => {
            dispatch(fetchSessions());
        }
    }
}

export const SessionSelector = connect(
    mapStateToProps,
    mapDispatchToState
)( SessionSelect );