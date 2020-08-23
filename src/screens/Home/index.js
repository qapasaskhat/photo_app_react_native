import React, { Component } from 'react';
import { SafeAreaView, Text,StatusBar, View, Image } from 'react-native';
import styles from '../styles'
import { RNCamera } from 'react-native-camera';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri:null,
      timer: null,
      timeLeft: null
    };
  }
  _camera=async()=>{
    this.startTimer(5)
    this.takePhoto()
  }
  takePhoto=async()=>{
    const data = await this.camera.takePictureAsync();
    console.warn('takePicture ', data);
    this.setState({
      uri: data.uri
    })
  }
  startTimer = timeLeft => {

    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft === 0) {
        clearInterval(timer);
      }
      this.setState({
        timeLeft: timeLeft,
      });
    }, 1000);
    return this.setState({timeLeft: timeLeft, timer: timer});
  };
  render() {
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={[styles.container,{justifyContent:'space-around'}]}>
          <Text style={{
            textAlign: 'center'
          }}>PhotoBUtka</Text>
        <RNCamera 
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              width: '80%',
              height: '80%',
              alignSelf:'center'
            }}
            type={RNCamera.Constants.Type.front}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            />
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}>
              <View style={{width: 64}} />
            <TouchableOpacity 
            onPress={()=>{this._camera()}}
             style={{
              width:64,
              height:64,
              borderRadius: 60,
              backgroundColor: '#cecece',
              marginTop: 6,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
                backgroundColor: '#fff',
                height:32,
                width:32,
                borderRadius: 32,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 15,
                  fontWeight: '700',
                  fontStyle: 'normal',
                }}>{this.state.timeLeft}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Photo',{param: this.state.uri})
            }} style={{width: 64}}>
              {this.state.uri && <Image source={{uri: this.state.uri}}  style={{
                width: 64,
                height: 64,
                resizeMode: 'contain',
              }}/>}
            </TouchableOpacity>
            </View>
        </SafeAreaView>
      </>
    );
  }
}

export default HomeScreen;
