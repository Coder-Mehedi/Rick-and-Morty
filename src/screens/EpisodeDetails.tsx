import React, {Fragment} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {IEpisode} from '../interfaces';
import {Colors} from '../utils/colors';
import EpisodeItem from '../components/EpisodeItem';
import InfoItem from '../components/InfoItem';
import ScreenHeadText from '../components/ScreenHeadText';
import SectionText from '../components/SectionText';

const EpisodeDetails = ({route}: {route: any}) => {
  const episode: IEpisode = route.params.episode;

  const infoToShow = [
    {label: 'Name', value: episode.name, icon: 'info', id: '1'},
    {label: 'Air Date', value: episode.air_date, icon: 'calendar-alt', id: '2'},
    {label: 'Code', value: episode.episode, icon: 'qrcode', id: '3'},
  ];
  return (
    <Fragment>
      <ScreenHeadText>Episode Details</ScreenHeadText>
      <ScrollView>
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
        {episode.characters.map(character => (
          <EpisodeItem
            key={character.name}
            episodeName={character.name}
            date={character.created}
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

export default EpisodeDetails;
