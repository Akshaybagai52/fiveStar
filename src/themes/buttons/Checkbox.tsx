import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { CheckboxItem } from '../../types/interfaces/types';
import { Field, useFormikContext } from 'formik'; // Import useFormikContext

interface CheckBoxProps {
  checkboxes: CheckboxItem[];
  onPress: (label: string) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checkboxes, onPress }) => {

  return (
    <>
      {checkboxes.map((checkbox: CheckboxItem) => (
        <Field key={checkbox.name} name={checkbox.name}>
          {({ field, form }:any) => (
            <TouchableOpacity
              onPress={() => {
                onPress(checkbox.label);
                form.setFieldValue(field.name, !field.value); // Manually toggle checkbox value
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                  status={field.value ? 'checked' : 'unchecked'}
                  onPress={() => {
                    onPress(checkbox.label);
                    form.setFieldValue(field.name, !field.value);
                  }}
                />
                <Text>{checkbox.label}</Text>
              </View>
            </TouchableOpacity>
          )}
        </Field>
      ))}
    </>
  );
};

export default CheckBox;
