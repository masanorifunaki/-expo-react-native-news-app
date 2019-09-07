import { SAVE_KEYWORDS } from 'app/src/actions';

const savedKeywords = (state = [], action) => {
  switch (action.type) {
    case SAVE_KEYWORDS:
      return action.savedKeywords;
    default:
      return state;
  }
};

export default savedKeywords;
