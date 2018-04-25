import React from 'react';
import { Button, Text, View, Image, TouchableHighlight } from 'react-native';
import style from '../styles/main.js'
// Custom JS Functions
import { normalizeText } from '../js/tools.js'
// Components
import RankImage from './RankImage.js'
import RoleImage from './RoleImage.js'

export default class PlayerBar extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableHighlight title='Hello' style={style.playerBarWrapper} onPress={() => navigate('Profile', { id: this.props.id })}>
          <View style={style.playerBarContainer}>
            <RankImage rank={this.props.rank} division={this.props.division}/>
            <Text style={style.playerBarName}>{this.props.name}</Text>
            <RoleImage role={this.props.roles[0]} />
            <Text style={style.playerBarRole}>{normalizeText(this.props.roles[0])}</Text>
            <Text style={style.playerBarArrow}>></Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

