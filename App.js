import React from 'react';
import {View} from 'react-native';
import Styles from './src/assets/Styles'

import Now from './src/views/Now.js'
import Loader from './src/views/Loader.js';
import Home from './src/views/home.js';
import { TabNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
        <RootTab/>
    );
  }
}

const RootTab = TabNavigator({
    Home: {
      screen: Home,
    },
    Now: {
      screen: Now,
    },
});
