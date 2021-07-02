import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from '../utils/screens';
import Locations from '../screens/Locations';

const Stack = createStackNavigator();

const LocationsRoute = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name={Screen.Episodes} component={Locations} />
    </Stack.Navigator>
  );
};

export default LocationsRoute;
