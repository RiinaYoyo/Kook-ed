import React from 'react';
import {StyleSheet} from 'react-native';


//color palette for app
const colors = {
  fond : "#0A2342",
  blue : "#14988B",
  gris : "#F5F7FA",
  darkBlue : "#0F5A5C",
}



//component's Style
const Styles = StyleSheet.create({
  container: {
    flex: -1,
    backgroundColor: colors.fond,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logo:{
    padding: 5,
    height : 72,
    width: 72,
  },
  header:{
    flex:  -2,
    flexDirection: 'row',
    alignItems: 'center',
    height: 72,
    padding: 5,
    backgroundColor: colors.blue,
    borderBottomWidth:1,
    borderBottomColor:colors.darkBlue
  },
  app:{
    flex: 2,
    backgroundColor: colors.fond,
  },
  SeparatorLine :{
    backgroundColor : colors.gris,
    width: 1,
    height: 40,
    marginHorizontal: 10,  
  },
  banniere:{
    marginLeft: 50,
  },
  loadingLogo:{
    height: 220,
  }
});
export default Styles;