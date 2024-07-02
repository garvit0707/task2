import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddContact from './AddContact';
import Home from './Home';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <Stack.Navigator initialRouteName='Home-Screen'>
        <Stack.Screen name = "Home-screen" component={Home}>
        </Stack.Screen>
        <Stack.Screen name = "Add-contact-screen"  component= {AddContact}> 
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default Navigation