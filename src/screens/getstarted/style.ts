import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DBE2EF',
    },
    logo: {
      width: 300,
      objectFit: 'contain',
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
      bottom: 80,
      right: 20,
      backgroundColor: '#c7fe1a',
      padding: 15,
      borderRadius: 5,
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });