import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import commonStyles from '../../styles/commonStyles';

const TestimonialCard = ({data}: any) => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <View
            style={[
              commonStyles.card,
              commonStyles.shadowProp,
              commonStyles.elevation,
            ]}>
            <Icon name={item.icon} size={35} color="#47b2e4" />
            <Text
              style={[
                commonStyles.textDarkBlue,
                commonStyles.heading26,
                commonStyles.mt5,
              ]}>
              {item.heading}
            </Text>
            <Text style={[commonStyles.text16, commonStyles.mt5]}>
              {item.description}
            </Text>
          </View>
        );
      })}
    </>
  );
};

export default TestimonialCard;
