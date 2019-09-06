import React from 'react';
import TagPageList from 'app/src/components/TagPageList';

class TagPageListScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <TagPageList tag={navigation.getParam('tag')} />;
  }
}

export default TagPageListScreen;
