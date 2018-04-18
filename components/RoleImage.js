import React from 'react';
import { Image, View } from 'react-native';
import style from '../styles/main.js'


import topImg from '../assets/role-top.png'
import jungleImg from '../assets/role-jungle.png'
import midImg from '../assets/role-mid.png'
import botImg from '../assets/role-bot.png'
import supportImg from '../assets/role-support.png'


export default class RoleImage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    let roleImage = {}
    switch(this.props.role) {
      case 'top':
        roleImage = <Image source={topImg} />
        break
      case 'jungle':
        roleImage = <Image source={jungleImg} />
        break
      case 'mid':
        roleImage = <Image source={midImg} />
        break
      case 'bot':
        roleImage = <Image source={botImg} />
        break
      case 'support':
        roleImage = <Image source={supportImg} />
        break
      default:
        roleImage = ''
    }
    return(
      <View>
        {roleImage}
      </View>
    )
  }
}

