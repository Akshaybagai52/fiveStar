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
} from 'react-native';
const screenHeight = Dimensions.get('window').height;

const Login = ({navigation}: any) => {
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('name', `${firstName}`);
    formData.append('email', email);
  };
  const handleGetStartedPress = () => {
    navigation.navigate('Handover');
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
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.forgot}>Forgot Password ?</Text>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleGetStartedPress}>
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
