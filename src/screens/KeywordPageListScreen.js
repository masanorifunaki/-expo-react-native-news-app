import React from 'react';
import KeywordPageList from 'app/src/components/KeywordPageList';

class KeywordPageListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({ title: `キーワード: ${navigation.state.params.keyword} の新着記事` });

  render() {
    const { navigation } = this.props;
    return <KeywordPageList navigation={navigation} />;
  }
}

export default KeywordPageListScreen;
