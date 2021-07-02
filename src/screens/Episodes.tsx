import React from 'react';
import {View, FlatList} from 'react-native';
import ScreenHeadText from '../components/ScreenHeadText';
import {useEpisodes} from '../components/_context/episodesContext';
import {IEpisode} from '../interfaces';
import EpisodeItem from '../components/EpisodeItem';

const Episodes = () => {
  const {data, loading, fetchMoreData} = useEpisodes();
  return (
    <View>
      <ScreenHeadText>Episodes</ScreenHeadText>
      <FlatList
        keyExtractor={(_, index: number) => index.toString()}
        data={data}
        onEndReached={fetchMoreData}
        renderItem={({item: episode}: {item: IEpisode}) => (
          <EpisodeItem date={episode.air_date} episodeName={episode.name} />
        )}
        style={{marginBottom: 50}}
      />
    </View>
  );
};
export default Episodes;
