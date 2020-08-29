/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { Home, Photo, Confirmation} from './src/screens/index'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


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
            backgroundColor: '#9DD5F4',
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
  },
  Confirmation:{
    screen: Confirmation
  }
},{headerMode: 'none'})
const AppStack = createAppContainer(stack)

export default AppStack;
