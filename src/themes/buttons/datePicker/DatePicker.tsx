import { Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import commonStyles from '../../../styles/commonStyles';

export const DatePickers = ({ name }: { name: string }) => {
  const [date, setDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  const formattedDate = date
    ? date.toLocaleString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    : 'Select Date';

  return (
    <Field name={name}>
      {({ field, form }: { field: any; form: any }) => (
        <>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                setOpen(true);
              }}
            >
              <TextInput
                style={styles.input}
                value={formattedDate}
                editable={false}
              />
              <Icon name="date-range" size={20} color="#112D4E" />
            </TouchableOpacity>
          </View>
          {open && (
            <DatePicker
              modal
              open={open}
              date={date || new Date()} // Provide the current date as a fallback
              onConfirm={(selectedDate) => {
                setOpen(false);
                setDate(selectedDate);
                form.setFieldValue(field.name, selectedDate);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          )}
          {/* Display error message */}
          <ErrorMessage name={name} component={Text} style={commonStyles.errorText} />
        </>
      )}
    </Field>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    paddingHorizontal: 10,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    color: 'black'


  },
  errorText: {
    color: 'red',
  },
});
