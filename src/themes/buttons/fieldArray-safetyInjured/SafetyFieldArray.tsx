import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import {FieldArray, useFormikContext} from 'formik';
import commonStyles from '../../../styles/commonStyles';
import {Button} from 'react-native-paper';
import {colors} from '../../../colors/colors';
import {SelectPicker} from '../selectDropdown';
import {
  alreadyEmployed,
  alreadyEmployedData,
  anyOneInjured,
  data,
  industry,
  industryData,
  occupation,
  occupationData,
} from '../../../data/safetyIncidents';
import {DatePickers} from '../datePicker';

interface SafetyProps {
  number: any;
}

export const SafetyFieldArray = ({number}: SafetyProps) => {
  const {values, setFieldValue} = useFormikContext<any>();

  return (
    <FieldArray name={number}>
      {({push, remove}) => (
        <View>
          {values?.number &&
            values?.number?.map((person: any, index: number) => (
              <View key={index}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Name of Injured {index + 1}{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <TextInput
                  onChangeText={(text: any) => {
                    setFieldValue(`${number}.${index}.name`, text);
                  }}
                  value={person.number1}
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                />
                {/* <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Occupation
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
                /> */}

                <SelectPicker
                  label={occupation}
                  name={`${number}.${index}.occupation`}
                  data={occupationData}
                />

                <SelectPicker
                  label={alreadyEmployed}
                  data={alreadyEmployedData}
                  name={`${number}.${index}.fiveStarEmployee`}
                />
                <View style={[commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date of Birth
                </Text>
                <DatePickers mode={'date'} name={`${number}.${index}.dob`} />

                </View>

                

                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Residential Address{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>

                <TextInput
                  onChangeText={text =>
                    setFieldValue(`${number}.${index}.address`, text)
                  }
                  // editable={false}
                  value={person?.total?.toString()}
                  // keyboardType="numeric"
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                />
                <SelectPicker
                  label={industry}
                  name={`${number}.${index}.industry`}
                  data={industryData}
                />

                {index >= 1 && (
                  <Button
                    mode="contained-tonal"
                    rippleColor={colors.riplePurple}
                    onPress={() => remove(index)}
                    style={[commonStyles.alignSelfEnd, commonStyles.mb15]}>
                    Remove
                  </Button>
                )}
              </View>
            ))}
          <Button
            mode="contained"
            rippleColor={colors.riplePurple}
            onPress={() =>
              push({
                name: '',
                occupation: '',
                fiveStarEmployee: '',
                address: '',
                industry: '',
                Dob: '',
              })
            }>
            Add Person{' '}
          </Button>
        </View>
      )}
    </FieldArray>
  );
};

// export default MyFieldArray;
