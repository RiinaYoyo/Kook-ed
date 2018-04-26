import React from 'react';
import Styles from '../assets/Styles';
import { View, ActivityIndicator, Image } from 'react-native';


export default class Loader extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Image source={require('../assets/kooked.jpg')} style={Styles.loadingLogo}/>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}
