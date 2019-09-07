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
import KeywordPageListScreen from 'app/src/screens/KeywordPageListScreen';

const TagNavigation = createStackNavigator(
  {
    TagList: {
      screen: TagListScreen,
      navigationOptions: {
        title: '登録済みのタグ',
      },
    },
    TagPageList: {
      screen: TagPageListScreen,
    },
    TagSubscriber: {
      screen: TagSubscriberScreen,
      navigationOptions: {
        title: '新しいタグを登録',
      },
    },
    WebViewPage: {
      screen: WebViewPageScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#55c401',
        color: '#fff',
      },
    },
  },
);

const KeywordNavigation = createStackNavigator(
  {
    KeywordList: {
      screen: KeywordListScreen,
      navigationOptions: {
        title: '登録済みのキーワード',
      },
    },
    KeywordPageList: {
      screen: KeywordPageListScreen,
    },
    KeywordForm: {
      screen: KeywordFormScreen,
      navigationOptions: {
        title: '新しいキーワードを登録',
      },
    },
    WebViewPage: {
      screen: WebViewPageScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#55c401',
        color: '#fff',
      },
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
