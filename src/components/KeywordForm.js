import React, { useState } from 'react';
import { AsyncStorage, View } from 'react-native';
import {
  Button,
  Input,
} from 'react-native-elements';

const KeywordForm = () => {
  const [keyword, setKeyword] = useState('');

  const registerKeyword = async () => {
    try {
      const Keywords = await AsyncStorage.getItem('Keywords', null);
      let keywords = JSON.parse(Keywords);

      if (keywords === null) {
        keywords = [];
      }

      if (typeof keywords === 'object' && keywords.length >= 0 && keyword) {
        keywords = keywords.concat(keyword);
        keywords = [...new Map(keywords.map((k) => [k, k])).values()];
        await AsyncStorage.setItem('Keywords', JSON.stringify(keywords), null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Input
        label="新しく登録するキーワード"
        value={keyword}
        onChangeText={(text) => (setKeyword(text))}
      />
      <Button onPress={registerKeyword} title="登録" />
    </View>
  );
};

export default KeywordForm;
