import React, {Fragment} from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  View,
  Dimensions,
} from 'react-native';
import {Colors} from 'utils/colors';
import {useCharacters} from 'components/_context/charactersContext';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import CharacterItem from 'components/CharacterItem';
import {ICharacter} from 'interfaces';

const Characters = () => {
  const {data, fetchMoreData} = useCharacters();
  const navigation = useNavigation();

  return (
    <Fragment>
      <FlatList
        onEndReached={fetchMoreData}
        style={styles.container}
        data={data}
        renderItem={({item: character}: {item: ICharacter}) => (
          <Pressable
            key={character.name}
            onPress={() => {
              navigation.navigate(Screen.CharacterDetails, {character});
            }}>
            <CharacterItem character={character} />
          </Pressable>
        )}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBackground,
  },
});

export default Characters;
