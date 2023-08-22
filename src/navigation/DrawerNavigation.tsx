
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GetStarted from '../screens/getstarted/GetStarted';
import Handover from '../screens/handover-certificate/Handover';
import Login from '../components/common/LoginForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export function HandoverDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Handover" component={Handover} />
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

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ title: 'Welcome',  drawerIcon: () => null }}
      />
      <Drawer.Screen name="Login" component={Login}  options={{ drawerIcon: () => null }}/>
      <Drawer.Screen name="Handover" component={Handover} />
    </Drawer.Navigator>
  );
}

// export default DrawerNavigation;
