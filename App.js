import React, {
  useState, useEffect,
} from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';

import { FETCH_THREADS } from 'app/src/actions';
import AppContext from 'app/src/contexts/AppContext';
import reducer from 'app/src/reducers';

import Spring from 'app/src/components/Spring';
import Threads from 'app/src/components/Threads';

// eslint-disable-next-line no-underscore-dangle
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, enhancer);

const App = () => {
  const [isLoading, setLoading] = useState(true);

  const fetchThreads = async () => {
    const data = await fetch('https://www.reddit.com/r/newsokur/hot.json');
    const jsonData = await data.json();

    await store.dispatch({
      type: FETCH_THREADS,
      threads: jsonData.data.children.map((j) => {
        // eslint-disable-next-line no-param-reassign
        j.key = `${j.data.url}${Math.random() * 10}`;
        return j;
      }),
    });
  };

  useEffect(() => {
    fetchThreads().then(() => setLoading(false));
    return () => false;
  }, []);

  return (
    <View
      style={{
        flex: 1, justifyContent: 'center', alignItems: 'center',
      }}
    >
      {isLoading && store.getState().threads.length === 0
        ? <Spring />
        : (
          <AppContext.Provider value={{ store }}>
            <Threads />
          </AppContext.Provider>
        )}
    </View>
  );
};

export default App;
