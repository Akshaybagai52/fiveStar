import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {ErrorMessage, Field, useFormik, useFormikContext} from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button, Text} from 'react-native-paper';
import {View} from 'react-native';
import commonStyles from '../../../styles/commonStyles';

interface Item {
  customer_abn?: string | undefined;
  customer_name?: string | undefined;
  label: string | undefined;
  value: string | undefined;
}
interface labelProps {
  name?: string;
  showAsterisk?: boolean;
  label: string;
  prefilled?: boolean;
  prefilledCustomerName?: string;
  prefilledCustomerAbn?: string;
}

interface SelectPickerProps {
  data: Item[];
  label: labelProps;
  name?: string;
  loading?: boolean;
  searchable?: boolean;
  initialValue?: string;
}

type SelectedValueProps = {
  customer_abn: string | undefined;
  customer_name: string | undefined;
  label: string | undefined;
  value: string | undefined;

};

export const SelectPicker = forwardRef(
  ({data, label, name, searchable,initialValue}: SelectPickerProps, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string | null>(null);
    const [items, setItems] = useState<Item[]>(data);
    const formik = useFormikContext();
    useEffect(() => {
      setItems(data);
    }, [data]);
    // console.log(items.length)
    if (label.prefilled) {
      const selectedProjectId = items.find((o: Item) => o?.value == value);
      useEffect(() => {
        if (selectedProjectId) {
          const {customer_abn, customer_name}: any = selectedProjectId;
          console.log(label);
          label?.prefilledCustomerAbn &&
            formik.setFieldValue(
              label?.prefilledCustomerAbn || '',
              customer_abn ?? '',
            );
          label?.prefilledCustomerName &&
            formik.setFieldValue(
              label?.prefilledCustomerName || '',
              customer_name ?? '',
            );
          if (selectedProjectId) {
            const {label: itemLabel}: any = selectedProjectId;
            formik.setFieldValue(label?.name, itemLabel ?? '');
          }
        }
      }, [selectedProjectId]);
    }
    const clearPickerData = () => {
      setValue(null);
      setOpen(false);
    };

    useImperativeHandle(ref, () => ({
      clearPickerData: clearPickerData,
    }));

    return (
      <Field name={label.name ? label.name : name}>
        {({form}: {form: any}) => (
          <>
            <View style={[commonStyles.mb15]}>
              <Text style={[commonStyles.mb5, commonStyles.text16]}>
                {label?.label}{' '}
                {label.showAsterisk ? (
                  <Text style={[commonStyles.errorText]}>*</Text>
                ) : null}
              </Text>

              <DropDownPicker
                loading={items.length > 1 ? false : true}
                open={open}
                value={initialValue || value}
                items={items}
                setOpen={setOpen}
                setValue={newValue => {
                  const selectedValue =
                    typeof newValue === 'function'
                      ? newValue(undefined)
                      : newValue;
                  setValue(selectedValue);
                  const selectedProjectId = items.find(
                    (o: Item) => o?.value == selectedValue,
                  );

                  !label.prefilled &&
                    form.setFieldValue(
                      label.name ? label.name : name,
                      selectedProjectId?.label,
                    );
                }}
                listMode="SCROLLVIEW"
                searchable={searchable === false ? searchable : true}
                style={[commonStyles.commonTextInput]}
                dropDownContainerStyle={{
                  width: '90%',
                }}
              />
              <ErrorMessage name={label.name ? label.name : name}>
              {msg => {
                // const projectDetails = msg.projectDetails;
                return (
                  <Text style={{color: 'red'}}>
                    {msg}
                  </Text>
                );
              }}
            </ErrorMessage>
            </View>
          </>
        )}
      </Field>
    );
  },
);
