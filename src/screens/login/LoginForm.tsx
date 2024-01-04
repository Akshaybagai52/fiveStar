import axios from 'axios';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
import {ToggleButton} from 'react-native-paper';
// const screenHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {updateUserInfo} from '../../redux/mainSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {myStyles} from './style';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/type/types';

type GetStartedNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MyTabs'
>;
const Login = ({navigation}: {navigation: GetStartedNavigationProp}) => {
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    console.log(firstName);
    if (!firstName || !email) {
      return Alert.alert('Login Failed', 'Please fill all the details');
    }
    const formData = new FormData();
    formData.append('email', `${firstName}`);
    formData.append('password', email);
    axios
      .post('https://api.fivestaraccess.com.au/login.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(async res => {
        const status = res.data.status;
        dispatch(updateUserInfo(res.data));
        console.log(res.data.name);

        if (status === 'approved') {
          console.log(res.data.userid)
          await AsyncStorage.setItem('userEmail', res.data.email);
          await AsyncStorage.setItem('username', res.data.name);
          await AsyncStorage.setItem('userPhoneNumber', res.data.mobile_number);
          await AsyncStorage.setItem('userId', res.data.userid);
          navigation.navigate('MyTabs');
        } else {
          Alert.alert('Login Failed', 'Invalid Details.');
        }
      })
      .catch(err => {
        Alert.alert('Something Went Wrong');
      });
  };

  const handleGetStartedPress = () => {
    handleSubmit();
  };

  return (
    <View style={myStyles.parent}>
      <ToggleButton
        icon={isDarkMode ? 'weather-sunny' : 'theme-light-dark'}
        iconColor={isDarkMode ? 'white' : 'black'}
        value="bluetooth"
        onPress={toggleDarkMode}
        style={myStyles.darkMode}
      />
      <View style={myStyles.container}>
        <Text style={myStyles.title}>Login</Text>
        <TextInput
          style={myStyles.input}
          placeholder="Email Address"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor={isDarkMode ? 'white' : 'black'}
        />

        <View style={myStyles.passwordInput}>
          <TextInput
            style={myStyles.input}
            placeholder="Password"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={!showPassword}
            placeholderTextColor={isDarkMode ? 'white' : 'black'}
          />
          <TouchableOpacity
            style={myStyles.eyeIcon}
            onPress={handleTogglePasswordVisibility}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              // color="#000"
              color={isDarkMode ? 'white' : 'black'}
            />
          </TouchableOpacity>
        </View>
        <Text style={myStyles.forgot}>Forgot Password ?</Text>
        <TouchableOpacity
          style={myStyles.submitButton}
          onPress={handleGetStartedPress}
        >
          <Text style={myStyles.submitButtonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Login;
