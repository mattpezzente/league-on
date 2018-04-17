import React from 'react';
import { Text, View, Image, TouchableHighlight, Modal } from 'react-native';
import style from '../styles/main.js'

import actionRecruit from '../assets/action-recruit.png'
import actionMessage from '../assets/action-message.png'
import actionReport from '../assets/action-report.png'

export default class ActionBarProfile extends React.Component {
  state = {
    formModalVisible: false
  }

  setformModalVisible(visible) {
    this.setState({formModalVisible: visible});
  }

  render() {
    return (
      <View style={style.actionBarContainer}>
        <View>
          <Modal
            animationType="fade"
            transparent={false}
            visible={this.state.formModalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setformModalVisible(!this.state.formModalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </Modal>
          <TouchableHighlight
            onPress={() => {
              this.setformModalVisible(true);
            }}>
            <View style={style.flexCenter}>
              <Text style={style.textMD}>Recruit: </Text>
              <Image source={actionRecruit}/>
            </View>
          </TouchableHighlight>
        </View>
        <View style={style.flexCenter}>
          <Text style={style.textMD}>Message: </Text>
          <Image source={actionMessage}/>
        </View>
        <View style={style.flexCenter}>
          <Text style={style.textMD}>Report: </Text>
          <Image source={actionRecruit}/>
        </View>
      </View>
    );
  }
}

