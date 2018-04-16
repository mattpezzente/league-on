import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/main.js'
import playerData from '../json/players.json'

import RankImage from '../components/RankImage.js'
import ActionBar from '../components/ActionBar.js'

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Player Profile',
    headerBackTitleStyle: {color: '#fff'}
  }

  componentWillMount() {
    this.player = playerData.players[this.props.navigation.state.params.id]
  }


  render() {
    return (
      <View style={style.container}>
        <ActionBar />
        <RankImage rank={this.player.rank} division={this.player.division}/>
        <Text style={style.textMD}>{this.player.name}</Text>
        <Text style={style.textMD}>{this.player.id}</Text>
        <Text style={style.textMD}>{this.player.about}</Text>
      </View>       
    );
  }
}