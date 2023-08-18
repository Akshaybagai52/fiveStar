// In App.js in a new project

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './src/screens/getstarted/GetStarted';
import Handover from './src/screens/handover-certificate/Handover';
import Login from './src/components/common/LoginForm';
import store from './src/store';
import {Provider} from 'react-redux';
// import Home from './src/Home';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Handover" component={Handover} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
