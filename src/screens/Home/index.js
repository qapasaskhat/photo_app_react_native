import React, { Component } from 'react';
import { SafeAreaView, Text,StatusBar } from 'react-native';
import styles from '../styles'
import { RNCamera } from 'react-native-camera';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={[styles.container,{justifyContent: 'center',alignItems: 'center'}]}>
          <Text>LOGO</Text>
          <RNCamera 
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              width: '80%',
              height: '70%'
            }}
            type={RNCamera.Constants.Type.back}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            />
            <Text>timer 3...2...1...</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default HomeScreen;
