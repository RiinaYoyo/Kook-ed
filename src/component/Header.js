import React from 'react';
import {View , Image , Text , TouchableOpacity} from 'react-native';
import Styles from '../assets/Styles';

//header app
export default class Header extends React.Component{
  render (){
    return (
      <View style={Styles.header}>
        <TouchableOpacity>
          <Image source={require('../assets/kooked-blue.jpg')} style={Styles.logo}/>
        </TouchableOpacity>
        <View style={Styles.SeparatorLine} />
        <Image source={require('../assets/banniere.png')} style={Styles.banniere}/>
      </View>
    )
  }
}
