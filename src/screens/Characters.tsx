import React, {Fragment, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  View,
  Dimensions,
  Button,
  DrawerLayoutAndroid,
  Text,
  TextInput,
} from 'react-native';
import {Colors} from 'utils/colors';
import {useCharacters} from 'components/_context/charactersContext';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import CharacterItem from 'components/CharacterItem';
import {ICharacter} from 'interfaces';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Characters = () => {
  const {data, fetchMoreData, searchText, setSearchText} = useCharacters();
  const navigation = useNavigation();

  const drawer = useRef<any>(null);

  const navigationView = () => (
    <View style={{backgroundColor: Colors.primaryBackground, flex: 1}}>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      style={{
        backgroundColor: Colors.primaryBackground,
      }}
      ref={drawer}
      drawerWidth={300}
      drawerPosition="right"
      renderNavigationView={navigationView}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{padding: 15}}
          placeholder="Search..."
          value={searchText}
          onChangeText={(text: string) => setSearchText(text)}
        />
        <FontAwesome5
          name="filter"
          size={25}
          color={Colors.focused}
          style={styles.filter}
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
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
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBackground,
  },
  filter: {
    marginLeft: 'auto',
    marginRight: 15,
  },
  inputContainer: {
    backgroundColor: Colors.secondaryBackground,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
  },
});
export default Characters;
