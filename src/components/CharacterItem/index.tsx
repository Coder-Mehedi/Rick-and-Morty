import React from 'react';
import {Image, View, Text} from 'react-native';
import {ICharacter} from 'interfaces';
import styles from './styles';

interface CharacterProps {
  character: ICharacter;
  simplified?: boolean;
}

const CharacterItem = ({character, simplified = false}: CharacterProps) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: character.image}}
        style={simplified ? styles.smallImage : styles.image}
      />
      <View style={styles.nameAndCount}>
        <Text style={styles.name}>{character.name}</Text>
        {!simplified && (
          <Text style={styles.episodeCount}>
            {character.episode.length} Episodes
          </Text>
        )}
      </View>
    </View>
  );
};

export default CharacterItem;
