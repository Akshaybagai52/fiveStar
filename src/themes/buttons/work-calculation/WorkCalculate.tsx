import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import {FieldArray, useFormikContext} from 'formik';
import commonStyles from '../../../styles/commonStyles';
import {Button} from 'react-native-paper';
import {colors} from '../../../colors/colors';

const MyFieldArray = ({number}: any) => {
  const {values, setFieldValue} = useFormikContext<any>();

  return (
    <FieldArray name={number}>
      {({push, remove}) => (
        <View>
          {values?.number &&
            values?.number?.map((person: any, index: number) => (
              <View key={index}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Number of Men <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <TextInput
                  onChangeText={(text:any) => {
                    setFieldValue(`${number}.${index}.number1`, text);
                    setFieldValue(
                      `${number}.${index}.total`,
                      text * person.number2,
                    );
                    console.log(person.total);
                  }}
                  value={person.number1}
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                  keyboardType="numeric"
                />
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Number of Hours Per Man{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>

                <TextInput
                  onChangeText={(text: any) => {
                    setFieldValue(`${number}.${index}.number2`, text);
                    // getValue(person.number1, person.number2, index);

                    setFieldValue(
                      `${number}.${index}.total`,
                      person.number1 * text,
                    );
                    console.log(person.total);
                  }}
                  // onChangeText={()=>getValue(text)}
                  value={person.number2}
                  keyboardType="numeric"
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                />
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Total Hours <Text style={[commonStyles.errorText]}>*</Text>
                </Text>

                <TextInput
                  onChangeText={text =>
                    setFieldValue(
                      `${number}.${index}.total`,
                      person.number1 * person.number2,
                    )
                  }
                  editable={false}
                  value={person?.total?.toString()}
                  keyboardType="numeric"
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                />
                <Button
                  mode="contained-tonal"
                  rippleColor={colors.riplePurple}
                  onPress={() => remove(index)}
                  style={[commonStyles.alignSelfEnd, commonStyles.mb15]}>
                  Remove
                </Button>
              </View>
            ))}
          <Button
            mode="contained"
            rippleColor={colors.riplePurple}
            onPress={() => push({number1: '', number2: '', total: ''})}>
            Add Person{' '}
          </Button>
        </View>
      )}
    </FieldArray>
  );
};

export default MyFieldArray;
