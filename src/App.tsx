import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CharactersRoute from 'routes/Characters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';
import {Screen} from 'utils/screens';
import EpisodesRoute from 'routes/Episodes';
import LocationsRoute from 'routes/Locations';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from 'components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: Colors.secondaryBackground,
          // width: 240,
          margin: 0,
        }}
        drawerContentOptions={{
          activeTintColor: Colors.focused,
          inactiveTintColor: Colors.inActive,
          labelStyle: {marginLeft: -20},
        }}>
        <Drawer.Screen
          options={{
            drawerIcon: props => <DrawerIcon {...props} iconName="id-card" />,
          }}
          name={Screen.Characters}
          component={CharactersRoute}
        />
        <Drawer.Screen
          name={Screen.Episodes}
          component={EpisodesRoute}
          options={{
            drawerIcon: props => <DrawerIcon {...props} iconName="tv" />,
          }}
        />
        <Drawer.Screen
          name={Screen.Locations}
          component={LocationsRoute}
          options={{
            drawerIcon: props => <DrawerIcon {...props} iconName="map" />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const DrawerIcon = ({focused, size, iconName}: any) => {
  return (
    <FontAwesome5
      name={iconName}
      size={size}
      color={focused ? Colors.focused : Colors.inActive}
    />
  );
};
export default App;
