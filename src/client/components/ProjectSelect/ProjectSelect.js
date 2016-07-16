import { connect } from 'react-redux';
import { fetchSessions } from '../actions/sessionSelection';
import { ProjectSelectComponent } from './ProjectSelectComponent';

function mapStateToProps(state) {
    let { projectSelection } = state;

    return { 
        projects: projectSelection.allProjects, 
        loading: projectSelection.loading,
        defaultValue: projectSelection.defaultValue
    };
}

function mapDispatchToState(dispatch) {
    return {
        onProjectSelect: (project) => {
            dispatch(fetchSessions(project));
        }
    }
}

export const ProjectSelect = connect(
    mapStateToProps,
    mapDispatchToState
)( ProjectSelectComponent );