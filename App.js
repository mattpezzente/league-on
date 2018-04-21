import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
// Screens
import Recruit from './screens/Recruit';
import Profile from './screens/Profile';


const store = createStore(rootReducer)


class App extends React.Component {
  render() {
    const Navigator = StackNavigator(
      {
        Recruit: { screen: Recruit },
        Profile: { screen: Profile },
      },
      {
        navigationOptions: {
          headerStyle: { backgroundColor: '#2662B2' },
          headerTitleStyle: { color: '#fff' },
        }
      }
    );
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Navigator />
        </View>
      </Provider>
    )
  }
}


export default App