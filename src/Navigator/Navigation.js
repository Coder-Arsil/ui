import React from 'react'
import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Screens/Home'
import Detail from '../Screens/Detail'

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
    headerShown : false
}

const HomeStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator
