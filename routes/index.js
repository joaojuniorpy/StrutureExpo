import { createAppContainer,} from  'react-navigation';
import{createStackNavigator}from'react-navigation-stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Map from '../pages/Map';
import Settings from '../pages/Settings';

const screens = createStackNavigator({
  Login, 
  Welcome, 
  Map,
  Settings,
  }, {
    defaultNavigationOptions: {
        headerShown: true,
      },
  });

export default createAppContainer(screens);