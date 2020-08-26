import 'react-native-gesture-handler';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import AuthorizedStack from '../Navigations/AuthorizedStack';
import UnAuthorizedStack from '../Navigations/UnAuthorizedStack';

const switchNavigator = createSwitchNavigator(
  {
    // Add,
    UnAuthorizedStack,
    //AuthorizedStack,
    // AuthLoader,
  },
  {
    initialRouteName: 'UnAuthorizedStack',
   
  },
);

export default createAppContainer(switchNavigator);
