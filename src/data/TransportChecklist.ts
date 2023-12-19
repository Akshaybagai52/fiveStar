import {InputField, ProjectIdProps} from '../types/interfaces/types';
const twoOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
];

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    name: 'project_id',
  },
  {
    label: 'What"s the Project ID ?',
    name: 'project_id',
  },
];

export const transPortHeading = [
  {
    heading: '1. Has all next day orders been confirmed by 11 am ?',
    options: twoOptions,
    name: 'transPortHeading1',
  },
  {
    heading: '1 a. Have all the orders been given to the warehouse team ?',
    options: twoOptions,
    name: 'transPortHeading1',
    showAsterisk:true
  },
  {
    heading: "2.Has the Runsheet 's been given to warehouse ",
    options: twoOptions,
    name: 'transPortHeading1',
  },
  {
    heading: '2a.Are all Five Star Scaffolding drivers fully utilized ? ',
    options: twoOptions,
    name: 'transPortHeading1',
  },
  {
    heading: '2b. Have we managed our run times ?',
    options: twoOptions,
    name: 'transPortHeading1',
  },
];

export const transPortHeading1 = [
    {
      heading: '3a. Have we sent out the message to confirm Delivery / Pick Up times ?',
      options: twoOptions,
      name: 'transPortHeading1',
    },
    {
      heading: '3b. Have we sent out the correct Delivery Address ',
      options: twoOptions,
      name: 'transPortHeading1',
    },
    {
      heading: "3c. Have we provided a Site Contact Details for the Delivery / Pick Up ? ",
      options: twoOptions,
      name: 'transPortHeading1',
    },
    {
      heading: '3d. Have we sent all drivers the next day jobs ? ',
      options: twoOptions,
      name: 'transPortHeading1',
    },
    {
      heading: '4. Has the daily recap been sent to Zaya regarding todays transport delays ?',
      options: twoOptions,
      name: 'transPortHeading1',
    },
    {
      heading: '5. I am comfortable with this order and load ',
      options: twoOptions,
      name: 'transPortHeading1',
    },
  ];
