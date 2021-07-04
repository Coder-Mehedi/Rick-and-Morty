import React, {ReactChild} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const SectionText = ({children}: {children: ReactChild}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export default SectionText;
