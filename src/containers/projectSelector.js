import { connect } from 'react-redux';
import { fetchSessions } from '../actions/sessionSelection';
import { ProjectSelect } from '../components/ProjectSelect/ProjectSelect';

function mapStateToProps(state) {
    let { projectSelection } = state;

    return { 
        projects: projectSelection.allProjects, 
        loading: projectSelection.loading
    };
}

function mapDispatchToState(dispatch) {
    return {
        onProjectSelect: (project) => {
            dispatch(fetchSessions(project));
        }
    }
}

export const ProjectSelector = connect(
    mapStateToProps,
    mapDispatchToState
)( ProjectSelect );