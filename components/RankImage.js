import React from 'react';
import { Image, View, Text,ImageBackground} from 'react-native';
import style from '../styles/main.js'
import goldImg from '../assets/rank-gold.png'
import silverImg from '../assets/rank-silver.png'


export default class RankImage extends React.Component {
  constructor(props) {
    super()
    this.image = ''
  }

  render() {
    let rankImage = ''
    console.log(this.props.rank)
    if (this.props.rank === 'gold') {
      rankImage = (
        <ImageBackground style={style.playerBarRank} source={goldImg}> 
          <Text style={style.playerBarRankDivision}>{this.props.division}</Text>
        </ImageBackground>
      )
    }
    else {
      rankImage = (
        <ImageBackground style={style.playerBarRank} source={silverImg}>
          <Text style={style.playerBarRankDivision}>{this.props.division}</Text>
        </ImageBackground>
      )
    }
    return(
      <View>
        {rankImage}
      </View>
    )
  }
}

