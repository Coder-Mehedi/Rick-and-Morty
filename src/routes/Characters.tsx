import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import EpisodeDetails from 'screens/EpisodeDetails';
import {CharactersProvider} from 'components/_context/charactersContext';
import CharacterDetails from 'screens/CharacterDetails';
import Characters from 'screens/Characters';
import {Screen} from 'utils/screens';

const Stack = createStackNavigator();

const CharactersRoute = () => {
  return (
    <CharactersProvider>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name={Screen.Characters} component={Characters} />
        <Stack.Screen
          name={Screen.CharacterDetails}
          component={CharacterDetails}
        />
        <Stack.Screen name={Screen.EpisodeDetails} component={EpisodeDetails} />
      </Stack.Navigator>
    </CharactersProvider>
  );
};

export default CharactersRoute;
