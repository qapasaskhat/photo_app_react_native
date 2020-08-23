import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StatusBar, 
    SafeAreaView,
    Image , 
    ImageBackground,
    CameraRoll
} from 'react-native';
import styles from '../styles'
import {ramka} from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ViewShot from 'react-native-view-shot'

class PhotoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uri: null,
        photo: null,
        photoUrl: null
    };
  }
  componentDidMount=()=>{
      this.setState({
          uri: this.props.navigation.getParam('param')
      })
  }
  screenShot=()=>{
    this.refs.viewShot.capture().then(uri => {
      this.setState({
        photo: true,
        photoUrl: uri
      })
      console.log("do something with ", uri);
      CameraRoll.saveToCameraRoll(uri)
      .then(alert('Done', 'Photo added to camera roll!')) 
      .catch(err => console.log('err:', err))
    });
  }

  render() {
    return (
     <>
     <StatusBar />
     <View style={[styles.container,]}>
         <ViewShot ref="viewShot" options={{ format: "jpg", quality: 0.9 }}
         style={{
             justifyContent:'center',
             alignItems:'center'
         }}>
            <Image 
            source={ramka}
            style={{
                width:64*5,
                height: 96*5,
                position:'absolute',
                zIndex: 1111,
                resizeMode:'center',
            }} />
            <Image source={{uri: this.state.uri}} style={{
                    width: 64*5,
                    height: 96*5,
                    resizeMode: 'contain',
                }}/>
         </ViewShot>
         <View >
         <TouchableOpacity 
         onPress={()=>this.screenShot()}
         style={{
             backgroundColor: '#cecece',
             alignItems:'center',
             marginHorizontal:20,
             paddingVertical:10,
         }}>
             <Text style={{
                 color: '#000',
                 textTransform: 'uppercase',
                 fontWeight: 'bold'
             }}>Save photo</Text>
         </TouchableOpacity>
         </View>
         
     </View>
     </>
    );
  }
}

export default PhotoScreen;
