import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import commonStyles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
const locationData = [
  {
    icon: 'location-on',
    title: 'Location:',
    description: '61 Long St, Smithfield NSW 2164',
  },
  {
    icon: 'email',
    title: 'Email:',
    description: 'sales@fivestarscaffolding.com.au',
  },
  {
    icon: 'call',
    title: 'Call:',
    description: '(02) 9632 3466',
  },
];

const Contact = () => {
  return (
    <View style={[commonStyles.commonContainer]}>
      <ScrollView>
        <Text
          style={[
            commonStyles.heading32,
            commonStyles.textDarkBlue,
            commonStyles.textCenter,
            commonStyles.mb15,
          ]}>
          CONTACT
        </Text>
        <View
          style={[
            commonStyles.card,
            commonStyles.shadowProp,
            commonStyles.elevation,
          ]}>
          {locationData.map((item: any, index: number) => {
            return (
              <View
                key={index}
                style={[
                  commonStyles.flexRow,
                  commonStyles.rowCenter,
                  commonStyles.mb15,
                ]}>
                <Icon
                  name={item.icon}
                  size={40}
                  color="#47b2e4"
                  style={[commonStyles.mR10]}
                />
                <View>
                  <Text
                    style={[commonStyles.heading26, commonStyles.textDarkBlue, ]}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;
