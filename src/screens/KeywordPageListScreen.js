import React from 'react';
import KeywordPageList from 'app/src/components/KeywordPageList';

class KeywordPageListScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return <KeywordPageList navigation={navigation} />;
  }
}

export default KeywordPageListScreen;
