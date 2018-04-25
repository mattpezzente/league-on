import React from 'react';
import { Text, View, Image, TouchableHighlight, Modal } from 'react-native';
import style from '../styles/main.js'
// Images
import actionRecruit from '../assets/action-recruit.png'
import actionMessage from '../assets/action-message.png'
import actionReport from '../assets/action-report.png'

export default class ActionBarRecruit extends React.Component {
  state = {
    formModalVisible: false
  }

  setformModalVisible(visible) {
    this.setState({formModalVisible: visible});
  }

  render() {
    return (
      <View style={style.actionBarContainer}>
          <Text style={style.textMD}>Newest Players</Text>
          <View style={style.flexCenter}>
            <Text style={style.textMD}>Recruit: </Text>
            <Image source={actionRecruit}/>
            </View>
          <View style={style.flexCenter}>
            <Text style={style.textMD}>Recruit: </Text>
            <Image source={actionRecruit}/>
          </View>
      </View>
    );
  }
}

