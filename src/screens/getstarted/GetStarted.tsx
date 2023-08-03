import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { Text } from 'react-native-paper';
import React from 'react'

const GetStarted = ({ navigation }:any) => {
  const handleGetStartedPress = () => {
    navigation.navigate('Handover');
};
  return (
    <View style={styles.container}>
            {/* Logo image */}
            <Image source={require('../../assets/logo/logo.png')} style={styles.logo} />
            <TouchableOpacity style={styles.button} onPress={handleGetStartedPress}>
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DBE2EF',
  },
  logo: {
      width: 300,
      objectFit:"contain",
      height: 150,
      marginBottom: 20,
  },
  header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
  },
  button: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: '#112D4E',
      padding: 15,
      borderRadius: 5,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
  },
});

export default GetStarted