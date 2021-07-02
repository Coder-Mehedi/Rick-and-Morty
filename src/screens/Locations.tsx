import React from 'react';
import {View, Text} from 'react-native';
import SectionText from '../components/_root/SectionText';
import ScreenHeadText from '../components/_root/ScreenHeadText';
import InfoItem from '../components/_root/InfoItem';

function Locations() {
  return (
    <View>
      <ScreenHeadText>Locations</ScreenHeadText>
      <SectionText>Info</SectionText>
      <InfoItem iconName="info" label="Name" value="val" />
    </View>
  );
}
export default Locations;
