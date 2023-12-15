import {View, Image, TouchableOpacity, Text} from 'react-native';
import {myStyles} from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/type/types';
import useUserInformation from '../../hooks/userInformation';

type GetStartedNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyTabs'
>;

const GetStarted = ({navigation}: {navigation: GetStartedNavigationProp}) => {
  
  const {username, userEmail} = useUserInformation();
  const handleGetStartedPress = () => {
    let route = username && userEmail ? "MyTabs" : "Login"
    navigation.navigate("Login");
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
