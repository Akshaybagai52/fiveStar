import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface TextInputGroupProps {
  inputFields: Partial<{
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    showAsterisk?: boolean;
    multiline: boolean;
    numberOfLines: number;
  }>[];
}

const TextInputGroup: React.FC<TextInputGroupProps> = ({inputFields}) => {
  return (
    <View>
      {inputFields.map((inputField, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.label}>
            {inputField.label}
            {inputField.showAsterisk && <Text style={styles.asterisk}>*</Text>}
          </Text>
          <TextInput
            style={styles.textInput}
            value={inputField.value}
            onChangeText={inputField.onChangeText}
            placeholder={inputField.placeholder}
            multiline={inputField.multiline}
            numberOfLines={inputField.numberOfLines}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  asterisk: {
    color: 'red', // Add the red color to the asterisk
  },
  textInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default TextInputGroup;
