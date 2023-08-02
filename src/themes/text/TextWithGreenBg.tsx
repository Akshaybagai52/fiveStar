import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
