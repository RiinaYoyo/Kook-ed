import React from 'react';
import {View} from 'react-native';
import firebase from 'firebase'
import RootTab from './src/component/RootTab';
import Header from './src/component/Header';
import Styles from './src/assets/Styles';
import config from './src/conf/firebaseConf';


export default class App extends React.Component {


  //initialise firebase
  constructor(props){
    super(props);
    // Initialize Firebase
    firebase.initializeApp(config);
  }

  //
  state={

  }

  render() {
    return (
      <View style={Styles.app}>
        <Header/>
        <RootTab/>
      </View>
    );
  }
}

