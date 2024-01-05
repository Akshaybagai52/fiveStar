import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
} from '../types/interfaces/types';
export const initialFormData: Partial<InputField>[] = [
  // {
  //   label: 'What"s the Project ID ?',
  //   showAsterisk: true,
  //   name: 'projectDetails.projectId',
  // },sdasdfsd
  {
    label: 'Order ',
    name: 'pickingDetails.order',
    showAsterisk: true,
  },
  {
    label: 'Fss No ',
    name: 'pickingDetails.fss_number',
    showAsterisk: true,
  },
  {
    label: 'Driver/Load ',
    name: 'pickingDetails.driver_load',
    showAsterisk: true,
  },
  {
    label: 'Warehouse Person Name ',
    name: 'pickingDetails.warehouse_person',
    showAsterisk: true,
  },
];

export const elevations: CheckboxItem[] = [
  {
    label: 'East Elevation',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.east',
  },
  {
    label: 'West Elevation',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.west',
  },
  {
    label: 'North Elevation',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.north',
  },
  {
    label: 'South Elevation',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.south',
  },
  {
    label: 'Variation works',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.variationWorks',
  },
  {
    label: 'Whole Project',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.wholeProject',
  },
  {
    label: 'Whole Level',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.wholeLevel',
  },
  {
    label: 'Whole House',
    status: 'unchecked',
    name: 'scaffoldDetails.elevations.wholeHouse',
  },
];

export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'LIGHT 225 KG',
    status: 'unchecked',
    name: 'scaffoldDetails.drawingsSupplied.light225',
  },
  {
    label: 'MEDIUM 450 KG',
    status: 'unchecked',
    name: 'scaffoldDetails.drawingsSupplied.Medium450',
  },
  {
    label: 'HEAVY 675 KG',
    status: 'unchecked',
    name: 'scaffoldDetails.drawingsSupplied.heavy675',
  },
  {
    label: 'SPECIAL DUTY',
    status: 'unchecked',
    name: 'scaffoldDetails.drawingsSupplied.specialDuty',
  },
];


const threeOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
  {value: 'N/A', label: 'N/A'},
];

const twoOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
];

export const erectionRadioData = [
  {
    heading: '1. Has the order been checked for any missed picked equipment ?',
    options: twoOptions,
    name: 'orderDetails.picked_equipment',
    showAsterisk: true,
  },
  {
    heading:
      '1a. Have we notified our onsite supervisors an any changes to the orders ?',
    options: twoOptions,
    name: 'orderDetails.notified_supervisor',
    showAsterisk: true,
  },
  {
    heading: '2.Has the order been moved to the staging area ready to load ? ',
    options: twoOptions,
    name: 'orderDetails.staging_area',
    showAsterisk: true,
  },
  {
    heading: '2a. Is the order strapped and labelled correctly and clearly ? ',
    options: twoOptions,
    name: 'orderDetails.strapped_labelled',
    showAsterisk: true,
  },
  {
    heading: '2b. Is the order safe to travel ? ',
    options: twoOptions,
    name: 'orderDetails.safe_travel',
    showAsterisk: true,
  },
];

export const truckLoadingData = [
    {
      heading: '3a. Is the load allocated to the correct driver ? ',
      options: twoOptions,
      name: 'truckLoading.allocated_correct_driver',
      showAsterisk: true,
    },
    {
      heading:
        '3b. Have we loaded the pallets safely ? ',
      options: twoOptions,
      name: 'truckLoading.loaded_pallets_safely',
      showAsterisk: true,
    },
    {
      heading: '4. Has the load been loaded in a timely metter? If not has the manager been advised on the delays? ',
      options: twoOptions,
      name: 'truckLoading.manager_advised',
      showAsterisk: true,
    },
    {
      heading: '5. I am comfortable with this order and load ',
      options: twoOptions,
      name: 'truckLoading.comfortable_with_order',
      showAsterisk: true,
    },
  ];

export const initialValues = {
  pickingDetails: {
    order: '',
    fss_number: '',
    driver_load: '',
    picking_date: '',
    warehouse_person: '',
  },
  orderDetails: {
    picked_equipment: '',
    notified_supervisor: '',
    staging_area: '',
    strapped_labelled: '',
    safe_travel: '',
  },
  truckLoading: {
    allocated_correct_driver: '',
    loaded_pallets_safely: '',
    manager_advised: '',
    comfortable_with_order: '',
    comments: '',
  },
};

