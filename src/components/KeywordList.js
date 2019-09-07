import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import {
  FlatList,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import AppContext from 'app/src/contexts/AppContext';

const KeywordList = ({ navigation }) => {
  const { state } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  const loadKeywords = useCallback(async () => {
    try {
      const Keywords = await AsyncStorage.getItem('Keywords', null);
      const savedKeywords = JSON.parse(Keywords);
      if (typeof savedKeywords === 'object' && savedKeywords.length >= 0) {
        state.savedKeywords = savedKeywords;
      }
    } catch (e) {
      console.error(e);
    }
  }, [state.savedKeywords]);

  useEffect(() => {
    const callback = async () => {
      await loadKeywords();
      await setLoading(false);
    };
    callback();
  }, [loadKeywords]);

  if (isLoading && state.savedKeywords.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={state.savedKeywords}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => navigation.navigate('KeywordPageList', { keyword: item })}
          key={item}
          title={item}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default KeywordList;
