import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Field, ErrorMessage, useFormikContext} from 'formik';
import {useSelector} from 'react-redux';
import commonStyles from '../../styles/commonStyles';
import { TextInputGroupProps } from '../../types/interfaces/types';

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  inputFields,
  username,
  userEmail,
  userPhoneNumber
}) => {
  const [inputValues, setInputValues] = useState<{[name: string]: string}>({});
  // if (username) {
  //   console.log(username, 'inifdgnput');
  //   console.log(userPhoneNumber, 'inifdgnput');
  // }
  const speechReducerValues = useSelector((state: any) => state?.speech);
  const addingZero = (time: number) => {
    return time >= 10 ? time : `0${time}`;
  };
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();
  const hourseIn12 = currentHours >= 12 ? currentHours - 12 : currentHours;
  const amPm = currentHours >= 12 ? 'PM' : 'AM';

  const time = `${addingZero(hourseIn12)} : ${addingZero(
    currentMinutes,
  )} : ${addingZero(currentSeconds)} ${amPm}`;
  // let obj = addressOptions.find((o:any) => o?.values ==values?.projectDetails?.projectId);
  // useEffect(() => {
  //   setInputValues(prevInputValues => ({
  //     ...prevInputValues,
  //     // 'projectDetails.customerABN': obj ? obj?.customer_abn : '',
  //     'projectDetails.workCompletion': speechReducerValues.audioVoice[0],
  //     'signatures.customerEmail2': speechReducerValues.userInformation.email,
  //     'signatures.customerName': speechReducerValues.userInformation.name,
  //     'signatures.DateTime': time,
  //   }));
  // }, [speechReducerValues.audioVoice]);
  const handleInputChange = (name: string, value: string) => {
    setInputValues(prevInputValues => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  // const formik = useFormikContext();
  const formik = useFormikContext();

  useEffect(() => {
    inputFields.forEach((inputField) => {
      if(inputField.prefilled) {
        if (inputField.prefilledUsername && username) {
          formik.setFieldValue(inputField.name, username);
        }
        if (inputField.prefilledUserEmail && userEmail) {
          formik.setFieldValue(inputField.name, userEmail);
        }
        if (inputField.prefilledUserPhoneNumber && userPhoneNumber) {
          formik.setFieldValue(inputField.name, userPhoneNumber);
        }
      }
    });
  }, [ username]);
  
  
  return (
    <View>
      {inputFields.map((inputField, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.label}>
            {inputField.label}
            {inputField.showAsterisk && <Text style={styles.asterisk}>*</Text>}
          </Text>
          <Field name={inputField.name}>
            {({field, form, meta}: {field: any; form: any; meta: any}) => (
              <>
                <TextInput
                  value={field.value}
                  style={styles.textInput}
                  onChangeText={(e: any) => {
                    form.setFieldValue(inputField.name, e);
                    handleInputChange(inputField.name, e);
                  }}
                  placeholder={inputField.placeholder}
                  multiline={inputField.multiline}
                  numberOfLines={inputField.numberOfLines}
                />
                <ErrorMessage
                  name={inputField.name}
                  render={msg => (
                    <Text style={[commonStyles.errorText]}>{msg}</Text>
                  )} // Use your own Text component
                />
              </>
            )}
          </Field>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  asterisk: {
    color: 'red', // Add the red color to the asterisk
  },
  textInput: {
    width: '90%',
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
  },
});

export default TextInputGroup;
