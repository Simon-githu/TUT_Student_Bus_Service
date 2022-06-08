import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import StudentScreen from './screens/StudentScreen';
import BusDriverScreen from './screens/BusDriverScreen';
import BusMonitorScreen from './screens/BusMonitorScreen';
import StudentHomeScreen from './screens/StudentHomeScreen';
import BusDriverHomeScreen from './screens/BusDriverHomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Student" component={StudentScreen} />
        <Stack.Screen name="BusDriver" component={BusDriverScreen} />
        <Stack.Screen name="BusMonitor" component={BusMonitorScreen} />
        <Stack.Screen name="StudentHomeScreen" component={StudentHomeScreen} />
        <Stack.Screen name="BusDriverHomeScreen" component={BusDriverHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 
