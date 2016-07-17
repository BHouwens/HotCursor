import { connect } from 'react-redux';
import { fetchSessionData } from '../../actions/sessionSelectionActions';
import { SessionSelectComponent } from './SessionSelectComponent';

function mapStateToProps(state) {
    let { sessionSelection, heatmap } = state;

    return { 
        sessions: sessionSelection.sessions, 
        loading: sessionSelection.loading,
        config: heatmap.config,
        defaultSelection: sessionSelection.defaultSelection
    };
}

function mapDispatchToState(dispatch) {
    return {
        onSessionSelect: (config, session) => {
            dispatch(fetchSessionData(config, session));
        }
    }
}

export const SessionSelect = connect(
    mapStateToProps,
    mapDispatchToState
)( SessionSelectComponent );