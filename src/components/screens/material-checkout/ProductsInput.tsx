import React from 'react';
import { TextInput } from 'react-native';
import { View, StyleSheet} from 'react-native';
interface productInputProps {
  value: string;
  onChangeText: (text:string) => void;
  placeholder: string;
}
const ProductsInput = ({
  value,
  onChangeText,
  placeholder,
}: productInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        // mode = 'outlined'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    width: '45%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default ProductsInput;
