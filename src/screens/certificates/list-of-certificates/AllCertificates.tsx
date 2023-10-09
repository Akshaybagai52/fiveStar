import { View, Text, SafeAreaView, Platform, ScrollView } from 'react-native'
import React from 'react'
import commonStyles from '../../../styles/commonStyles'
import { TouchableOpacity } from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context'

const AllCertificates = ({navigation}:any) => {
    const handleGetStartedPress = () => {
        navigation.navigate('Handover');
      };
      const handleGetStartedPress2 = () => {
        navigation.navigate('Damaged');
      };
  return (
    <SafeAreaView style={[commonStyles.androidPTop]}>
      <ScrollView>
        <Text>All Certificates</Text>
        <TouchableOpacity onPress={handleGetStartedPress}>
            <Text>Handover Certificate</Text>
            
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetStartedPress2}>
            <Text>Damaged Certificate</Text>
            
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AllCertificates