import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';

const Address = () => {
  return (
    <View>
      <View style={{padding: 10, marginBottom: 15}}>
                  <Text>
                    <Icon
                      name="office-building-marker"
                      size={20}
                      color="#112D4E"
                    />{' '}
                    Five Star Scaffolding Pvt Ltd
                  </Text>
                  <Text style={{marginTop: 10}}>
                    <Icon name="license" size={20} color="#112D4E" /> ABN 70 130
                    008 212
                  </Text>
                  <Text style={{marginTop: 10}}>
                    <Icon1 name="street-view" size={20} color="#112D4E" /> 61
                    Long Street, Smithfield NSW 2164
                  </Text>
                  <Text style={{marginTop: 10}}>
                    <Icon2 name="phone-call" size={20} color="#112D4E" /> (02)
                    9632 3466
                  </Text>
                </View>
    </View>
  )
}

export default Address