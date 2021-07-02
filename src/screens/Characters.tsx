import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ICharacter} from '../interfaces';
import {Colors} from '../utils/colors';
import ScreenHeadText from '../components/_root/ScreenHeadText';
import {useCharacters} from '../components/_context/charactersContext';

const Characters = () => {
  const {data, loading, fetchMoreData} = useCharacters();
  return (
    <Fragment>
      <ScreenHeadText>Characters</ScreenHeadText>
      <FlatList
        onEndReached={fetchMoreData}
        style={styles.container}
        data={data}
        renderItem={({item: character}) => (
          <Characters.Character character={character} />
        )}
      />
      {/* {loading && (
        <ActivityIndicator
          style={{backgroundColor: Colors.primaryBackground}}
          color={Colors.focused}
          size="large"
        />
      )} */}
    </Fragment>
  );
};
Characters.Character = ({character}: {character: ICharacter}) => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable
        style={styles.itemContainer}
        key={character.name}
        onPress={() => {
          navigation.navigate('CharacterDetails', {character});
        }}>
        <Image source={{uri: character.image}} style={styles.image} />
        <View style={styles.nameAndCount}>
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.episodeCount}>
            {character.episode.length} Episodes
          </Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBackground,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: Colors.separator,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  nameAndCount: {
    padding: 10,
  },
  name: {
    fontSize: 22,

    color: Colors.primary,
  },
  episodeCount: {
    fontSize: 18,
    color: Colors.inActive,
  },
  loading: {
    textAlign: 'center',
    backgroundColor: Colors.primaryBackground,
    color: Colors.label,
  },
});

export default Characters;
