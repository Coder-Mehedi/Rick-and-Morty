import React from 'react';
import {FlatList, Pressable, View} from 'react-native';
import EpisodeItem from 'components/EpisodeItem';
import {IEpisode} from 'interfaces';
import {Colors} from 'utils/colors';
import {Screen} from 'utils/screens';
import {useNavigation} from '@react-navigation/native';
import {useLocations} from 'components/_context/locationsContext';

function Locations() {
  const navigation = useNavigation();

  const {data, loading, fetchMoreData} = useLocations();
  console.log(loading);
  if (data) console.log(data);

  return (
    <View style={{backgroundColor: Colors.secondaryBackground, flex: 1}}>
      <FlatList
        keyExtractor={(_, index: number) => index.toString()}
        data={data}
        onEndReached={fetchMoreData}
        renderItem={({item: location}: {item: IEpisode}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(Screen.LocationsDetails, {location});
            }}>
            <EpisodeItem date={location.air_date} episodeName={location.name} />
          </Pressable>
        )}
      />
    </View>
  );
}
export default Locations;
