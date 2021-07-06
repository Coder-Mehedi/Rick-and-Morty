import React, {useState} from 'react';
import {ScrollView, Pressable} from 'react-native';
import {IEpisode} from 'interfaces';
import {Colors} from 'utils/colors';
import InfoItem from 'components/InfoItem';
import SectionText from 'components/SectionText';
import {useQuery} from '@apollo/client';
import {GET_EPISODE} from '../graphql/query/getEpisode';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import CharacterItem from 'components/CharacterItem';
import Loading from 'components/loading';

const EpisodeDetails = ({route}: {route: any}) => {
  const [episode, setEpisode] = useState<IEpisode>(route.params.episode);
  const episodeId: string = route.params.episodeId;

  const navigation = useNavigation();

  const {loading} = useQuery(GET_EPISODE, {
    variables: {id: episodeId},
    skip: !episodeId,
    onCompleted: data => {
      setEpisode(data.episode);
    },
    onError: error => {
      console.log('error', error);
    },
  });

  if (loading) return <Loading />;

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

export default EpisodeDetails;
