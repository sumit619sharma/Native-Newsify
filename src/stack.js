import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WebComp from './webcomp';
import Common from './common';

const Stack = createNativeStackNavigator();
export default function Stacker() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="web" options={{headerShown: false}} component={WebComp} />
        </Stack.Navigator>
    );
}
