
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GetStarted from '../screens/getstarted/GetStarted';
import Handover from '../screens/certificates/handover-certificate/Handover';
import Login from '../components/common/LoginForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import { Text } from 'react-native-paper';
import Contact from '../screens/contact/Contact';
import { Damaged } from '../screens/certificates/damagedOrMissing';
import { DayLabour } from '../screens/certificates/day-labour-docket';
import { SafetyToolbox } from '../screens/certificates/safety-toolbox-discussion';
// import {useSelector} from 'react-redux';
import { List } from 'react-native-paper';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
// const speechReducerValues = useSelector((state: any) => state?.speech);


export function HandoverDrawer() {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
    return (
      <Drawer.Navigator screenOptions={{
        drawerStyle: {
        //   backgroundColor: '#c6cbef',
          width: "85%",
        },
      }}>
        <Drawer.Screen name="Home" component={Home} />
        {/* <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section> */}
        
        <Drawer.Screen name="Handover" component={Handover}  />
        <Drawer.Screen name="Damaged" component={Damaged}  />
        <Drawer.Screen name="Day Labour Docket" component={DayLabour}  />
        <Drawer.Screen name="Safety Toolbox Discussion" component={SafetyToolbox}  />
        <Drawer.Screen name="Help Center" component={Contact}  />
      </Drawer.Navigator>
    );
  }
  
 export function GetStartedStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Help Center" component={Contact} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }


