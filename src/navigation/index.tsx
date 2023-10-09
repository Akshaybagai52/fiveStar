// src/navigation/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import DrawerNavigation from './DrawerNavigation';
import { Provider } from 'react-redux';
import store from '../store';
import { CertificateStack, GetStartedStack, HandoverDrawer, MyTabs } from './DrawerNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function AppNavigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="GetStartedStack" component={GetStartedStack} options={{ headerShown: false }} />
          <Stack.Screen name="HandoverDrawer" component={HandoverDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="AllCertificates" component={CertificateStack} options={{ headerShown: false }} />
          <Stack.Screen name="MyTabs" component={MyTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default AppNavigation;
