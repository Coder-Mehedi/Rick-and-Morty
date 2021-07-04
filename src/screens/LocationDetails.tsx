import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text, View, Pressable} from 'react-native';
import {IEpisode, ILocation} from 'interfaces';
import {Colors} from 'utils/colors';
import InfoItem from 'components/InfoItem';
import SectionText from 'components/SectionText';
import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import Character from 'components/Character';
import {GET_LOCATION} from 'graphql/query/getLocation';

const LocationDetails = ({route}: {route: any}) => {
  const [location, setLocation] = useState<ILocation>(route.params.location);
  const locationId: string = route.params.locationId;

  const navigation = useNavigation();

  const {loading} = useQuery(GET_LOCATION, {
    variables: {id: locationId},
    skip: !locationId,
    onCompleted: data => {
      setLocation(data.episode);
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
    {label: 'Name', value: location?.name, icon: 'info', id: '1'},
    {
      label: 'Type',
      value: location?.type,
      icon: 'calendar-alt',
      id: '2',
    },
    {label: 'Dimension', value: location?.dimension, icon: 'qrcode', id: '3'},
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
      {location?.residents.map((character, index) => (
        <Pressable
          key={index}
          onPress={() => {
            navigation.navigate(Screen.CharacterDetails, {
              characterId: character.id,
            });
          }}>
          <Character character={character} simplified />
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

export default LocationDetails;
