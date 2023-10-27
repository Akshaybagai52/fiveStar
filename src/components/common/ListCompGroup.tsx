import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../../styles/commonStyles';

const ListCompGroup = ({list}:any) => {

  return (
    <View style={styles.container}>
      {list?.map((item: any, index: number) => {
        return (
          <View style={{ padding: 15 }} key={index}>
            <Text style={[commonStyles.text20, commonStyles.fontBold]}>
              {item?.heading}
            </Text>
            {item.listText?.map((point: string, index: number) => {
              return (
                <View style={styles.bulletItem} key={index}>
                  <Text style={styles.bullet}>• </Text>
                  <Text>{point}</Text>
                </View>
              );
            })}
          </View>
        );
      })}
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
  },
  bullet: {
    fontSize: 20,
    marginRight: 5,
  },
});

export default ListCompGroup;
