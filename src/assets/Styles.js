import React from 'react';
import {StyleSheet} from 'react-native';


const colors = {
  fond : "#0A2342",
  blue : "#14988B",
  gris : "#F5F7FA",
  darkBlue : "#0F5A5C",
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fond,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height : 120,
    width: 120,
  },
});

export default Styles;
