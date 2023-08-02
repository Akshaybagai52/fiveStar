import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

export interface Option {
    value: string;
    label: string;
}
interface RadioGroupProps {
    options: Option[];
    selectedValue: string;
    onValueChange: (value:string) => void
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selectedValue, onValueChange }) => {
  return (
    <View>
      {options.map((option) => (
        <View key={option.value} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value={option.value}
            status={selectedValue === option.value ? 'checked' : 'unchecked'}
            onPress={() => onValueChange(option.value)}
          />
          <Text>{option.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default RadioGroup;
