import { combineReducers } from 'redux';
import { projectSelection } from './projectSelection';
import { sessionSelection } from './sessionSelection';
import { webView } from './webView';
import { greeter } from './greeter';

export const rootReducer = combineReducers({
   projectSelection,
   sessionSelection,
   webView,
   greeter
});