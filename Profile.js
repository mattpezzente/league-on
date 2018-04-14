import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import style from './styles/main.js'

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Player Profile',
    headerBackTitleStyle: {color: '#fff'}
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <Text style={style.textMD}>Profile Page</Text>
        <Text style={style.textMD}>{this.props.navigation.state.params.name}</Text>
      </View>       
    );
  }
}

// this.props.navigation.state.params.name