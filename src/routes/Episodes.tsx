import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from '../utils/screens';
import {EpisodesProvider} from '../components/_context/episodesContext';
import Episodes from '../screens/Episodes';
import EpisodeDetails from '../screens/EpisodeDetails';
import CharacterDetails from '../screens/CharacterDetails';

const Stack = createStackNavigator();

const EpisodesRoute = () => {
  return (
    <EpisodesProvider>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name={Screen.Episodes} component={Episodes} />
        <Stack.Screen name={Screen.EpisodeDetails} component={EpisodeDetails} />
        <Stack.Screen
          name={Screen.CharacterDetails}
          component={CharacterDetails}
        />
      </Stack.Navigator>
    </EpisodesProvider>
  );
};

export default EpisodesRoute;
