import 'react-native-gesture-handler';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../../Authentication/Login';
import Signup from '../../Authentication/Signup';

const switchNavigator = createSwitchNavigator(
    {
      // Add,
      Signup,
      Login,
    },
    {
      initialRouteName: 'Signup',
    },
  );
  
  export default createAppContainer(switchNavigator);
  