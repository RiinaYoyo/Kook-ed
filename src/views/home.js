import React from 'react';
import Styles from '../assets/Styles';
import { View , Image , StatusBar } from 'react-native';


export default class Home extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true}/>
        <Image source={require('../assets/kooked.jpg')} style={Styles.logo}/>
      </View>
    );
  }
}
