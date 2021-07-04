import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Pressable} from 'react-native';
import {IEpisode} from 'interfaces';
import {Colors} from 'utils/colors';
import InfoItem from 'components/InfoItem';
import SectionText from 'components/SectionText';
import {useQuery} from '@apollo/client';
import {GET_EPISODE} from '../graphql/query/getEpisode';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import CharacterItem from 'components/CharacterItem';

const EpisodeDetails = ({route}: {route: any}) => {
  const [episode, setEpisode] = useState<IEpisode>(route.params.episode);
  const episodeId: string = route.params.episodeId;

  const navigation = useNavigation();

  const {loading} = useQuery(GET_EPISODE, {
    variables: {id: episodeId},
    skip: !episodeId,
    onCompleted: data => {
      console.table(data.episode.name);
      setEpisode(data.episode);
    },
    onError: error => {
      console.log('error', error);
    },
  });

  if (loading)
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading ...</Text>
      </View>
    );

  const infoToShow = [
    {label: 'Name', value: episode?.name, icon: 'info', id: '1'},
    {
      label: 'Air Date',
      value: episode?.air_date,
      icon: 'calendar-alt',
      id: '2',
    },
    {label: 'Code', value: episode?.episode, icon: 'qrcode', id: '3'},
  ];
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.secondaryBackground,
      }}>
      <SectionText>Info</SectionText>
      {infoToShow.map(info => (
        <InfoItem
          key={info.label}
          iconName={info.icon}
          label={info.label}
          value={info.value}
        />
      ))}
      <SectionText>Characters</SectionText>
      {episode?.characters.map((character, index) => (
        <Pressable
          key={index}
          onPress={() => {
            navigation.navigate(Screen.CharacterDetails, {
              characterId: character.id,
            });
          }}>
          <CharacterItem character={character} simplified />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.secondaryBackground,
  },
  name: {
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 25,
    margin: 15,
  },
});

export default EpisodeDetails;
