import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatScreen from './pages/ChatScreen';
import Splash from './pages/Splash';
import AnimateExample from './pages/AnimateExample';
import Detail from './pages/Detail';
import BasicCalendar from './pages/BasicCalendar';
import BasicCarousel from './pages/BasicCarousel';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Animation" component={AnimateExample} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="BasicCalendar" component={BasicCalendar} />
      <Tab.Screen name="BasicCarousel" component={BasicCarousel} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Router;
