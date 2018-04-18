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

  constructor(props) {
    super()
    this.state = {
      player: {
        "id": 0,
        "name": "",
        "rank": "",
        "division": 0,
        "icon": 0,
        "roles": [
          ""
        ],
        "about": "",
        "timePlayed": {
          "time": "",
          "type": ""
        },
        "playstyle": "",
        "teamExperience": ""
      }
    }
  }

  componentWillMount() {
    // this.state.player = playerData.players[this.props.navigation.state.params.id]
  }

  render() {
    return (
      <View>
        <ActionBarProfile />
        <View style={style.container}>
          
          <View style={[style.profileSection, style.flexCenter]}>
            <ImageBackground source={playerIcon} style={{width: 100, height: 100}}>
              <View style={style.profileRankImage}>
                <RankImage rank={this.state.player.rank} division={this.state.player.division} />
              </View>
            </ImageBackground>
            <View>
              <Text style={style.profileTextName}>{this.state.player.name}</Text>
              <View style={style.flexCenter}>
                <RoleImage role={this.state.player.roles[0]} />
                <Text style={style.profileRoleText}>{this.state.player.roles[0]}</Text>
              </View>
            <TouchableHighlight style={style.opggButton}>
              <Text style={[style.textMD, style.opggButtonText]}>OP.GG</Text>
            </TouchableHighlight>
            </View>
          </View>
          <View style={[style.profileSection, style.flexCenter]}>
            <Text style={style.textMD}>{this.state.player.about}</Text>
          </View>
        </View>
      </View>
    );
  }
}