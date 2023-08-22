import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {Field, ErrorMessage} from 'formik';
import {useSelector} from 'react-redux';

interface TextInputGroupProps {
  inputFields: Partial<{
    name: any; // Add the name field
    label: string;
    placeholder: string;
    showAsterisk?: boolean;
    multiline: boolean;
    numberOfLines: number;
  }>[];
}

const TextInputGroup: React.FC<TextInputGroupProps> = ({inputFields}) => {
  const [inputValues, setInputValues] = useState<{[name: string]: string}>({});

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
  // console.log(addingZero(hourseIn12))

  // console.log(typeof(time), "time")
  // console.log(userInfo)
  useEffect(() => {
    setInputValues(prevInputValues => ({
      ...prevInputValues,
      'projectDetails.workCompletion': speechReducerValues.audioVoice[0],
      'signatures.customerEmail2': speechReducerValues.userInformation.email,
      'signatures.customerName': speechReducerValues.userInformation.name,
      'signatures.DateTime': time,
    }));
  }, [speechReducerValues.audioVoice]);
  const handleInputChange = (name: string, value: string) => {
    setInputValues(prevInputValues => ({
      ...prevInputValues,
      [name]: value,
    }));
  };
  // console.log(inputValues)
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
                {/* {console.log(form)} */}
                <TextInput
                  value={inputValues[inputField.name]}
                  style={styles.textInput}
                  onChangeText={(e: any) => {
                    form.setFieldValue(inputField.name, e);
                    handleInputChange(inputField.name, e);
                  }}
                  placeholder={inputField.placeholder}
                  multiline={inputField.multiline}
                  numberOfLines={inputField.numberOfLines}
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
