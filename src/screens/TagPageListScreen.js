import React from 'react';
import TagPageList from 'app/src/components/TagPageList';

class TagPageListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({ title: `タグ: ${navigation.state.params.tag} の新着記事` });

  render() {
    const { navigation } = this.props;
    return <TagPageList navigation={navigation} />;
  }
}

export default TagPageListScreen;
