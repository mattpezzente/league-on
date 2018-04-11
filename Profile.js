import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'PlayerProfile',
  };

  render() {
    return (
      <View>
        <Text>Profile Page</Text>
      </View>       
    );
  }
}