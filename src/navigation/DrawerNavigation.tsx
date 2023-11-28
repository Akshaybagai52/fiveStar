import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import GetStarted from '../screens/getstarted/GetStarted';
import Handover from '../screens/certificates/handover-certificate/Handover';
import Login from '../components/common/LoginForm';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Contact from '../screens/contact/Contact';
import {Damaged} from '../screens/certificates/damagedOrMissing';
import {DayLabour} from '../screens/certificates/day-labour-docket';
import {SafetyToolbox} from '../screens/certificates/safety-toolbox-discussion';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AllCertificates from '../screens/certificates/list-of-certificates/AllCertificates';
import {SafetyIncident} from '../screens/certificates/safety-incident';
import {ReportingUnsafe} from '../screens/certificates/reporting-unsafe-scaffold';
import {AccidentInvestigation} from '../screens/certificates/accident-investigation';
import {MonthlyInspection} from '../screens/certificates/monthly-inspection';
import {ScaffoldTempering} from '../screens/certificates/scaffold-tempering-investigation';
import {MaterialOrder} from '../screens/material-order-process';
import {PreStart} from '../screens/certificates/pre-start-baseout-checklist';
import {PostTender} from '../screens/certificates/post-tender-checklist';
import {SiteAudit} from '../screens/certificates/site-audit-form';
import {MaterialCheckout} from '../screens/material-checkout';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const speechReducerValues = useSelector((state: any) => state?.speech);
let activeTab: string;
export function HandoverDrawer() {
  const [expanded, setExpanded] = React.useState(true);
  const route = useRoute();
  activeTab = route.name;
  // console.log(route.name);
  const handlePress = () => setExpanded(!expanded);
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          //   backgroundColor: '#c6cbef',
          width: '85%',
        },
      }}>
      {/* <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tabs" component={MyTabs} /> */}
      <Drawer.Screen name="AllCertificates" component={AllCertificates} />

      <Drawer.Screen name="Handover" component={Handover} />
      <Drawer.Screen name="Damaged" component={Damaged} />
      <Drawer.Screen name="Day Labour Docket" component={DayLabour} />
      <Drawer.Screen
        name="Safety Toolbox Discussion"
        component={SafetyToolbox}
      />
      <Drawer.Screen name="Safety Injured" component={SafetyIncident} />
      <Drawer.Screen
        name="Reporting Unsafe Scaffolding"
        component={ReportingUnsafe}
      />
      <Drawer.Screen
        name="Accident Investigation"
        component={AccidentInvestigation}
      />
      <Drawer.Screen name="Monthly Inspection" component={MonthlyInspection} />
      <Drawer.Screen
        name="Scaffold Tampering Investigation"
        component={ScaffoldTempering}
      />
      <Drawer.Screen name="Site Audit Form" component={SiteAudit} />
      <Drawer.Screen
        name="Pre Start - Base out checklist"
        component={PreStart}
      />
      <Drawer.Screen name="Post Tender Checklist" component={PostTender} />
      <Drawer.Screen name="Material Order" component={MaterialOrder} />
      {/* <Drawer.Screen name="Material Checkout" component={MaterialCheckout
      } /> */}
      {/* <Drawer.Screen name="Help Center" component={Contact} /> */}
    </Drawer.Navigator>
  );
}

export function CertificateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AllCertificates" component={AllCertificates} />

      <Stack.Screen name="Handover" component={Handover} />
      <Stack.Screen name="Damaged" component={Damaged} />
      <Stack.Screen name="Day Labour Docket" component={DayLabour} />
      <Stack.Screen
        name="Safety Toolbox Discussion"
        component={SafetyToolbox}
      />
      <Stack.Screen name="Safety Injured" component={SafetyIncident} />
    </Stack.Navigator>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FF8C00"
      inactiveColor="#FCF6F5"
      barStyle={{
        backgroundColor: '#14274E',
      }}
      shifting={true}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'blue',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="HandoverDrawer"
        component={HandoverDrawer}
        options={{
          tabBarLabel: 'Certificates',
          tabBarColor: 'yellow',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="file-certificate"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Help Center"
        component={Contact}
        options={{
          tabBarLabel: 'Help',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="support-agent" color={color} size={26} />
          ),
          tabBarColor: 'red',
        }}
      />
    </Tab.Navigator>
  );
}

export function GetStartedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Material Checkout"
        component={MaterialCheckout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help Center"
        component={Contact}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
