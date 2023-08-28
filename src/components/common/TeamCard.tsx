import {View, Image} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import React from 'react';
import commonStyles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Entypo';

const TeamCard = ({teamData}: any) => {
  return teamData.map((item: any, index:number) => {
    return (
      <View style={[commonStyles.elevation, commonStyles.card]} key={index}>
        <View style={[commonStyles.flexRow]}>
          <Image
            source={item.img}
            style={{
              height: 95,
              width: 95,
              borderRadius: 50,
              objectFit: 'contain',
            }}
          />
          <View style={[commonStyles.mL25]}>
            <Text
              style={[
                commonStyles.text20,
                commonStyles.textDarkBlue,
                commonStyles.fontBold,
              ]}>
              {item.name}
            </Text>
            <Text >{item.occupation}</Text>
            <Divider />
            <View style={[commonStyles.flexRow, commonStyles.mTop15, {gap: 6}]}>
              <Icon name="twitter-with-circle" size={25} color="#1DA1F2" />
              <Icon name="instagram-with-circle" size={25} color="#E4405F" />
              <Icon name="facebook-with-circle" size={25} color="#1877F2" />
              <Icon name="linkedin-with-circle" size={25} color="#0077B5" />
            </View>
          </View>
        </View>
      </View>
    );
  });
};

export default TeamCard;
