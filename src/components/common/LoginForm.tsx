import axios from 'axios';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Modal,
  Dimensions,
  Alert,
} from 'react-native';
const screenHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}: any) => {
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

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
      .then(res => {
        const status = res.data.status;

        if (status === 'approved') {
          navigation.navigate('Handover');
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
    <View style={styles.parent}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={firstName}
          onChangeText={setFirstName}
        />

        <View style={styles.passwordInput}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={email}
            onChangeText={setEmail}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={handleTogglePasswordVisibility}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="#000"
            />
          </TouchableOpacity>
        </View>
        {/* <TextInput style={styles.input} secureTextEntry={false} /> */}

        {/*  */}

        <Text style={styles.forgot}>Forgot Password ?</Text>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleGetStartedPress}
          // disabled={firstName.length > 0 && email.length ? false : true}
        >
          <Text style={styles.submitButtonText}>Login</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    height: screenHeight,
    justifyContent: 'center', // Center items along the primary axis (vertically)
    alignItems: 'center',
  },
  container: {
    borderRadius: 8,
    width: '100%',
  },
  passwordInput: {
    flexDirection: 'row',

  },
  eyeIcon: {
    position: 'absolute', // Step 2: Set position to absolute
    top: '50%', // Step 2: Vertically center the component at 50% from the top of the parent
    transform: [{ translateY: -20 }], // Step 3: Move the component up by half of its own height
   
    right: 15

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15,
    width: '100%'
  },
  submitButton: {
    backgroundColor: '#112D4E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 6,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
