import React from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';

import Join from './Join';
import Recruit from './Recruit';
import Manage from './Manage';
import Profile from './Profile';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Join,
          title: 'Recruit',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}