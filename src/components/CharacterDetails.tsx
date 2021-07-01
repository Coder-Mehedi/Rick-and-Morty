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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ICharacter} from 'src/interfaces';
import {Colors} from '../utils/colors';
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
    {label: 'Status', value: character.status, icon: 'tv', id: '3'},
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
          <CharacterDetails.InfoItem
            key={info.label}
            iconName={info.icon}
            label={info.label}
            value={info.value}
          />
        ))}
        <SectionText>Episodes</SectionText>
        {character.episode.map(episode => (
          <CharacterDetails.EpisodeItem
            key={episode.name}
            episodeName={episode.name}
            date={episode.air_date}
          />
        ))}
      </ScrollView>
    </Fragment>
  );
};

CharacterDetails.InfoItem = ({iconName, label, value}: InfoItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName} size={25} color={Colors.focused} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

CharacterDetails.EpisodeItem = ({episodeName, date}: EpisodeItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.episodeName}>{episodeName}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
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

  // InfoItem
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.secondaryBackground,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: Colors.separator,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 35,
    alignItems: 'center',
  },
  label: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
  },
  value: {
    marginLeft: 'auto',
    color: Colors.focused,
    fontSize: 20,
    maxWidth: '60%',
  },

  // EpisodeItem
  episodeName: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
    maxWidth: '50%',
  },

  date: {
    color: Colors.inActive,
    fontSize: 18,
    marginLeft: 'auto',
  },
});

export default CharacterDetails;
