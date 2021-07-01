import {createStackNavigator} from '@react-navigation/stack';
import React, {Fragment} from 'react';
import CharacterDetails from '../components/CharacterDetails';
import CharactersScreen from '../components/CharactersScreen';

const Stack = createStackNavigator();

const Characters = ({navigation}: {navigation: any}) => {
  return (
    <Fragment>
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default Characters;
