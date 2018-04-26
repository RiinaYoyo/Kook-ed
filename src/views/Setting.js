import React from 'react';
import Styles from '../assets/Styles';
import { View , Image , StatusBar } from 'react-native';


export default class Setting extends React.Component {

  static navigationOptions = {
    tabBarIcon: ()=>{
      return <Image source={require('../assets/setting-ico.png')} />
    }
  }
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true}/>
        <Image source={require('../assets/kooked.jpg')} style={Styles.logo}/>
      </View>
    );
  }
}
