import React from 'react';
import { Text, View, Image, TouchableHighlight, Modal } from 'react-native';
import style from '../styles/main.js'
// Redux
import { connect } from 'react-redux'
import {showRecruitModal} from '../redux/actions'
// Images
import actionRecruit from '../assets/action-recruit.png'
import actionMessage from '../assets/action-message.png'
import actionReport from '../assets/action-report.png'
// Components
import RecruitForm from './RecruitForm'

class ActionBarProfile extends React.Component {
  setRecruitModalVisible(visible) {
    this.props.dispatch(showRecruitModal(this.props.modalVisible));
  }

  render() {
    return (
      <View style={style.actionBarContainer}>
        <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={style.recruitModal}>
              <RecruitForm player={this.props.player}/>
              <TouchableHighlight onPress={() => {this.setRecruitModalVisible(this.props.modalVisible)}}>
                <Text style={style.textMD}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </Modal>
          <TouchableHighlight
            onPress={() => {
              this.setRecruitModalVisible(this.props.modalVisible);
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

const mapStateToProps = (state, ownProps) => {
  return({modalVisible: state.modalVisible})
}

export default connect(
  mapStateToProps,
)(ActionBarProfile)