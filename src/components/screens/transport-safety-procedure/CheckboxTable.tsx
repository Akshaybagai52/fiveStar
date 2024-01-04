import * as React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
import {ErrorMessage, Field} from 'formik'; // Import useFormikContext
import {CheckboxItem} from '../../../types/interfaces/types';
import commonStyles from '../../../styles/commonStyles';
import {colors} from '../../../colors/colors';

interface CheckBoxProps {
  checkboxes: CheckboxItem[];
  onPress: (label: string) => void;
}

const CheckboxTable: React.FC<CheckBoxProps> = ({checkboxes, onPress}) => {
  return (
    <>
      <View style={[styles.row, styles.headerRow]}>
        <View style={styles.cell}>
          <Text style={styles.headerText}>Description</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.headerText}>Check</Text>
        </View>
      </View>
      {checkboxes.map((checkbox: CheckboxItem) => (
        <Field key={checkbox.name} name={checkbox.name}>
          {({field, form}: any) => (
            <TouchableOpacity
              onPress={() => {
                onPress(checkbox?.label || '');
                form.setFieldValue(field.name, !field.value); // Manually toggle checkbox value
              }}>
              <View
                style={[

                  styles.row,
                ]}>
                <View style={[styles.w50, styles.cell]}>
                  <Text style={[commonStyles.text16]}>{checkbox.label}</Text>
                </View>
                <View style={[styles.w50, styles.cell, {alignItems: 'center'}]}>
                  <Checkbox
                    status={field.value ? 'checked' : 'unchecked'}
                    onPress={() => {
                      onPress(checkbox.label || '');
                      form.setFieldValue(field.name, !field.value);
                    }}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
          {/* <ErrorMessage name={name}>
              {msg => <Text style={{color: 'red'}}>{msg}</Text>}
            </ErrorMessage> */}
        </Field>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  table: {
    // borderWidth: 1,
    borderColor: '#000',
    margin: 10,
  },
  w50: {
    width: '50%',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    padding: 10,
    // alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    borderLeftColor: '#ccc',
    borderLeftWidth: 1,
  },
  headerRow: {
    backgroundColor: colors.darkBlue, // Background color for the header
    // borderBottomColor: '#000',
    // borderRightColor: '#000',
  },
  headerText: {
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default CheckboxTable;
