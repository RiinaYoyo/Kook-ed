import React from 'react';
import { View , Image , StatusBar , Text } from 'react-native';

import Styles from '../assets/Styles';
import Loader from "../component/Loader"
import Header from '../component/Header'


export default class Home extends React.Component {


  //manage view name label and icons
  static navigationOptions = {
    tabBarIcon: ()=>{
      return <Image source={require('../assets/home-ico.png')} />
    }
  }
  
  render() {
    return (
      <View style={Styles.container}>
        <Loader/>
      </View>
    );
  }
}
