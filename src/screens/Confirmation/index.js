import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        uri: null
    };
  }
  componentDidMount=()=>{
    this.setState({
        uri: this.props.navigation.getParam('param')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}> PhotoBUtka </Text>
        <View>
            <Image  source={{uri: this.state.uri}} style={styles.photo}/>
        </View>
        <View>
            <Text style={styles.h2}>Do you like it?</Text>
            <View style={styles.view}>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.goBack()
                }}>
                    <Text style={styles.h2}>no</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Photo',{param: this.state.uri})
                }}>
                    <Text style={styles.h2}>yes</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9DD5F4',
        justifyContent:'space-around',
        alignItems:'center'
    },
    h1:{
        fontSize: 14,
        textAlign:'center'
    },
    photo:{
        height:300,
        width: 300,
        resizeMode:'cover'
    },
    view:{
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    h2:{
        fontSize: 20,
    }
})

export default Confirmation;
