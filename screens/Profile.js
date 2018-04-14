import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/main.js'


import playerData from '../json/players.json'


export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Player Profile',
    headerBackTitleStyle: {color: '#fff'}
  }

  componentWillMount() {
    this.player = playerData.players[this.props.navigation.state.params.id]
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <Text style={style.textMD}>{this.player.name}</Text>
        <Text style={style.textMD}>{this.player.id}</Text>
      </View>       
    );
  }
}