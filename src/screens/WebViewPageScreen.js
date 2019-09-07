import React from 'react';
import { WebView } from 'react-native';

class WebViewPageScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({ title: navigation.state.params.title });

  render() {
    const { navigation } = this.props;
    const { url } = navigation.state.params;
    return (
      <WebView source={{ uri: url }} />
    );
  }
}

export default WebViewPageScreen;
