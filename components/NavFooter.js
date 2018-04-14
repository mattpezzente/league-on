import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import style from '../styles/main.js'

export default class NavFooter extends React.Component {
  render() {
    return (
      <View>
        <TabNavigator />
      </View>
    );
  }
}

