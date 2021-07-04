import React, {Fragment, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
} from 'react-native';
import {IEpisode} from 'interfaces';
import {Colors} from 'utils/colors';
import EpisodeItem from 'components/EpisodeItem';
import InfoItem from 'components/InfoItem';
import ScreenHeadText from 'components/ScreenHeadText';
import SectionText from 'components/SectionText';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import {GET_CHARACTER} from '../graphql/query/getCharacter';
import {useQuery} from '@apollo/client';

const CharacterDetails = ({route}: {route: any}) => {
  const [character, setCharacter] = useState(route.params.character);
  const characterId = route.params.characterId;

  const navigation = useNavigation();

  const {loading} = useQuery(GET_CHARACTER, {
    variables: {id: characterId},
    skip: !characterId,
    onCompleted: data => {
      setCharacter(data.character);
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
    {label: 'Species', value: character?.species, icon: 'paw', id: '1'},
    {label: 'Gender', value: character?.gender, icon: 'user', id: '2'},
    {label: 'Status', value: character?.status, icon: 'heartbeat', id: '3'},
    {label: 'Location', value: character?.location.name, icon: 'map', id: '4'},
    {
      label: 'Origin',
      value: character?.origin.name,
      icon: 'location-arrow',
      id: '5',
    },
  ];
  return (
    <Fragment>
      <ScreenHeadText>{character?.name}</ScreenHeadText>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{uri: character?.image}} style={styles.image} />
        </View>
        <SectionText>Info</SectionText>
        {infoToShow.map(info => (
          <InfoItem
            key={info.label}
            iconName={info.icon}
            label={info.label}
            value={info.value}
          />
        ))}
        <SectionText>Episodes</SectionText>
        {character?.episode.map((episode: IEpisode, index: number) => (
          <Pressable
            key={index}
            onPress={() => {
              navigation.navigate(Screen.EpisodeDetails, {
                episodeId: episode.id,
              });
            }}>
            <EpisodeItem episodeName={episode.name} date={episode.air_date} />
          </Pressable>
        ))}
      </ScrollView>
    </Fragment>
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

export default CharacterDetails;
