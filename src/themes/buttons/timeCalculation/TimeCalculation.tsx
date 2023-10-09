import React, {useState, useEffect} from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Octicons';
import commonStyles from '../../../styles/commonStyles';
import {Field, useFormikContext} from 'formik';

const TimePickerInput = ({label, date, onDateChange, name}: any) => {
  const [open, setOpen] = useState(false);

  const formatTime = (date: any) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <Field name={name}>
      {({field, form}: {field: any; form: any}) => (
        <View style={[commonStyles.mb15]}>
          <Text style={[commonStyles.text16, commonStyles.mb5]}>{label}</Text>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setOpen(true)}>
              <TextInput
                style={styles.input}
                value={formatTime(date)}
                editable={false}
              />
              <Icon name="clock" size={20} color="#112D4E" />
            </TouchableOpacity>
          </View>
          {
            <DatePicker
              mode="time"
              modal
              open={open}
              date={date}
              onConfirm={selectedDate => {
                setOpen(false);
                onDateChange(selectedDate);
                form.setFieldValue(field.name, selectedDate);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          }
        </View>
      )}
    </Field>
  );
};

export const TimePicker = ({names}:any) => {
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [timeDiffer, setTimeDiffer] = useState('');
  const formik = useFormikContext();
  // console.log(names.startTime) 

  const calculateTimeDifference = (startDate: any, endDate: any) => {
    const timeDifference = Math.abs(startDate - endDate);
    const hours = Math.floor(timeDifference / 3600000);
    const minutes = Math.floor((timeDifference % 3600000) / 60000);
    const seconds = Math.floor((timeDifference % 60000) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(seconds).padStart(2, '0')}`;
  };

  const timeDiff = calculateTimeDifference(date, date2);

  useEffect(() => {
    const duration = calculateTimeDifference(date, date2);
    setTimeDiffer(duration);
    formik.setFieldValue(names.duration, duration);
  }, [date, date2]);

  return (
    <View>
      <TimePickerInput label="Start Time" date={date} onDateChange={setDate} name={names.startTime} />
      <TimePickerInput label="End Time" date={date2} onDateChange={setDate2}  name={names.endTime} />
      <Text style={[commonStyles.text16, commonStyles.mb5]}>Duration</Text>
      <TextInput style={[styles.button, commonStyles.mb15]} value={timeDiff} editable={false} />
    </View>
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
  errorText: {
    color: 'red',
  },
});
