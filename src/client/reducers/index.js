import { combineReducers } from 'redux';
import { projectSelection } from './projectSelection';
import { sessionSelection } from './sessionSelection';
import { timeScrubber } from './timeScrubber';
import { webView } from './webView';
import { greeter } from './greeter';
import { heatmap } from './heatmap';
import { clock } from './clock';

export const rootReducer = combineReducers({
   projectSelection,
   sessionSelection,
   timeScrubber,
   webView,
   greeter,
   heatmap,
   clock
});