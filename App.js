/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import { Home, Photo} from './src/screens/index'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';



class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Home')
          }} style={{
            alignSelf: 'center',
            paddingHorizontal:20,
            paddingVertical:10,
            backgroundColor: 'gold',
            borderRadius: 6,
          }}>
            <Text>Войти</Text>
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
    screen: Home,
    navigationOptions:{
      headerTitle: 'Camera',
      headerLeft: null,
      header: null
    }
  },
  Photo: {
    screen: Photo
  }
})
const AppStack = createAppContainer(stack)

export default AppStack;
