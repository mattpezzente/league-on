import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, NavigatorIOS } from 'react-native';

import Recruit from './Recruit';
import Profile from './Profile';

const App = StackNavigator({
  Recruit: { screen: Recruit },
  Profile: { screen: Profile },
});

export default App