import React, {Fragment} from 'react';
import {StyleSheet, FlatList, Pressable} from 'react-native';

import {ICharacter} from '../interfaces';
import {Colors} from '../utils/colors';
import ScreenHeadText from '../components/ScreenHeadText';
import {useCharacters} from '../components/_context/charactersContext';
import Character from '../components/Character';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../utils/screens';

const Characters = () => {
  const {data, loading, fetchMoreData} = useCharacters();
  const navigation = useNavigation();

  return (
    <Fragment>
      <ScreenHeadText>Characters</ScreenHeadText>
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
            <Character character={character} />
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
