import React, { useEffect, useReducer, useState } from 'react';
import { View } from 'react-native';

import { FETCH_THREADS } from 'app/src/actions';
import AppContext from 'app/src/contexts/AppContext';
import reducer from 'app/src/reducers';

import Spring  from 'app/src/components/Spring';
import Threads from 'app/src/components/Threads';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const initialState = {
    threads: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchThreads = async () => {
    const data = await fetch('https://www.reddit.com/r/newsokur/hot.json');
    const jsonData = await data.json();

    await dispatch({
      type: FETCH_THREADS,
      threads: jsonData.data.children.map((j) => {
        // eslint-disable-next-line no-param-reassign
        j.key = `${j.data.url}${Math.random() * 10}`;
        return j;
      }),
    });
  };

  useEffect(() => {
    const promise = async () => {
      console.log('AppComponents!!!!');
      await fetchThreads();
      await setLoading(false);
    };
    promise();
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Spring />
      </View>
    );
  }

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
    }}
    >
      <Threads />
    </AppContext.Provider>
  );
};

export default App;
