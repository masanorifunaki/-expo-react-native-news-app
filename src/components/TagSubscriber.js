import React, {
  useState,
  useEffect,
  useContext,
} from 'react';
import { FlatList, AsyncStorage } from 'react-native';
import { ListItem } from 'react-native-elements';
import { QIITA_ACSESS_TOKNE } from 'react-native-dotenv';

import AppContext from 'app/src/contexts/AppContext';
import { SAVE_TAGS } from 'app/src/actions';

const API_ENDPOINT = 'https://qiita.com/api/v2/tags';

const TagSubscriber = () => {
  const { dispatch } = useContext(AppContext);
  const [tags, setTags] = useState([]);

  const fetchTags = async (page) => {
    const options = { headers: { Authorization: `Bearer ${QIITA_ACSESS_TOKNE}` } };
    const response = await fetch(`${API_ENDPOINT}?page=${page}&per_page=100&sort=count`, options);
    const responseJson = await response.json();

    if (typeof responseJson === 'object' && responseJson.length > 0) {
      setTags(responseJson);
    }
  };

  const updateTags = async (tag) => {
    try {
      const Tags = await AsyncStorage.getItem('Tags', null);
      let savedTags = JSON.parse(Tags);
      let oldLength = savedTags.length;

      if (Object.keys(savedTags).length === 0) {
        oldLength = 0;
        savedTags = [];
      }

      if (typeof savedTags === 'object' && savedTags.length >= 0) {
        savedTags = savedTags.concat(tag);
        savedTags = [...new Map(savedTags.map((s) => [s.id, s])).values()];
        const newLength = savedTags.length;
        await AsyncStorage.setItem('Tags', JSON.stringify(savedTags), null);

        if (oldLength !== newLength) {
          await dispatch({
            type: SAVE_TAGS,
            savedTags,
          });
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTags(1);
  }, []);

  return (
    <FlatList
      data={tags}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => { updateTags(item); }}
          key={item.id}
          title={item.id}
          leftAvatar={{ source: { uri: item.icon_url } }}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TagSubscriber;
