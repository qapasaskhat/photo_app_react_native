/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import Home from './src/screens/Home'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';



class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Home')
          }} style={{
            alignSelf: 'center',
            paddingHorizontal:20,
            paddingVertical:10,
            backgroundColor: 'gold',
            borderRadius: 6,
          }}>
            <Text>button</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </>
    );
  }
}

const stack = createStackNavigator({
  App: {
    screen: App
  },
  Home: {
    screen: Home
  }
})
const AppStack = createAppContainer(stack)

export default AppStack;
