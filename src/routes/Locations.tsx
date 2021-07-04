import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Screen} from 'utils/screens';
import Locations from 'screens/Locations';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'utils/colors';
import {navigatorHeaderOptions} from 'utils/navigatorHeaderOptions';

const Stack = createStackNavigator();

const LocationsRoute = ({navigation}: any) => {
  return (
    <Stack.Navigator screenOptions={navigatorHeaderOptions}>
      <Stack.Screen
        name={Screen.Locations}
        component={Locations}
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
    </Stack.Navigator>
  );
};

export default LocationsRoute;
