import { connect } from 'react-redux';
import { Greeting } from '../components/Greeting/Greeting';

function mapStateToProps(state) {
    let { greeter } = state;

    return { 
        sessionData: greeter.sessionData,
        panelClass: greeter.panelClass,
        secondaryClass: greeter.secondaryClass
    };
}

export const Greeter = connect(
    mapStateToProps
)( Greeting );