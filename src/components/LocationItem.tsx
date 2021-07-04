import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

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

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.secondaryBackground,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: Colors.separator,
    borderBottomWidth: 1,
  },
  locationName: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
    maxWidth: '50%',
  },
  residentCount: {
    color: Colors.inActive,
    fontSize: 18,
    marginLeft: 'auto',
  },
});
export default LocationItem;
