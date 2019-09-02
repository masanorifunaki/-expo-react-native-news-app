import React from 'react';
import { Icon } from 'react-native-elements';

import TagList from 'app/src/components/TagList';

class TagListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Icon
        color="#000"
        name="add"
        iconStyle={{ marginRight: 16 }}
        onPress={() => { navigation.navigate('TagSubscriber'); }}
      />
    ),
  });

  render() {
    return <TagList />;
  }
}

export default TagListScreen;
