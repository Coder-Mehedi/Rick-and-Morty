import React, {ReactChild} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../utils/colors';

const SectionText = ({children}: {children: ReactChild}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    padding: 10,
    paddingLeft: 10,
    color: Colors.inActive,
    backgroundColor: Colors.primaryBackground,
    textTransform: 'uppercase',
  },
});

export default SectionText;
