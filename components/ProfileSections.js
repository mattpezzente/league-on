import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/main.js'
import playerData from '../json/players.json'

export default class Profile extends React.Component {
  componentWillMount() {
    this.player = playerData.players[this.props.navigation.state.params.id]
  }

  render() {
    return (
      <View style={style.container}>
        <ActionBarProfile />
        <RankImage rank={this.player.rank} division={this.player.division}/>
        <View style={[style.profileSection, style.flexCenter]}>
          <Text style={style.profilePlayerName}>{this.player.name}</Text>
          <Text style={style.textMD}>{this.player.id}</Text>
          <Text style={style.textMD}>{this.player.about}</Text>
        </View>
      </View>       
    );
  }
}