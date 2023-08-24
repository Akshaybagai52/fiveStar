
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GetStarted from '../screens/getstarted/GetStarted';
import Handover from '../screens/handover-certificate/Handover';
import Login from '../components/common/LoginForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import { Text } from 'react-native-paper';
// import {useSelector} from 'react-redux';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// const speechReducerValues = useSelector((state: any) => state?.speech);


export function HandoverDrawer() {
    return (
      <Drawer.Navigator screenOptions={{
        drawerStyle: {
        //   backgroundColor: '#c6cbef',
          width: "85%",
        },
      }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Handover" component={Handover}  />
      </Drawer.Navigator>
    );
  }
  
 export function GetStartedStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }


