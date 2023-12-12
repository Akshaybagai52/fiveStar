import {View, Image, TouchableOpacity, Text} from 'react-native';
import {myStyles} from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/type/types';

type GetStartedNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyTabs'
>;

const GetStarted = ({navigation}: {navigation: GetStartedNavigationProp}) => {
  const handleGetStartedPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={myStyles.container}>
      <Image
        source={require('../../assets/logo/logo.png')}
        style={myStyles.logo}
      />
      <TouchableOpacity style={myStyles.button} onPress={handleGetStartedPress}>
        <Text style={myStyles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;
