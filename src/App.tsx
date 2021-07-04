import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CharactersRoute from 'routes/Characters';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';
import {Screen} from 'utils/screens';
import EpisodesRoute from 'routes/Episodes';
import LocationsRoute from 'routes/Locations';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName = '';
            let size = 19;
            if (route.name === Screen.Characters) iconName = 'id-card';
            if (route.name === Screen.Episodes) iconName = 'tv';
            if (route.name === Screen.Locations) iconName = 'map';
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={focused ? Colors.focused : Colors.inActive}
              />
            );
          },
        })}
        activeColor={Colors.focused}
        inactiveColor={Colors.inActive}
        barStyle={{backgroundColor: Colors.secondaryBackground}}>
        <Tab.Screen name={Screen.Characters} component={CharactersRoute} />
        <Tab.Screen name={Screen.Episodes} component={EpisodesRoute} />
        <Tab.Screen name={Screen.Locations} component={LocationsRoute} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
