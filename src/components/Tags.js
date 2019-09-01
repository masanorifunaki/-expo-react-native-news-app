import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

const Tags = () => {
  const [tags, setTags] = useState([]);

  return (
    <FlatList
      data={tags}
      renderItem={({ item }) => (
        <ListItem
          key={item.id}
          title={item.id}
          roundAvatar
          avatar={item.icon_url}
        />
      )}
    />
  );
};

export default Tags;
