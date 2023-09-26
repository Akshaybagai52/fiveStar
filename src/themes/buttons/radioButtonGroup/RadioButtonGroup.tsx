import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { Field, useFormikContext } from 'formik';
import commonStyles from '../../../styles/commonStyles';

export interface Option {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  options: { heading: string; options: Option[]; name: string }[];
}

export const RadioGroupButton: React.FC<RadioGroupProps> = ({ options }) => {
  // const formik = useFormikContext();

  return (
    <View>
      {options.map((group, index) => (
        <View key={group.heading}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 7 }}>{group.heading}</Text>
          <View style={[commonStyles.flexRow, commonStyles.flexWrap]}>
          {group.options.map((option) => (
            <Field key={option.value} name={group.name}>
              {({ field, form }: { field: any; form: any }) => (
                <TouchableOpacity
                  onPress={() => {
                    form.setFieldValue(group.name, option.value); // Manually set radio button value
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RadioButton
                      value={option.value}
                      status={field.value === option.value ? 'checked' : 'unchecked'}
                      onPress={() => {
                        form.setFieldValue(field.name, option.value);
                      }}
                    />
                    <Text>{option.label}</Text>
                  </View>
                </TouchableOpacity>
              )}
            </Field>
          ))}
          </View>
        </View>
      ))}
    </View>
  );
};

// export default RadioGroup;
