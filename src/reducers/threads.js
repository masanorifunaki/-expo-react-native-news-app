import { FETCH_THREADS } from 'app/src/actions';

const threads = (state = [], action) => {
  switch (action.type) {
    case FETCH_THREADS:
      return action.threads;
    default:
      return state;
  }
};

export default threads;
