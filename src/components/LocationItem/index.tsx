import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface EpisodeItemProps {
  locationName: string;
  residentCount: number;
}

const LocationItem = ({locationName, residentCount}: EpisodeItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.locationName}>{locationName}</Text>
      <Text style={styles.residentCount}>{residentCount} Residents</Text>
    </View>
  );
};

export default LocationItem;
