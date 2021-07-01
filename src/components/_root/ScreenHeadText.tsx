import React, {ReactChild} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../utils/colors';

const ScreenHeadText = ({children}: {children: ReactChild}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 10,
    paddingLeft: 10,
    color: Colors.screenHead,
    backgroundColor: Colors.primaryBackground,
  },
});

export default ScreenHeadText;
