import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';
import styles from './styles';

interface InfoItemProps {
  iconName: string;
  label: string;
  value: string;
}

const InfoItem = ({iconName, label, value}: InfoItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName} size={25} color={Colors.focused} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default InfoItem;
