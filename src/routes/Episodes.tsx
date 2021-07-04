import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import {EpisodesProvider} from 'components/_context/episodesContext';
import Episodes from 'screens/Episodes';
import EpisodeDetails from 'screens/EpisodeDetails';
import CharacterDetails from 'screens/CharacterDetails';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';

const Stack = createStackNavigator();

const EpisodesRoute = ({navigation}: any) => {
  return (
    <EpisodesProvider>
      <Stack.Navigator screenOptions={navigatorHeaderOptions}>
        <Stack.Screen
          name={Screen.Episodes}
          component={Episodes}
          options={{
            // headerTitleContainerStyle: {
            //   left: 50,
            // },
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
