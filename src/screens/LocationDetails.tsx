import React, {useState} from 'react';
import {ScrollView, Pressable} from 'react-native';
import {ILocation} from 'interfaces';
import {Colors} from 'utils/colors';
import InfoItem from 'components/InfoItem';
import SectionText from 'components/SectionText';
import {useQuery} from '@apollo/client';
import {useNavigation} from '@react-navigation/native';
import {Screen} from 'utils/screens';
import CharacterItem from 'components/CharacterItem';
import GET_LOCATION from 'graphql/query/getLocation.gql';
import Loading from 'components/loading';

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

  if (loading) return <Loading />;

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
          <CharacterItem character={character} simplified />
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default LocationDetails;
