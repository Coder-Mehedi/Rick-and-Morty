import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

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

export default EpisodeItem;
