import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import { Icon } from 'react-native-elements';

import TagListScreen from 'app/src/screens/TagListScreen';
import TagSubscriberScreen from 'app/src/screens/TagSubscriberScreen';
import TagPageListScreen from 'app/src/screens/TagPageListScreen';
import WebViewPageScreen from 'app/src/screens/WebViewPageScreen';
import KeywordListScreen from 'app/src/screens/KeywordListScreen';
import KeywordFormScreen from 'app/src/screens/KeywordFormScreen';

const TagNavigation = createStackNavigator(
  {
    TagList: {
      screen: TagListScreen,
    },
    TagPageList: {
      screen: TagPageListScreen,
    },
    TagSubscriber: {
      screen: TagSubscriberScreen,
    },
    WebViewPage: {
      screen: WebViewPageScreen,
    },
  },
);

const KeywordNavigation = createStackNavigator(
  {
    KeywordList: {
      screen: KeywordListScreen,
    },
    KeywordForm: {
      screen: KeywordFormScreen,
    },
    WebViewPage: {
      screen: WebViewPageScreen,
    },
  },
);

const RootNavigator = createBottomTabNavigator({
  TagNavigation: {
    screen: TagNavigation,
    navigationOptions: {
      title: 'Tag',
      tabBarLabel: 'タグ',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="label" />
      ),
    },
  },
  KeywordNavigation: {
    screen: KeywordNavigation,
    navigationOptions: {
      title: 'Keyword',
      tabBarLabel: 'キーワード',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="room" />
      ),
    },
  },
});


export default createAppContainer(RootNavigator);
