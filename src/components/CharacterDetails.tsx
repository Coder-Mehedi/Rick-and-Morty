import React, {Fragment} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {ICharacter} from '../interfaces';
import {Colors} from '../utils/colors';
import EpisodeItem from './_root/EpisodeItem';
import InfoItem from './_root/InfoItem';
import ScreenHeadText from './_root/ScreenHeadText';
import SectionText from './_root/SectionText';

interface InfoItemProps {
  iconName: string;
  label: string;
  value: string;
}

interface EpisodeItemProps {
  episodeName: string;
  date: string;
}

const CharacterDetails = ({route}: {route: any}) => {
  const character: ICharacter = route.params.character;

  const infoToShow = [
    {label: 'Species', value: character.species, icon: 'paw', id: '1'},
    {label: 'Gender', value: character.gender, icon: 'user', id: '2'},
    {label: 'Status', value: character.status, icon: 'heartbeat', id: '3'},
    {label: 'Location', value: character.location.name, icon: 'map', id: '4'},
    {
      label: 'Origin',
      value: character.origin.name,
      icon: 'location-arrow',
      id: '5',
    },
  ];
  return (
    <Fragment>
      <ScreenHeadText>{character.name}</ScreenHeadText>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{uri: character.image}} style={styles.image} />
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
        {character.episode.map(episode => (
          <EpisodeItem
            key={episode.name}
            episodeName={episode.name}
            date={episode.air_date}
          />
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
