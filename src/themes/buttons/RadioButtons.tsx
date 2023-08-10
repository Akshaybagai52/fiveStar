import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { Field } from 'formik';

export interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: Option[];
  name: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, name }) => {
  return (
    <Field name={name}>
      {({ field, form }: {field: any; form: any}) => (
        <View>
          {options.map((option) => (
            <View key={option.value} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value={option.value}
                status={field.value === option.value ? 'checked' : 'unchecked'}
                onPress={() => form.setFieldValue(name, option.value)}
              />
              <Text>{option.label}</Text>
            </View>
          ))}
        </View>
      )}
    </Field>
  );
};

export default RadioGroup;
