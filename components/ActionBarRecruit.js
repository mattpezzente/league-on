import React from 'react';
import { Text, View, Image, TouchableHighlight, Modal } from 'react-native';
import style from '../styles/main.js'
// Images
import actionFilter from '../assets/action-filter.png'
import actionSearch from '../assets/action-search.png'
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
            <Text style={style.textMD}>Filter: </Text>
            <Image source={actionFilter}/>
            </View>
          <View style={style.flexCenter}>
            <Text style={style.textMD}>Search: </Text>
            <Image source={actionSearch}/>
          </View>
      </View>
    );
  }
}

