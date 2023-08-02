import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/getstarted/GetStarted';
import Login from '../components/common/LoginForm';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted}  />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default Navigation