import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from 'app/src/navigations/Main';
import Archive from 'app/src/components/Archive';

const AppNavigation = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Archive: {
      screen: Archive,
      navigationOptions: () => ({
        title: 'ストックした記事',
      }),
    },
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerTintColor: 'white',
      headerBackTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: '#00aced' },
    },
  },
);

export default createAppContainer(AppNavigation);
