import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import { Icon } from 'react-native-elements';

import TagList from 'app/src/screens/TagList';

const TagNavigation = createStackNavigator(
  {
    TagList: {
      screen: TagList,
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
});


export default createAppContainer(RootNavigator);
