import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {myStyles} from './styles';
import RadioGroup, {Option} from '../../themes/buttons/RadioButtons';
import TextInputGroup from '../../themes/buttons/TextInputGroup';
import {InputField} from '../../types/interfaces/types';

const Handover = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [formData, setFormData] = useState<Partial<InputField>[]>([
    {
      label: 'What"s the Project ID ?',
      onChangeText: text => handleInputChange('fullName', text),
      showAsterisk: true,
    },
    {
      label: 'Which Building and what Level ?',
      onChangeText: text => handleInputChange('email', text),
    },
    {
      label: 'What"s the name of Customer or Builder ?',
      onChangeText: text => handleInputChange('phoneNumber', text),
    },
    {
      label: 'Customer ABN',
      onChangeText: text => handleInputChange('phoneNumber', text),
    },
    {
      label: 'How would you describe the work completed ?',
      onChangeText: text => handleInputChange('phoneNumber', text),
      showAsterisk: true,
      multiline: true,
      numberOfLines: 4,
    },
  ]);

  const handleInputChange = (fieldName: string, text: string) => {
    setFormData(prevFormData => {
      return prevFormData.map(field => {
        if (field.label === fieldName) {
          return {...field, value: text};
        }
        return field;
      });
    });
  };

  const options: Option[] = [
    {label: 'Erection', value: 'Erection'},
    {label: 'Variation Works', value: 'Variation Works'},
    {label: 'Dismantle', value: 'Dismantle'},
    {label: 'Inspection', value: 'Inspection'},
    {label: 'Damage Rectification Works', value: 'Damage Rectification Works'},
    {
      label: 'Other Works - mention in Notes below',
      value: 'Other Works - mention in Notes below',
    },
  ];
  // const inputField: InputField[] = [
  //   { label: 'Name', value: '', placeholder: 'Enter your name', onChangeText: (text: string) => handleInputChange(0, text), showAsterisk: true },
  //   { label: 'Email', value: '', placeholder: 'Enter your email', onChangeText: (text: string) => handleInputChange(1, text) },

  // ]
  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <View style={{padding: 20}}> 
      <ScrollView>
        <View>
          <View style={{backgroundColor: '#c7fe1a', padding: 10}}>
            <Text style={myStyles.headingText}>Project Details:</Text>
          </View>
          <Text>What is this Certificate Relating to ?</Text>
          <Text>Choose One</Text>
          <RadioGroup
            options={options}
            selectedValue={selectedValue}
            onValueChange={handleSelect}
          />
        </View>
        <View>
          <TextInputGroup inputFields={formData} />
          {/* <Text>How would you describe the work completed ?*</Text>
          <TextInput multiline={true} numberOfLines={4} /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Handover;
