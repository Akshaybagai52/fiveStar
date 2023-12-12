import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import { Headline } from 'react-native-paper';

const buttons = [
  { text: 'Handover Certificate', route: 'Handover' },
  { text: 'Damaged Certificate', route: 'Damaged' },
  { text: 'Day Labour Docket', route: 'Day Labour Docket' },
  { text: 'Safety Toolbox Discussion', route: 'Safety Toolbox Discussion' },
  { text: 'Reporting Unsafe Scaffolding', route: 'Reporting Unsafe Scaffolding' },
  { text: 'Accident Investigation', route: 'Accident Investigation' },
  { text: 'Monthly Inspection', route: 'Monthly Inspection' },
  { text: 'Scaffold Tampering Investigation', route: 'Scaffold Tampering Investigation' },
  { text: 'Site Audit Form', route: 'Site Audit Form' },
  { text: 'Pre Start - Base out checklist', route: 'Pre Start - Base out checklist' },
  { text: 'Post Tender Checklist', route: 'Post Tender Checklist' },
  { text: 'Material Order', route: 'Material Order' },
  // Add more buttons as needed
];

const AllCertificates = ({ navigation }: any) => {
  const handleButtonPress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={[commonStyles.androidPTop, commonStyles.commonContainer]}>
      <ScrollView>
        <Headline style={[commonStyles.mb15]}>List of All Certificates</Headline>
        {buttons.map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonPress(button.route)}
            style={styles.navigation}>
            <View style={styles.view}>
              <Text style={styles.text}>{button.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navigation: {
    alignItems: 'center',
    backgroundColor: '#1D3F74',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  view: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default AllCertificates;
