const initialState = {
    loading: false,
    currentProject: '',
    allProjects: [' ']
};

export function projectSelection(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_PROJECTS':
            return Object.assign({}, state, { loading: true });

        case 'GOT_PROJECTS':
            return Object.assign({}, state, {
                loading: false,
                currentProject: action.projects[0],
                allProjects: action.projects
            });

        default:
            return state;
    }
}