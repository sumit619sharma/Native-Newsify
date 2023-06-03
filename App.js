import React, {useState,useEffect} from 'react';
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

import WebComp from './src/webcomp';
import DrawerScreen from './src/drawerScreen';
import SplashScreen from './src/splash';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
    const  [splashtime,setSplashTime] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            console.log("innerr");
            setSplashTime(false)
        }, 3000)
    },[])
    return (
        <NavigationContainer>
            <Stack.Navigator >
            {console.log("splash = ", splashtime)}
                 {splashtime ?  <Stack.Screen name="splash" component={SplashScreen} options={{headerShown: false}} />: null } 
                 <Stack.Screen name="Drawer" component={DrawerScreen} options={{headerShown: false}} />
                <Stack.Screen name="web" options={{headerShown: false}} component={WebComp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
