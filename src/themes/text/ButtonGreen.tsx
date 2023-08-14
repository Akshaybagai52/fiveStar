import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';

interface buttonGreenProps {
  text: string;
  onPress:any;
}

export const ButtonGreen : React.FC<buttonGreenProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    backgroundColor: '#c7fe1a',
    padding: 15,
    borderRadius: 5,  
},
buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
},
});
