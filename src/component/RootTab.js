import React from 'react';
import { TabNavigator } from 'react-navigation';


import Now from '../views/Now.js'
import Home from '../views/home.js';
import Setting from '../views/Setting.js';
import Map from '../views/Map.js';


const RootTab = TabNavigator({
    //manage different view
    Home: {
      screen: Home,
    },
    Now: {
      screen: Now,
    },
    Map: {
      screen: Map,
    },
    Setting: {
      screen: Setting,
    },
  },{
    //View Options
    tabBarPosition:'bottom',
    tabBarOptions:{
      showIcon : true,
      showLabel :true,
      indicatorStyle:{
        height:2,
        backgroundColor:"#F5F7FA",
      },
      style:{
        backgroundColor: "#0F5A5C",
        borderTopWidth:1,
        borderTopColor:"#14988B",
      },
    }
  });


export default RootTab;