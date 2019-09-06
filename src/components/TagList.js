import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { FlatList, AsyncStorage, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';

import AppContext from 'app/src/contexts/AppContext';

const TagList = ({ navigation }) => {
  const { state } = useContext(AppContext);
  const [isLoading, setLoading] = useState(true);

  const loadTags = useCallback(async () => {
    try {
      const Tags = await AsyncStorage.getItem('Tags', null);
      const savedTags = JSON.parse(Tags);

      if (Object.keys(savedTags).length === 0) {
        state.savedTags = [];
      }
      if (typeof savedTags === 'object' && savedTags.length > 0) {
        state.savedTags = savedTags;
      }
    } catch (e) {
      console.error(e);
    }
  }, [state.savedTags]);

  useEffect(() => {
    const callback = async () => {
      await loadTags();
      await setLoading(false);
    };
    callback();
  }, [loadTags]);

  if (isLoading && state.savedTags === 0) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={state.savedTags}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => navigation.navigate('TagPageList', { tag: item.id })}
          key={item.id}
          title={item.id}
          leftAvatar={{ source: { uri: item.icon_url } }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TagList;
