import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import React from 'react';
import commonStyles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik,ErrorMessage} from 'formik';
import * as yup from 'yup';
import {TextInput} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
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
  const styles = StyleSheet.create({
    buttonStyles: {
      alignSelf: 'flex-start',
    },
    buttonContainer: {
      marginTop: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    mapContainer: {
      marginVertical: 20,
      height: 300,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      overflow: 'hidden',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    mapTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
  });
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required'),
    subject: yup.string().required('Subject can"t be empty '),
    message: yup.string().required('message is required'),
  });
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
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
                  size={34}
                  color="#47b2e4"
                  style={[commonStyles.mR10]}
                />
                <View>
                  <Text
                    style={[commonStyles.heading22, commonStyles.textDarkBlue]}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                </View>
              </View>
            );
          })}
          <View style={styles.mapContainer}>
            <Text style={styles.mapTitle}>Company's Location</Text>
            <MapView style={styles.map} initialRegion={initialRegion}>
              <Marker
                coordinate={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                }}
                title="Marker Title"
                description="Marker Description"
              />
            </MapView>
          </View>
        </View>
        <View
          style={[
            commonStyles.card,
            commonStyles.shadowProp,
            commonStyles.elevation,
          ]}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log('first', values)}>
           {({isSubmitting, handleChange, handleSubmit,touched, errors}) => {
              const handlePress = () => {
                handleSubmit(); // Call Formik's handleSubmit function here
              };
              return (

              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}>
                <View style={[{gap: 20}]}>
                  <TextInput
                    onChangeText={handleChange('email')}
                    placeholder="Email"
                    style={[commonStyles.textInput, {borderColor: touched.email && errors.email ? 'red' : "#ccc"}]}
                  />
                  {touched.email && errors.email && (<Text style={commonStyles.errorText}>{errors.email}</Text>)}
                  {/* <ErrorMessage component={Text} /> */}
                  <TextInput
                    onChangeText={handleChange('name')}
                    placeholder="Name"
                    style={[commonStyles.textInput, {borderColor: touched.name && errors.name ? 'red' : "#ccc"}]}

                  />
                  {touched.name && errors.name && (<Text style={commonStyles.errorText}>{errors.name}</Text>)}

                  <TextInput
                    onChangeText={handleChange('subject')}
                    placeholder="Subject"
                    style={[commonStyles.textInput, {borderColor: touched.subject && errors.subject ? 'red' : "#ccc"}]}

                  />
                  {touched.subject && errors.subject && (<Text style={commonStyles.errorText}>{errors.subject}</Text>)}

                  <TextInput
                    onChangeText={handleChange('message')}
                    placeholder="Message"
                    style={[commonStyles.textArea, {borderColor: touched.message && errors.message ? 'red' : "#ccc"}]}

                    multiline={true}
                    numberOfLines={4}
                  />
                  {touched.message && errors.message && (<Text style={commonStyles.errorText}>{errors.message}</Text>)}

                </View>
                <Button
                  mode="elevated"
                  style={[styles.buttonStyles, commonStyles.mTop15]}
                  textColor="#47b2e4"
                  rippleColor="#47b2e4"
                  onPress={handlePress}
          >
                  Send Message
                </Button>
              </KeyboardAvoidingView>
               )
              }}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;
