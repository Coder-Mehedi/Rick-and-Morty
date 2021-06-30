// In App.js in a new project

import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';

function HomeScreen({navigation, route}: {navigation: any; route: any}) {
  const {character} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={{uri: character.image}} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 20,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default App;
