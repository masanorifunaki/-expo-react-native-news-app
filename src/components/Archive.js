import React, {
  useEffect, useState,
} from 'react';
import {
  ActivityIndicator, AsyncStorage, FlatList,
} from 'react-native';

import Thread from 'app/src/components/Thread';

const Archive = () => {
  const [savedThreads, setSavedThreads] = useState([]);

  const fetchSavedThreads = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const storageData = await AsyncStorage.multiGet(keys, null);
      const parsedData = await storageData.map((i) => JSON.parse(i[1]));
      setSavedThreads(parsedData);
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    const promise = async () => {
      console.log('ArchiveComponents!!!');
      await fetchSavedThreads();
    };
    promise();
  }, []);

  if (setSavedThreads.length === 0) {
    return (
      <ActivityIndicator />
    );
  }

  return (
    <FlatList
      data={savedThreads}
      renderItem={({ item }) => (
        <Thread thread={item} />
      )}
    />
  );
};

export default Archive;
