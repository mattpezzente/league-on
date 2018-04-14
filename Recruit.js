import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import style from './styles/main.js'

export default class Recruit extends React.Component {
  static navigationOptions = {
    title: 'Recruit',
    headerLeft: (
      <Image 
        source={require('./assets/logo.png')} 
        style={{marginLeft: 10}}
      />
    )
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.container}>
        <Button
          title="Go to HerroCritty's profile"
          onPress={() =>
            navigate('Profile', { name: 'HerroCritty' })
          }
        />
      </View>
    );
  }
}

