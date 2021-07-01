import React from 'react';
import {View, Image, Text, Button, StyleSheet} from 'react-native';

const CharacterDetails = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {character} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={{uri: character.image}} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Characters');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default CharacterDetails;
