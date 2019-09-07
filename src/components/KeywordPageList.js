import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { QIITA_ACSESS_TOKNE } from 'react-native-dotenv';

import Article from 'app/src/elements/Article';

const API_ENDPOINT = 'https://qiita.com/api/v2/items';

const KeywordPageList = ({ navigation }) => {
  const [keyword] = useState(navigation.getParam('keyword'));
  const [articles, setArticles] = useState([]);

  const fetchArticles = async (page, query) => {
    try {
      const options = { headers: { Authorization: `Bearer ${QIITA_ACSESS_TOKNE}` } };
      const response = await fetch(`${API_ENDPOINT}?page=${page}&per_page=20&query=${query}`, options);
      const responseJson = await response.json();
      if (typeof responseJson === 'object' && responseJson.length >= 0) {
        setArticles(responseJson);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  useEffect(() => {
    fetchArticles(1, keyword);
  }, [keyword]);

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => (
        <Article item={item} navigation={navigation} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default KeywordPageList;
