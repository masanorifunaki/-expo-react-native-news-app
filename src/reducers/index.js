import { combineReducers } from 'redux';

import threads from 'app/src/reducers/threads';
import savedThreads from 'app/src/reducers/savedThreads';

export default combineReducers({
  threads,
  savedThreads,
});
