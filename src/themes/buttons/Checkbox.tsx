import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { CheckboxItem } from '../../types/interfaces/types';

interface CheckBoxProps {
  checkboxes: CheckboxItem[];
  onPress: (label: string) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checkboxes, onPress }) => {
  return (
    <>
      {checkboxes.map(({ label, status }) => (
        <TouchableOpacity key={label} onPress={() => onPress(label)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox status={status} />
            <Text style={{ fontWeight: 'bold' }}>{label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default CheckBox;
