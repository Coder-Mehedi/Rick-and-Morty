import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import EpisodeDetails from 'screens/EpisodeDetails';
import {CharactersProvider} from 'components/_context/charactersContext';
import CharacterDetails from 'screens/CharacterDetails';
import Characters from 'screens/Characters';
import {Screen} from 'utils/screens';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';

const Stack = createStackNavigator();

const CharactersRoute = ({navigation}: any) => {
  return (
    <CharactersProvider>
      <Stack.Navigator screenOptions={navigatorHeaderOptions}>
        <Stack.Screen
          name={Screen.Characters}
          component={Characters}
          options={{
            headerLeft: () => (
              <FontAwesome5
                name="bars"
                size={25}
                color={Colors.focused}
                onPress={() => navigation.openDrawer()}
                style={{paddingLeft: 10}}
              />
            ),
          }}
        />
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
