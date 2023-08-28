import {View, ScrollView, Platform, KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-paper';
import React from 'react';
import commonStyles from '../../styles/commonStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import * as yup from 'yup';
import {TextInput} from 'react-native';
import {Keyboard} from 'react-native';
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
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Name is required'),
    subject: yup.string().required('Subject can"t be empty '),
    message: yup.string().required('message is required'),
  });
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
            onSubmit={() => console.log('first')}>
            {({isSubmitting, handleChange}) => (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex:1}}>
                <View>
                  <TextInput
                    onChangeText={handleChange('name')}
                    placeholder="Email"
                    style={commonStyles.textInput}
                  />
                </View>
              </KeyboardAvoidingView>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

export default Contact;
