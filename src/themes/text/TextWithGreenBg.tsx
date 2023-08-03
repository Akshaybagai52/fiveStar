import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';


interface CustomHeaderProps {
  text: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c7fe1a',
    padding: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#14274E'
  },
});

export default CustomHeader;
