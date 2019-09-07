import React from 'react';
import { View, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import moment from 'moment';

const Article = ({ item, navigation }) => (
  <ListItem
    onPress={() => { navigation.navigate('WebViewPage', { url: item.url, title: item.title }); }}
    key={item.id}
    title={item.title}
    leftAvatar={{ source: { uri: item.user.profile_image_url } }}
    subtitle={(
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 5,
        }}
      >
        <Text
          style={{
            color: '#ababab',
            fontSize: 12,
            paddingRight: 6,
            paddingLeft: 6,
          }}
        >
          {`by ${item.user.id}`}
        </Text>
        <Icon name="favorite" color="#ababab" size={10} />
        <Text
          style={{
            color: '#ababab',
            fontSize: 12,
            paddingRight: 6,
            paddingLeft: 6,
          }}
        >
          {item.likes_count}
        </Text>
        <Icon name="comment" color="#ababab" size={10} />
        <Text
          style={{
            color: '#ababab',
            fontSize: 12,
            paddingRight: 6,
            paddingLeft: 6,
          }}
        >
          {item.comments_count}
        </Text>
        <Text
          style={{
            color: '#ababab',
            fontSize: 12,
            paddingRight: 6,
            paddingLeft: 6,
          }}
        >
          { moment(item.created_at).format('YYYY/MM/DD')}
        </Text>
      </View>
)}
  />
);

export default Article;
