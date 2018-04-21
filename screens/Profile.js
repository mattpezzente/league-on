import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import style from '../styles/main.js'
// Redux
import { connect } from 'react-redux'
import { loadPlayer } from '../redux/actions'
//Components
import RankImage from '../components/RankImage.js'
import RoleImage from '../components/RoleImage.js'
import ActionBarProfile from '../components/ActionBarProfile.js'
// Images
import playerIcon from '../assets/player-icon.png'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Player Profile',
    headerBackTitleStyle: {color: '#fff'}
  }

  componentWillMount() {
    this.props.dispatch(loadPlayer(this.props.navigation.state.params.id))
  }

  render() {
    console.log('PROFILE_PLAYER', this.props)    
    return (
      <View>
        <ActionBarProfile />
        <View style={style.container}>
          <View style={[style.profileSection, style.flexCenter]}>
            <ImageBackground source={playerIcon} style={{width: 100, height: 100}}>
              <View style={style.profileRankImage}>
                <RankImage rank={this.props.player.rank} division={this.props.player.division} />
              </View>
            </ImageBackground>
            <View>
              <Text style={style.profileTextName}>{this.props.player.name}</Text>
              <View style={style.flexCenter}>
                <RoleImage role={this.props.player.roles[0]} />
                <Text style={style.profileRoleText}>{this.props.player.roles[0]}</Text>
              </View>
            <TouchableHighlight style={style.opggButton}>
              <Text style={[style.textMD, style.opggButtonText]}>OP.GG</Text>
            </TouchableHighlight>
            </View>
          </View>
          <View style={[style.profileSection, style.flexCenter]}>
            <Text style={style.textMD}>{this.props.player.about}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({player: state.player})
}

export default connect(
  mapStateToProps,
)(Profile)