// React
import React from 'react';

// Libraries
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './src/screens/home';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen
        name="details"
        component={Details}
        options={{title: 'Details'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
