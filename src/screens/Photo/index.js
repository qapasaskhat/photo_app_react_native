import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StatusBar, 
    SafeAreaView,
    Image , 
    TextInput,
    CameraRoll
} from 'react-native';
import styles from '../styles'
import {ramka} from '../../assets'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
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
     <View style={[styles.container,{backgroundColor:'#9DD5F4'}]}>
       <ScrollView>
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
         <Text style={{fontSize: 20,marginHorizontal:20}}>Enter your email</Text>
         <View style={{flexDirection:'row',marginHorizontal:20, marginVertical:8}}>
          <TextInput placeholderTextColor='#fff' placeholder='enter your email' style={{
            borderWidth: 1,
            width: '60%',
            borderColor:'#fff',
            paddingLeft: 8,
            marginRight: 10
          }} />
          <TouchableOpacity>
            <Text style={{fontWeight: 'bold',fontSize: 32,color:'#fff'}}>+</Text>
          </TouchableOpacity>
         </View>
         <View >
         <TouchableOpacity 
         onPress={()=>{}}
         style={{
             backgroundColor: '#fff',
             alignItems:'center',
             marginHorizontal:20,
             paddingVertical:10,
         }}>
             <Text style={{
                 color: '#000',
                 textTransform: 'uppercase',
                 fontWeight: 'bold'
             }}>Send</Text>
         </TouchableOpacity>
         </View>
         </ScrollView>
     </View>
     </>
    );
  }
}

export default PhotoScreen;
