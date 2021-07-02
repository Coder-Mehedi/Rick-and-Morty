import {useQuery} from '@apollo/client';
import React, {Fragment, useState} from 'react';
import {StyleSheet, Text, Image, FlatList, Pressable, View} from 'react-native';
import {GET_CHARACTERS} from '../graphql/query/getCharacters';
import {useNavigation} from '@react-navigation/native';
import {ICharacter} from '../interfaces';
import {Colors} from '../utils/colors';
import ScreenHeadText from './_root/ScreenHeadText';

const CharactersScreen = ({navigation}: {navigation: any}) => {
  const [data, setData] = useState<any>(null);
  const [nextPage, setNextPage] = useState(2);
  const {loading, fetchMore} = useQuery(GET_CHARACTERS, {
    variables: {page: 1},
    onCompleted: data => {
      setData(data.characters.results);
    },
  });

  return (
    <Fragment>
      <ScreenHeadText>Characters</ScreenHeadText>
      <FlatList
        onEndReached={async () => {
          const res = await fetchMore({
            variables: {page: nextPage},
          });
          setData([...data, ...res.data.characters.results]);
          setNextPage(res.data.characters.info.next);
        }}
        style={styles.container}
        data={data}
        renderItem={({item: character}) => (
          <CharactersScreen.Character character={character} />
        )}
      />
    </Fragment>
  );
};
CharactersScreen.Character = ({character}: {character: ICharacter}) => {
  const navigation = useNavigation();
  return (
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
});

export default CharactersScreen;
