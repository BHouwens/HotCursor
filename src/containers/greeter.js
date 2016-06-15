import { connect } from 'react-redux';

import { setWebView } from '../actions/webView';
import { fetchSessionData } from '../actions/greeter';
import { Greeting } from '../components/Greeting/Greeting';

function mapStateToProps(state) {
    let { sessionSelection } = state;
    return { selection: sessionSelection.defaultSelection };
}

function mapDispatchToState(dispatch) {
    return {
        onHide: () => {
            dispatch(fetchSessionData());
        }
    }
}

export const Greeter = connect(
    mapStateToProps,
    mapDispatchToState
)( Greeting );