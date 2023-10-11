import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { FieldArray, useFormikContext } from 'formik';

const MyFieldArray = ({ number }: any) => {
  const { values, setFieldValue } = useFormikContext<any>();

  return (
    <FieldArray name={number}>
      {({ push, remove }) => (
        <View>
          <Button title='get values' onPress={() => console.log(values.number)} />
          {values?.number && values?.number?.map((person, index) => (
            <View key={index}>
              <TextInput
                onChangeText={text => setFieldValue(`${number}.${index}.name`, text)}
                value={person.name}
                placeholder="Name"
              />
              <TextInput
                onChangeText={text => setFieldValue(`${number}.${index}.email`, text)}
                value={person.email}
                placeholder="Email"
              />
              <TextInput
                onChangeText={text => setFieldValue(`${number}.${index}.phone`, text)}
                value={person.phone}
                placeholder="Phone"
              />
              <Button title="Remove" onPress={() => remove(index)} />
            </View>
          ))}
          <Button title="Add Person" onPress={() => push({ name: '', email: '', phone: '' })} />
        </View>
      )}
    </FieldArray>
  );
};

export default MyFieldArray;
