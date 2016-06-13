const initialState = {
        currentProject: '',
        allProjects: ['test', 'another test', 'yet another']
      };

export function projectSelectionReducer(state = initialState, action){
    switch(action.type) {
        case 'SELECT_PROJECT':
            if (state.allProjects.indexOf(action.project) != -1){
                return Object.assign(
                    {}, 
                    state, 
                    { currentProject: action.project }
                );
            }
        default:
            return state;
    }
}