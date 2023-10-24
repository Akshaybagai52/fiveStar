import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import {FieldArray, useFormikContext} from 'formik';
import commonStyles from '../../../styles/commonStyles';
import {Button} from 'react-native-paper';
import {colors} from '../../../colors/colors';
import {DatePickers} from '../../../themes/buttons/datePicker';

// interface SafetyProps {
//   number: any;
// }
type SafetyProps = any

const AccidentFieldArray = ({number}: SafetyProps) => {
  const {values, setFieldValue} = useFormikContext<any>();

  return (
    <FieldArray name={number}>
      {({push, remove}) => (
        <View>
          {values?.number &&
            values?.number?.map((person: any, index: number) => (
              <View key={index}  style={[commonStyles.mTop15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  No. {index + 1}{' '}
                </Text>
                <TextInput
                  onChangeText={(text: any) => {
                    setFieldValue(`${number}.${index}.no`, text);
                  }}
                  value={person.number1}
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                />
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Action 
                </Text>

                <TextInput
                  onChangeText={text =>
                    setFieldValue(`${number}.${index}.action`, text)
                  }
                  // editable= {false}
                  value={person?.total?.toString()}
                  // keyboardType="numeric"
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                />

                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  By Whom (Name)
                </Text>

                <TextInput
                  onChangeText={text =>
                    setFieldValue(`${number}.${index}.list_name`, text)
                  }
                  // editable= {false}
                  value={person?.total?.toString()}
                  // keyboardType="numeric"
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
                />

                <View style={[commonStyles.mb15]}>
                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    Date of Birth
                  </Text>
                  <DatePickers mode={'date'} name={`${number}.${index}.list_date`} />
                </View>

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
            style={[{width: '90%'}, commonStyles.mb15, commonStyles.mt5]}
            onPress={() =>
              push({
                no: '',
                action: '',
                list_name: '',
                list_date: '',
              })
            }>
            Add Person{' '}
          </Button>
        </View>
      )}
    </FieldArray>
  );
};

export default AccidentFieldArray;
