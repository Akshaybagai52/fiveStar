import DropDownPicker from 'react-native-dropdown-picker';
import {useState} from 'react'
export function SelectPicker() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana1', value: 'banana1'},
    {label: 'Banana2', value: 'banana2'},
    {label: 'Banana3', value: 'banana3'},
    {label: 'Banana4', value: 'banana4'},
    {label: 'Banana5', value: 'banana5'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      listMode="SCROLLVIEW"
      searchable={true}
    />
  );
}