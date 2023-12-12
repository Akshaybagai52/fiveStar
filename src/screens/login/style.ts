import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create({
    parent: {
      flex: 1,
      padding: 20,
      backgroundColor:  '#fff',
    //   height: screenHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      borderRadius: 8,
      width: '100%',
    },
    passwordInput: {
      flexDirection: 'row',
    },
    eyeIcon: {
      position: 'absolute',
      top: '50%',
      transform: [{translateY: -20}],

      right: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'#333',
    },
    forgot: {
      alignSelf: 'flex-end',
      color: '#333',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginBottom: 15,
      width: '100%',
      color:'#333',
    },
    submitButton: {
      backgroundColor: '#c7fe1a',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 15,
    },
    submitButtonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
    },
    closeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: '#ccc',
      borderRadius: 6,
      alignSelf: 'flex-end',
    },
    closeButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    toggleButton: {
      backgroundColor:'#ccc',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color:'#333',
      fontWeight: 'bold',
    },
    darkMode: {
      position: 'absolute',
      top: 0,
      right: 15,
    },
  });