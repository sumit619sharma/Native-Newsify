import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    FlatList,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import Common from './src/common';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Stacker from './src/stack';
import WebComp from './src/webcomp';
import DrawerScreen from './src/drawerScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Drawer">
                <Stack.Screen name="Drawer" component={DrawerScreen} options={{headerShown: false}} />
                <Stack.Screen name="web" options={{headerShown: false}} component={WebComp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
