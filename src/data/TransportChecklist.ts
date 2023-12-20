import {InputField, ProjectIdProps} from '../types/interfaces/types';
const twoOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
];

export const transportUserPersonalData: Partial<InputField>[] = [

  {
    label: 'Name',
    name: 'transportDetails.transporter_name',
  },

];

export const transPortHeading = [
  {
    heading: '1. Has all next day orders been confirmed by 11 am ?',
    options: twoOptions,
    name: 'orderDetails.orders_confirmed',
  },
  {
    heading: '1 a. Have all the orders been given to the warehouse team ?',
    options: twoOptions,
    name: 'orderDetails.warehouse_team',
    showAsterisk:true
  },
  {
    heading: "2.Has the Runsheet 's been given to warehouse ",
    options: twoOptions,
    name: 'orderDetails.Runsheet_warehouse',
  },
  {
    heading: '2a.Are all Five Star Scaffolding drivers fully utilized ? ',
    options: twoOptions,
    name: 'orderDetails.drivers_fully_utilized',
  },
  {
    heading: '2b. Have we managed our run times ?',
    options: twoOptions,
    name: 'orderDetails.managed_our_run_times',
  },
];

export const transPortHeading1 = [
    {
      heading: '3a. Have we sent out the message to confirm Delivery / Pick Up times ?',
      options: twoOptions,
      name: 'NextDayAllocation.pick_Up_times',
    },
    {
      heading: '3b. Have we sent out the correct Delivery Address ',
      options: twoOptions,
      name: 'NextDayAllocation.correct_Delivery_Address',
    },
    {
      heading: "3c. Have we provided a Site Contact Details for the Delivery / Pick Up ? ",
      options: twoOptions,
      name: 'NextDayAllocation.pick_Up_Delivery',
    },
    {
      heading: '3d. Have we sent all drivers the next day jobs ? ',
      options: twoOptions,
      name: 'NextDayAllocation.drivers_next_day_jobs',
    },
    {
      heading: '4. Has the daily recap been sent to Zaya regarding todays transport delays ?',
      options: twoOptions,
      name: 'NextDayAllocation.Zaya_regarding',
    },
    {
      heading: '5. I am comfortable with this order and load ',
      options: twoOptions,
      name: 'NextDayAllocation.order_and_load',
    },
  ];


  export const initialValues = {
    transportDetails: {
      transporter_name: '',
    },
    orderDetails: {
      orders_confirmed: '',
      warehouse_team: '',
      Runsheet_warehouse: '',
      drivers_fully_utilized: '',
      managed_our_run_times: '',
    },
    NextDayAllocation: {
      pick_Up_times: '',
      correct_Delivery_Address: '',
      pick_Up_Delivery: '',
      drivers_next_day_jobs: '',
      Zaya_regarding: '',
      order_and_load:''
    },
    signature: '',
  };