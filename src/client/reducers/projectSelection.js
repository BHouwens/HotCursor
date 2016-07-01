const initialState = {
    loading: false,
    defaultValue: '- Fetching projects -',
    allProjects: []
};

export function projectSelection(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_PROJECTS':
            return Object.assign({}, state, { loading: true });

        case 'GOT_PROJECTS':
            return Object.assign({}, state, {
                loading: false,
                defaultValue: '- Select a project -',
                allProjects: action.projects
            });

        default:
            return state;
    }
}