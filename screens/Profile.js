import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight, ScrollView} from 'react-native'
import style from '../styles/main.js'
// Redux
import { connect } from 'react-redux'
import { loadPlayer } from '../redux/actions'
// Images
import playerIcon from '../assets/player-icon.png'
// Components
import { ProfileAbout, ProfileAvailability, ProfileSocial, ProfileDetails } from '../components/ProfileSection'
import RankImage from '../components/RankImage.js'
import RoleImage from '../components/RoleImage.js'
import ActionBarProfile from '../components/ActionBarProfile.js'

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Player Profile',
    headerBackTitleStyle: {color: '#fff'}
  }

  componentWillMount() {
    this.props.dispatch(loadPlayer(this.props.navigation.state.params.id))
  }

  render() {
    let detailSections = []
    if (this.props.player.about) {
      detailSections.push(<ProfileAbout key={1} about={this.props.player.about}/>)
    }
    if (this.props.player.details) {
      detailSections.push(<ProfileDetails key={2} details={this.props.player.details}/>)
    }
    if (this.props.player.availability) {
      detailSections.push(<ProfileAvailability key={3} availability={this.props.player.availability}/>)
    }
    if (this.props.player.social) {
      detailSections.push(<ProfileSocial key={4} social={this.props.player.social}/>)
    }

    return (
      <ScrollView style={style.containerFull}>
          <ActionBarProfile />
          <View>
            <View style={[style.profileSection, style.flexCenter]}>
              <ImageBackground source={playerIcon} style={{width: 100, height: 100}}>
                <View style={style.profileRankImage}>
                  <RankImage rank={this.props.player.rank} division={this.props.player.division} />
                </View>
              </ImageBackground>
              <View>
                <Text style={style.profileTextName}>{this.props.player.name}</Text>
                <View style={style.profileRoleContainer}>
                  <RoleImage role={this.props.player.roles[0]} />
                  <Text style={style.profileRoleText}>{this.props.player.roles[0]}</Text>
                </View>
              <TouchableHighlight style={style.opggButton}>
                <Text style={[style.textMD, style.opggButtonText]}>OP.GG</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
          {detailSections}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({player: state.player})
}

export default connect(
  mapStateToProps,
)(Profile)