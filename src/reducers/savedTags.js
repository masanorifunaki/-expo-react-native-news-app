import { SAVE_TAGS } from 'app/src/actions';

const savedTags = (state = [], action) => {
  switch (action.type) {
    case SAVE_TAGS:
      return action.savedTags;
    default:
      return state;
  }
};

export default savedTags;
