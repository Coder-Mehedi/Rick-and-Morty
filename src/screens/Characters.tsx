import React, {Fragment} from 'react';
import {StyleSheet, FlatList, Pressable, Image, View} from 'react-native';
import {Colors} from 'utils/colors';
import ScreenHeadText from 'components/ScreenHeadText';
import {useCharacters} from 'components/_context/charactersContext';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import Character from 'components/Character';
import {ICharacter} from 'interfaces';

const Characters = () => {
  const {data, loading, fetchMoreData} = useCharacters();
  const navigation = useNavigation();

  if (loading && !data)
    return (
      <View
        style={{backgroundColor: '#d7dae0', flex: 1, justifyContent: 'center'}}>
        <Image
          style={{height: 300, width: '100%'}}
          source={{
            uri: 'https://cdn.dribbble.com/users/870371/screenshots/5172260/theskeletoons-rick2.png',
          }}
        />
      </View>
    );

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
