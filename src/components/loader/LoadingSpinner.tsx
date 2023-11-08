import {View, Text} from 'react-native';
import React from 'react';
import {MD2Colors, ActivityIndicator} from 'react-native-paper';

const LoadingSpinner = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <Text>LoadingSpinner</Text> */}
      <ActivityIndicator
        animating={true}
        style={{flex: 1}}
        size="large"
        // color={MD2Colors.red800}
      />
    </View>
  );
};

export default LoadingSpinner;
