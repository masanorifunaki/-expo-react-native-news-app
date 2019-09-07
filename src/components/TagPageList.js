import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { QIITA_ACSESS_TOKNE } from 'react-native-dotenv';

const API_ENDPOINT = 'https://qiita.com/api/v2/items';

const TagPageList = ({ navigation }) => {
  const [tag] = useState(navigation.getParam('tag'));
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (page, tag) => {
    try {
      const options = { headers: { Authorization: `Bearer ${QIITA_ACSESS_TOKNE}` } };
      const response = await fetch(`${API_ENDPOINT}?page=${page}&per_page=20&query=tag:${tag}`, options);
      const responseJson = await response.json();
      if (typeof responseJson === 'object' && responseJson.length >= 0) {
        setArticles(responseJson);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    fetchArticles(1, tag);
  }, [tag]);

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => (
        <ListItem
          onPress={() => { navigation.navigate('WebViewPage', { url: item.url, title: item.title }); }}
          key={item.id}
          title={item.title}
          leftAvatar={{ source: { uri: item.user.profile_image_url } }}
          subtitle={item.user.name}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TagPageList;
