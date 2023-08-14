import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Field,ErrorMessage } from 'formik';

interface TextInputGroupProps {
  inputFields: Partial<{
    name: string; // Add the name field
    label: string;
    placeholder: string;
    showAsterisk?: boolean;
    multiline: boolean;
    numberOfLines: number;
  }>[];
}

const TextInputGroup: React.FC<TextInputGroupProps> = ({ inputFields }) => {
  return (
    <View>
      {inputFields.map((inputField, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.label}>
            {inputField.label}
            {inputField.showAsterisk && <Text style={styles.asterisk}>*</Text>}
          </Text>
          <Field name={inputField.name}>
            
          {({ field, form, meta }: {field: any; form: any, meta: any}) => (            
              <>
              {/* {console.log(form)} */}
              <TextInput
                value={field.value}
                style={styles.textInput}
                onChangeText={(e:any) => form.setFieldValue(inputField.name,e)}
                placeholder={inputField.placeholder}
                multiline={inputField.multiline}
                numberOfLines={inputField.numberOfLines}
              />
              {/* {meta.touched && meta.error ? <Text>heyshsdfsf</Text>: null} */}
               <ErrorMessage
                  name={inputField.name}
                  component={Text} // Use your own Text component
                  style={styles.errorText} // Apply your error styling
                />
              </>
            )}
          </Field>
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
    marginBottom: 5,
  },
  asterisk: {
    color: 'red', // Add the red color to the asterisk
  },
  textInput: {
    width: '90%',
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
  }
});

export default TextInputGroup;
