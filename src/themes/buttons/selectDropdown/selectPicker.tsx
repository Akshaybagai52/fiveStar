import React, {useState, useEffect} from 'react';
import {Field} from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import commonStyles from '../../../styles/commonStyles';

interface Item {
  label: string;
  value: string;
}
interface labelProps {
  name?: string;
  showAsterisk?: boolean;
  label: string;
}

interface SelectPickerProps {
  data: Item[];
  label: labelProps;
  name?: string;
  loading?: boolean;
}

export function SelectPicker({data, label, name, loading}: SelectPickerProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState<Item[]>(data);
  // console.log(label.name && label.name || name)

  // Update items when data prop changes
  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <Field name={label.name ? label.name : name}>
      {({field, form}: {field: any; form: any}) => (
        <View style={[commonStyles.mb15]}>
          <Text style={[commonStyles.mb5, commonStyles.text16]}>
            {label?.label}{' '}
            {label.showAsterisk ? (
              <Text style={[commonStyles.errorText]}>*</Text>
            ) : null}
          </Text>

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={newValue => {
              const selectedValue =
                typeof newValue === 'function' ? newValue(undefined) : newValue;
              setValue(selectedValue);
              form.setFieldValue(
                label.name ? label.name : name,
                selectedValue,
              );
            }}
            listMode="SCROLLVIEW"
            searchable={true}
            style={[commonStyles.commonTextInput]}
            // loading={loading ? loading : false}
          />
        </View>
      )}
    </Field>
  );
}
