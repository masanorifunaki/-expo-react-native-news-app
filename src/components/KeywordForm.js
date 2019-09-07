import React, { useState, useContext } from 'react';
import { AsyncStorage, View } from 'react-native';
import {
  Button,
  Input,
} from 'react-native-elements';

import AppContext from 'app/src/contexts/AppContext';
import { SAVE_KEYWORDS } from 'app/src/actions';

const KeywordForm = () => {
  const { dispatch } = useContext(AppContext);
  const [keyword, setKeyword] = useState('');

  const registerKeyword = async () => {
    try {
      const Keywords = await AsyncStorage.getItem('Keywords', null);
      let keywords = JSON.parse(Keywords);
      const oldLength = keywords.length;

      if (typeof keywords === 'object' && keywords.length >= 0 && keyword) {
        keywords = keywords.concat(keyword);
        keywords = [...new Map(keywords.map((k) => [k, k])).values()];
        const newLength = keywords.length;
        await AsyncStorage.setItem('Keywords', JSON.stringify(keywords), null);

        if (oldLength !== newLength) {
          await dispatch({
            type: SAVE_KEYWORDS,
            savedKeywords: keywords,
          });
        }
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
