import React, {
  useContext, useEffect, useState,
} from 'react';
import {
  View, AsyncStorage, FlatList, ActivityIndicator,
} from 'react-native';

import AppContext from 'app/src/contexts/AppContext';
import { FETCH_SAVED_THREADS } from 'app/src/actions';

import Thread from 'app/src/components/Thread';

const Archive = () => {
  const navigationOptions = {
    title: 'ストックした記事',
    headerTintColor: 'white',
    headerBackTitleStyle: { color: 'white' },
    headerStyle: { backgroundColor: '#00aced' },
  };

  const { store } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  const fetchSavedThreads = async () => {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiGet(keys, async (err, data) => {
      const savedThreads = await data.map((i) => JSON.parse(i[1]));
      await store.dispatch({
        type: FETCH_SAVED_THREADS,
        savedThreads,
      });
    });
  };

  useEffect(() => {
    fetchSavedThreads().then(() => setLoading(false));
    return () => false;
  });

  return (
    <View
      style={{
        flex: 1, justifyContent: 'center', alignItems: 'center',
      }}
    >
      {isLoading && store.getState().savedThreads.length === 0
        ? <ActivityIndicator />
        : (
          <FlatList
            data={store.getState().savedThreads}
            renderItem={({ item }) => (
              <Thread thread={item} />
            )}
          />
        )}
    </View>
  );
};

export default Archive;
