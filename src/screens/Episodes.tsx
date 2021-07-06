import React from 'react';
import {View, FlatList, Pressable} from 'react-native';
import {useEpisodes} from 'components/_context/episodesContext';
import {IEpisode} from 'interfaces';
import EpisodeItem from 'components/EpisodeItem';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import {Colors} from 'utils/colors';
import SearchAndFilter from 'components/SearchAndFilter';
import Loading from 'components/loading';

const Episodes = () => {
  const navigation = useNavigation();

  const {data, loading, fetchMoreData, searchText, setSearchText} =
    useEpisodes();

  if (loading) return <Loading />;

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
        renderItem={({item: episode}: {item: IEpisode}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(Screen.EpisodeDetails, {episode});
            }}>
            <EpisodeItem date={episode.air_date} episodeName={episode.name} />
          </Pressable>
        )}
      />
    </View>
  );
};
export default Episodes;
