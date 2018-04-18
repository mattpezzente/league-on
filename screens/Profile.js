import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import style from '../styles/main.js'
import playerData from '../json/players.json'

import RankImage from '../components/RankImage.js'
import RoleImage from '../components/RoleImage.js'
import ActionBarProfile from '../components/ActionBarProfile.js'

import playerIcon from '../assets/player-icon.png'

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
      <View>
        <ActionBarProfile />
        <View style={style.container}>
          
          <View style={[style.profileSection, style.flexCenter]}>
            <ImageBackground source={playerIcon} style={{width: 100, height: 100}}>
              <View style={style.profileRankImage}>
                <RankImage rank={this.player.rank} division={this.player.division} />
              </View>
            </ImageBackground>
            <View>
              <Text style={style.profileTextName}>{this.player.name}</Text>
              <View style={style.flexCenter}>
                <RoleImage role={this.player.roles[0]} />
                <Text style={style.profileRoleText}>{this.player.roles[0]}</Text>
              </View>
            <TouchableHighlight style={style.opggButton}>
              <Text style={[style.textMD, {textAlign: 'center'}]}>OP.GG</Text>
            </TouchableHighlight>
            </View>
          </View>

          <View style={[style.profileSection, style.flexCenter]}>
            <Text style={style.textMD}>{this.player.about}</Text>
          </View>
        </View>
      </View>
    );
  }
}