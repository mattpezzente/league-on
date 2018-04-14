import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/main.js'

export default class NavHeader extends React.Component {
  render() {
    return (
      <View>
        <StackNavigator />
      </View>
    );
  }
}

