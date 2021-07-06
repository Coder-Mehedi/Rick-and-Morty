import React, {useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  DrawerLayoutAndroid,
} from 'react-native';
import {Colors} from 'utils/colors';
import {useCharacters} from 'components/_context/charactersContext';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import CharacterItem from 'components/CharacterItem';
import {ICharacter} from 'interfaces';
import SearchAndFilter from 'components/SearchAndFilter';
import CharacterFilterContent from 'components/CharacterFilterContent';

const Characters = () => {
  const {data, fetchMoreData, searchText, setSearchText} = useCharacters();
  const navigation = useNavigation();
  const drawer = useRef<any>(null);

  return (
    <DrawerLayoutAndroid
      style={styles.container}
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => <CharacterFilterContent />}>
      <SearchAndFilter
        drawer={drawer}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <FlatList
        onEndReached={fetchMoreData}
        style={styles.container}
        data={data}
        keyExtractor={(item, index) => index.toString()}
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
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.primaryBackground},
});
export default Characters;
