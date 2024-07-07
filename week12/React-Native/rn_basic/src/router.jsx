import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatScreen from './pages/ChatScreen';
import Splash from './pages/Splash';
import AnimateExample from './pages/AnimateExample';
import Detail from './pages/Detail';
import BasicCalendar from './pages/BasicCalendar';
import Settings from './pages/Settings';
import Home from './pages/Home';
import Notice from './pages/Notice';
import NoticeDetail from './pages/NoticeDetail';
import CustomCameraRoll from './components/CustomCameraRoll';
import VideoPlayer from './pages/VideoPlayer';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="VideoPlayer" component={VideoPlayer} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>

    )
}
const Router = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            // gestureEnabled: false
        }}>
            <Stack.Screen name="Splash" component={Splash} options={{ animation: 'fade_from_bottom'}} />
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Notice' component={Notice} />
            <Stack.Screen name='NoticeDetail' component={NoticeDetail} />
            <Stack.Screen name='CustomCameraRoll' component={CustomCameraRoll} />
        </Stack.Navigator>
    )
}

export default Router;