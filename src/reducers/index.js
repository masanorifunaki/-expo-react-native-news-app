import { combineReducers } from 'redux';

import savedTags from 'app/src/reducers/savedTags';
import savedKeywords from 'app/src/reducers/savedKeywords';

export default combineReducers({
  savedTags,
  savedKeywords,
});
