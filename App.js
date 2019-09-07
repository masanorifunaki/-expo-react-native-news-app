import React, {
  useReducer,
} from 'react';

import AppContext from 'app/src/contexts/AppContext';
import reducer from 'app/src/reducers';
import RootNavigator from 'app/src/navigation/RootNavigator';

const App = () => {
  const initialSate = {
    savedTags: [],
    savedKeywords: [],
  };

  const [state, dispatch] = useReducer(reducer, initialSate);

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
    }}
    >
      <RootNavigator />
    </AppContext.Provider>
  );
};

export default App;
