import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import style from '../styles/main.js'


import unrankedImg from '../assets/rank-unranked.png'
import bronzeImg from '../assets/rank-bronze.png'
import silverImg from '../assets/rank-silver.png'
import goldImg from '../assets/rank-gold.png'
import platinumImg from '../assets/rank-platinum.png'
import diamondImg from '../assets/rank-diamond.png'
import masterImg from '../assets/rank-master.png'
import challengerImg from '../assets/rank-challenger.png'


export default class RankImage extends React.Component {
  constructor(props) {
    super()
    this.rankImg = ''
  }

  componentWillMount() {
    switch(this.props.rank) {
      case 'unranked':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={unrankedImg} />
        )
        break
      case 'bronze':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={bronzeImg}>
            <Text style={style.playerBarRankDivision}>{this.props.division}</Text>
          </ImageBackground>
        )
        break
      case 'silver':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={silverImg}>
            <Text style={style.playerBarRankDivision}>{this.props.division}</Text>
          </ImageBackground>
        )
        break
      case 'gold':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={goldImg}>
            <Text style={style.playerBarRankDivision}>{this.props.division}</Text>
          </ImageBackground>
        )
        break
      case 'platinum':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={platinumImg}>
            <Text style={style.playerBarRankDivision}>{this.props.division}</Text>
          </ImageBackground>
        )
        break
      case 'diamond':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={diamondImg}>
            <Text style={style.playerBarRankDivision}>{this.props.division}</Text>
          </ImageBackground>
        )
        break
      case 'master':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={masterImg} />
        )
        break
      case 'challenger':
        this.rankImage = (
          <ImageBackground style={style.playerBarRank} source={challengerImg} />
        )
        break
    }
  }

  render() {
    return(
      <View>
        {this.rankImage}
      </View>
    )
  }
}

