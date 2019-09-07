import React from 'react';
import { Icon } from 'react-native-elements';

import KeywordList from 'app/src/components/KeywordList';

class KeywordListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Icon
        color="#f50"
        name="add"
        iconStyle={{ marginRight: 16 }}
        onPress={() => { navigation.navigate('KeywordForm'); }}
      />
    ),
  });

  render() {
    const { navigation } = this.props;
    return <KeywordList navigation={navigation} />;
  }
}

export default KeywordListScreen;
