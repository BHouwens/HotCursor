import { connect } from 'react-redux';

import { fetchSessionData } from '../actions/greeter';
import { Greeting } from '../components/Greeting/Greeting';

function mapStateToProps(state) {
    let { sessionSelection } = state;
    return { selection: sessionSelection.defaultSelection };
}

function mapDispatchToState(dispatch) {
    return {
        onStartHeatmap: (selection) => {
            dispatch(fetchSessionData(selection));
        }
    }
}

export const Greeter = connect(
    mapStateToProps,
    mapDispatchToState
)( Greeting );