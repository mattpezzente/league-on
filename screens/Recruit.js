import React from 'react';
import { Button, Text, View, Image, ScrollView } from 'react-native';
import style from '../styles/main.js'
//Redux
import { connect } from 'react-redux'
import { loadPlayers } from '../redux/actions'
// Custom Components
import PlayerBar from '../components/PlayerBar.js'
import ActionBarRecruit from '../components/ActionBarRecruit.js'

class Recruit extends React.Component {
  static navigationOptions = {
    title: 'Recruit',
    headerLeft: (
      <Image 
        source={require('../assets/logo.png')} 
        style={{marginLeft: 10}}
      />
    )
  }

  componentDidMount() {
    this.props.dispatch(loadPlayers())
  }
  
  render() {
    const { navigate } = this.props.navigation;
    let players = ''
    if (this.props.players) {
      players = this.props.players.map((player, i) => {
        return(
          <PlayerBar key={i} navigation={this.props.navigation} id={i} name={player.name} rank={player.rank} division={player.division} roles={player.roles}/>
        )
      })
    }
    return (
      <View>
        <ActionBarRecruit />
        <View style={style.flexCenterRecruit}>
          <Text style={style.flexCenterRecruitText1}>Rank</Text>
          <Text style={style.flexCenterRecruitText2}>Name</Text>
          <Text style={style.flexCenterRecruitText3}>Role</Text>
        </View>
        <ScrollView style={style.container}>
          {players}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({ players : state.players})
}

export default connect(
  mapStateToProps,
)(Recruit)