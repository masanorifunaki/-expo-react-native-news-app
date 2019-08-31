import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Threads from 'app/src/components/Threads';

class Main extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '新着記事記事',
    headerRight: <TouchableOpacity style={{ paddingRight: 8 }} onPress={() => { navigation.navigate('Archive'); }}><Image source={require('app/assets/images/cat.png')} style={{ height: 25, width: 25 }} /></TouchableOpacity>,
  });

  render() {
    return <Threads />;
  }
}

export default Main;
