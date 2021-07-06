import React from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {ILocation} from 'interfaces';
import {Colors} from 'utils/colors';
import {Screen} from 'utils/screens';
import {useNavigation} from '@react-navigation/native';
import {useLocations} from 'components/_context/locationsContext';
import LocationItem from 'components/LocationItem';
import SearchAndFilter from 'components/SearchAndFilter';
import Loading from 'components/loading';

function Locations() {
  const navigation = useNavigation();

  const {data, loading, fetchMoreData, searchText, setSearchText} =
    useLocations();

  return (
    <View style={{backgroundColor: Colors.secondaryBackground, flex: 1}}>
      <SearchAndFilter
        searchText={searchText}
        setSearchText={setSearchText}
        noFilter
      />
      <FlatList
        keyExtractor={(_, index: number) => index.toString()}
        data={data}
        onEndReached={fetchMoreData}
        renderItem={({item: location}: {item: ILocation}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(Screen.LocationsDetails, {location});
            }}>
            <LocationItem
              residentCount={location.residents.length}
              locationName={location.name}
            />
          </Pressable>
        )}
      />
    </View>
  );
}
export default Locations;
