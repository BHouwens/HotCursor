import { connect } from 'react-redux';
import { selectProject } from '../actions/projectSelectionActions';
import { ProjectSelect } from '../components/ProjectSelect/ProjectSelect';

function mapStateToProps(state) {
    let { projectSelectionReducer } = state;
    return { projects: projectSelectionReducer.allProjects };
}

function mapDispatchToProps(dispatch) {
    return {
        onProjectSelect: (project) => {
            dispatch(selectProject(project));
        },

        onProjectFetch: () => {
            dispatch(fetchProjects());
        }
    }
}

export const ProjectSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)( ProjectSelect );