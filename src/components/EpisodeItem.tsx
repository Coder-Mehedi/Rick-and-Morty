import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from 'utils/colors';

interface EpisodeItemProps {
  episodeName: string;
  date: string;
}

const EpisodeItem = ({episodeName, date}: EpisodeItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.episodeName}>{episodeName}</Text>
      <Text style={styles.date}>{date}</Text>
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
  episodeName: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
    maxWidth: '50%',
  },
  date: {
    color: Colors.inActive,
    fontSize: 18,
    marginLeft: 'auto',
  },
});
export default EpisodeItem;
