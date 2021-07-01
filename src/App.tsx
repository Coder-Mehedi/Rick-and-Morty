import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Characters from './routes/Characters';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from './utils/colors';
import Episodes from './components/Episodes';
import Locations from './components/Locations';

const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName = '';
            let size = 20;
            if (route.name === 'Characters') iconName = 'id-card';
            if (route.name === 'Episodes') iconName = 'tv';
            if (route.name === 'Locations') iconName = 'map';
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
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="Episodes" component={Episodes} />
        <Tab.Screen name="Locations" component={Locations} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
