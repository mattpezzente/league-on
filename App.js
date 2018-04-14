import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';

import Recruit from './Recruit';
import Profile from './Profile';

const App = StackNavigator(
  {
    Recruit: { screen: Recruit },
    Profile: { screen: Profile },
  }, 
  {
    navigationOptions: {
      headerStyle: { backgroundColor: '#2662B2' },
      headerTitleStyle: { color: '#fff' },
    }
  }
);

export default App