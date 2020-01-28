import { createAppContainer,} from  'react-navigation';
import{createStackNavigator}from'react-navigation-stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';

const screens = createStackNavigator({
  Login, 
  Welcome, 
  }, {
    defaultNavigationOptions: {
        headerShown: true,
      },
  });

export default createAppContainer(screens);