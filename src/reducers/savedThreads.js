import { FETCH_SAVED_THREADS } from 'app/src/actions';

const savedThreads = (state = [], action) => {
  switch (action.type) {
    case FETCH_SAVED_THREADS:
      return action.savedThreads;
    default:
      return state;
  }
};

export default savedThreads;
