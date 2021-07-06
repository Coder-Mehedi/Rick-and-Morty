import styles from './styles';
import React from 'react';
import {View, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';

interface Props {
  drawer: any;
  searchText: string;
  setSearchText: (searchText: string) => void;
}

const SearchAndFilter = ({drawer, searchText, setSearchText}: Props) => {
  return (
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
  );
};

export default SearchAndFilter;
