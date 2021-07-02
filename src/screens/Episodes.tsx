import React from 'react';
import {View, FlatList, Pressable} from 'react-native';
import ScreenHeadText from '../components/ScreenHeadText';
import {useEpisodes} from '../components/_context/episodesContext';
import {IEpisode} from '../interfaces';
import EpisodeItem from '../components/EpisodeItem';
import {useNavigation} from '@react-navigation/native';
import {Screen} from '../utils/screens';

const Episodes = () => {
  const navigation = useNavigation();

  const {data, loading, fetchMoreData} = useEpisodes();
  return (
    <View>
      <ScreenHeadText>Episodes</ScreenHeadText>
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
        style={{marginBottom: 50}}
      />
    </View>
  );
};
export default Episodes;
