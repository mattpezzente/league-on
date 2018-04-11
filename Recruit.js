import React from 'react';
import { Button, Text, View } from 'react-native';

export default class Recruit extends React.Component {
  static navigationOptions = {
    title: 'Recruit',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}