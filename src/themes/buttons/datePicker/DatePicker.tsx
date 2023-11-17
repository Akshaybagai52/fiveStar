import {Field, ErrorMessage} from 'formik';
import React, {useState, useEffect} from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const DatePickers = ({
  name,
  mode,
  initialValue,
}: {
  name: string;
  mode: any;
  initialValue?: string;
}) => {
  const [date, setDate] = useState<Date | null>(
    initialValue ? new Date(initialValue) : null,
  );
  const [open, setOpen] = useState(false);
  const [init, setInit] = useState(false);

  const formattedDate = date
    ? mode === 'date'
      ? date.toLocaleString(undefined, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : date.toLocaleString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
    : 'Select ' + mode.charAt(0).toUpperCase() + mode.slice(1);

  useEffect(() => {
    if (initialValue) {
      setDate(new Date(initialValue));
    }
  }, [initialValue]);

  return (
    <Field name={name}>
      {({field, form}: {field: any; form: any}) => (

        <>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => setOpen(true)}>
              <TextInput
                style={styles.input}
                value={formattedDate}
                editable={false}
              />
              <Icon
                name={mode === 'date' ? 'date-range' : 'access-time'}
                size={20}
                color="#112D4E"
              />
            </TouchableOpacity>
          </View>
          {open && (
            <DatePicker
              modal
              mode={mode}
              open={open}
              date={date || new Date()} // Provide the current date as a fallback
              onConfirm={selectedDate => {
                // console.log(selectedDate, 'selectedDate')
                setOpen(false);
                setInit(true);
                const isoDateString = selectedDate.toISOString();
                setDate(selectedDate);
                form.setFieldValue(field.name, isoDateString)
                // field.onChange(isoDateString);
                // initialValue
                //   ? init
                //     ? form.setFieldValue(field.name, isoDateString)
                //     : form.setFieldValue(field.name, initialValue)
                //   : form.setFieldValue(field.name, isoDateString);
                // init ? form.setFieldValue(field.name, isoDateString) : form.setFieldValue(field.name, initialValue);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          )}
          <ErrorMessage name={name}>
            {msg => <Text style={{color: 'red'}}>{msg}</Text>}
          </ErrorMessage>
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
    color: 'black',
  },
});
