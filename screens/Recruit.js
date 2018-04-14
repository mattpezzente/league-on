import React from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import style from '../styles/main.js'
import playerData from '../json/players.json'

import PlayerBar from '../components/PlayerBar.js'

export default class Recruit extends React.Component {
  static navigationOptions = {
    title: 'Recruit',
    headerLeft: (
      <Image 
        source={require('../assets/logo.png')} 
        style={{marginLeft: 10}}
      />
    )
  }

  constructor(props) {
    super()
    this.players = ''
  }

  componentWillMount() {
    this.players = playerData.players.map((player, i) => {
      return(
        <PlayerBar key={i} navigation={this.props.navigation} id={i} name={player.name} rank={player.rank} division={player.division} roles={player.roles}/>
      )
    })
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={style.container}>
        {this.players}
      </ScrollView>
    );
  }
}

