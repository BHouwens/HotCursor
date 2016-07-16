import { combineReducers } from 'redux';
import { projectSelection } from './projectSelection';
import { sessionSelection } from './sessionSelection';
import { webView } from './webView';
import { greeter } from './greeter';
import { clock } from './clock';

export const rootReducer = combineReducers({
   projectSelection,
   sessionSelection,
   webView,
   greeter,
   clock
});