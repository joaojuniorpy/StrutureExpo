// import React from 'react';
import { createAppContainer,} from  'react-navigation';
import{createStackNavigator}from'react-navigation-stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Map from '../screens/Map';
import Settings from '../screens/Settings';

const screens = createStackNavigator({
  Welcome, 
  Login, 
  Map,
  Settings,
  }, {
    defaultNavigationOptions: {
        header: null,
      },
  });

export default createAppContainer(screens);