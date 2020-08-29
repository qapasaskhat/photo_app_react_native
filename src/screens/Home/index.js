import React, { Component } from 'react';
import { SafeAreaView, Text,StatusBar, View, Image ,TouchableOpacity} from 'react-native';
import styles from '../styles'
import { RNCamera } from 'react-native-camera';
import { camera } from '../../assets'

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri:null,
      timer: null,
      timeLeft: null,
      isPhoto: null
    };
  }
  _camera=async()=>{
    this.startTimer(5)
    setTimeout(() => {
      this.takePhoto()
    }, 5000);
  }
  takePhoto=async()=>{
    const data = await this.camera.takePictureAsync();
    console.warn('takePicture ', data);
    this.setState({
      uri: data.uri
    })
    this.props.navigation.navigate('Confirmation',{param: this.state.uri})
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
        <SafeAreaView style={[styles.container,{
          justifyContent:'space-around',
          backgroundColor:'#9DD5F4', 
          alignItems: 'center',
          }]}>
          <Text style={{
            textAlign: 'center'
          }}>PhotoBUtka</Text>
          <TouchableOpacity 
          onPress={()=>{this._camera()}}
          style={{
            position:'absolute',
            top: 0,
            zIndex: 121212,
            width:86,
            height: 86,
            top: '40%'
          }}>
            <Image source={camera} style={{
              width:86,
              height: 86,
              resizeMode:'contain',
              tintColor: '#fff'
            }}/>
          </TouchableOpacity>
        <RNCamera 
            ref={ref => {
              this.camera = ref;
            }}
            style={{
              width: '80%',
              height: '80%',
            }}
            type={RNCamera.Constants.Type.front}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}/>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%'
            }}>
              <View style={{width: 64}} />
           { this.state.isPhoto === false?
           <View/>:
           <TouchableOpacity 
            onPress={()=>{this._camera()}}
             style={{
              width:64,
              height:64,
              borderRadius: 60,
              //backgroundColor: '#cecece',
              marginTop: 6,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <View style={{
               // backgroundColor: '#fff',
                height:32,
                width:32,
                borderRadius: 32,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text style={{
                  fontSize: 32,
                  fontWeight: '700',
                  fontStyle: 'normal',
                }}>{this.state.timeLeft}</Text></View>
            </TouchableOpacity>}
            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Confirmation',{param: this.state.uri})
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
