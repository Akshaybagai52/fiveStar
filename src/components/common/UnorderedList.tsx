import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UnorderedListProps {
  items: string[];
}

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.bullet}>• </Text>
          <Text style={styles.listText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10, 
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bullet: {
    fontSize: 16,
    marginRight: 5,
  },
  listText: {
    fontSize: 16
  }
});

export default UnorderedList;
