import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../../styles/commonStyles';

const BulletPoints = ({
  heading,
  listText,
}: {
  heading: string;
  listText: string[];
}) => {
  return (
    <View style={styles.container}>
      <View style={{padding: 15}}>
        <Text style={[commonStyles.text20, commonStyles.fontBold]}>
          {heading}
        </Text>
        {listText?.map((point, index) => (
          <View style={styles.bulletItem} key={index}>
            <Text style={styles.bullet}>• </Text>
            <Text>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    elevation: 2,
    padding: 10,
    marginTop: 20,

    // Adjust the margin according to your layout
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  bullet: {
    fontSize: 20,
    marginRight: 5,
  },
});

export default BulletPoints;
