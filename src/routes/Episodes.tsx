import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from '../utils/screens';
import {EpisodesProvider} from '../components/_context/episodesContext';
import Episodes from '../screens/Episodes';

const Stack = createStackNavigator();

const EpisodesRoute = () => {
  return (
    <EpisodesProvider>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name={Screen.Episodes} component={Episodes} />
      </Stack.Navigator>
    </EpisodesProvider>
  );
};

export default EpisodesRoute;
