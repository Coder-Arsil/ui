import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './src/Navigator/Navigation'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </>
  )
}

export default App