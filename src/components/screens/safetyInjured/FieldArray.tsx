import React from 'react';
import {TextInput, View} from 'react-native';
import {FieldArray, useFormikContext} from 'formik';
import commonStyles from '../../../styles/commonStyles';
import {Button} from 'react-native-paper';
import {colors} from '../../../colors/colors';

// interface SafetyProps {
//   number: any;
// }
type SafetyProps = any

const SafetyInjuredFieldArray = ({number}: SafetyProps) => {
  const {values, setFieldValue} = useFormikContext<any>();

  return (
    <FieldArray name={number}>
      {({push, remove}) => (
        <View>
          {values?.number &&
            values?.number?.map((person: any, index: number) => (
              <View key={index}  style={[commonStyles.mTop15]}>
            
                <TextInput
                  onChangeText={(text: any) => {
                    setFieldValue(`${number}.${index}.name`, text);
                  }}
                  value={person.number1}
                  style={[commonStyles.commonTextInput, commonStyles.mb15]}
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
            style={[{width: '90%'}, commonStyles.mb15, commonStyles.mt5]}
            onPress={() =>
              push({
                name: ''
              })
            }>
            Add{' '}
          </Button>
        </View>
      )}
    </FieldArray>
  );
};

export default SafetyInjuredFieldArray;
