import { combineReducers } from 'redux';
import { projectSelection } from './projectSelection';
import { sessionSelection } from './sessionSelection';

export const rootReducer = combineReducers({
   projectSelection,
   sessionSelection
});