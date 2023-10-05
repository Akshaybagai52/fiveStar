import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

export const TimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [date2, setDate2] = useState(new Date());
  const [open2, setOpen2] = useState(false);

  //   console.log(date2, 'date2')

  return (
    <>
      <Button
        title="Open"
        onPress={() => {
          setOpen(true);
          console.log(date, 'date');
        }}
      />
      <DatePicker
        mode="time"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <Button title="Open2" onPress={() => {
          setOpen2(true);
          console.log(date2, 'date2');
        }} />
      <DatePicker
        mode="time"
        modal
        open={open2}
        date={date2}
        onConfirm={date => {
          setOpen2(false);
          setDate2(date);
        }}
        onCancel={() => {
          setOpen2(false);
        }}
      />
    </>
  );
};
