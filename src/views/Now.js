import React from 'react';
import {View , Text , Image} from 'react-native';
import Styles from '../assets/Styles';

export default class Now extends React.Component {

  static navigationOptions = {
    tabBarIcon: ()=>{
      return <Image source={require('../assets/food-ico.png')} />
    }
  }
  render() {
    return (
        <View style={Styles.container}>
          <Text> Heeey </Text>
          <Text> Heeey </Text>
          <Text> Heeey </Text>
        </View>
    );
  }
}
