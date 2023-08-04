import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
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
            <Checkbox status={status}  />
            <Text >{label}{status}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default CheckBox;
