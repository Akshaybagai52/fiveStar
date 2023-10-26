import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
} from '../types/interfaces/types';
const threeOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
  {value: 'N/A', label: 'N/A'},
];

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'project_id',
  },
  {
    label: 'Which Building and what Level ?',
    name: 'project_level',
  },
  {
    label: 'What"s the name of Customer or Builder ?',
    name: 'nameOf_customer',
  },
  {
    label: 'Customer ABN',
    name: 'Customer_ABN',
  },
  {
    label: 'How would you describe the work completed ?',
    showAsterisk: true,
    multiline: true,
    numberOfLines: 4,
    name: 'inspection_notes',
  },
];

export const scaffoldData: Partial<InputField>[] = [
  {
    label: 'Scaffold length',
    name: 'Scaffold_length',
  },
  {
    label: 'No. of Bays long',
    name: 'Bays_long',
  },
  {
    label: 'Scaffold Height',
    name: 'Scaffold_Height',
  },
  {
    label: 'No. of Lifts Above Base Lift',
    name: 'Above_Base_Lift',
  },
];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Name of person preparing this Certificate ',
    showAsterisk: true,
    name: 'name_prepare_certificate',
  },
  {
    label: 'Handover Date and Time ',
    showAsterisk: true,
    name: 'date_time',
  },
  {
    label: 'Write your email to receive a pdf copy ',
    name: 'email_receive_copy',
  },
  {
    label: 'Write your Customer email for them to receive a pdf copy ',
    name: 'customers_mail',
  },
  {
    label: 'Write your HRWL number (High Risk Work Licence number) ',
    name: 'HRWL_number',
  },
  {
    label: 'Name of authorised Customer Representative ',
    showAsterisk: true,
    name: 'customer_Representative',
  },
];

export const elevations: CheckboxItem[] = [
  {
    label: 'East Elevation',
    status: 'unchecked',
    name: 'elevations.East_Elevation',
  },
  {
    label: 'West Elevation',
    status: 'unchecked',
    name: 'elevations.West_Elevation',
  },
  {
    label: 'North Elevation',
    status: 'unchecked',
    name: 'elevations.North_Elevation',
  },
  {
    label: 'South Elevation',
    status: 'unchecked',
    name: 'elevations.South_Elevation',
  },
  {
    label: 'Lift Shaft',
    status: 'unchecked',
    name: 'elevations.Lift_Shaft',
  },
  {
    label: 'Base',
    status: 'unchecked',
    name: 'elevations.Base',
  },
  {
    label: 'Bird Cage',
    status: 'unchecked',
    name: 'elevations.Bird_Cage',
  },
  {
    label: 'Roof',
    status: 'unchecked',
    name: 'elevations.Roof',
  },
  {
    label: 'Void',
    status: 'unchecked',
    name: 'elevations.Void',
  },
  {
    label: 'Loading Platform',
    status: 'unchecked',
    name: 'elevations.Loading_Platform',
  },
  {
    label: 'Whole Level',
    status: 'unchecked',
    name: 'elevations.Whole_Level',
  },
  {
    label: 'Whole House',
    status: 'unchecked',
    name: 'elevations.Whole_House',
  },

];
export const options: RadioOption[] = [
  {label: '30 Day (Monthly Inspection)', value: 'monthly_inspection'},
  {
    label: 'Other Works - mention in Notes below',
    value: 'Other_WorksNotes',
  },
];

export const drawingOptions = [
  {
    heading: 'Is scaffold built as per Drawings Supplied ?',
    options: threeOptions,
    name: 'certificateRelation',
  },
];
export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'LIGHT 225 KG',
    status: 'unchecked',
    name: 'loadingCapacity.LIGHT_225KG',
  },
  {
    label: 'MEDIUM 450 KG',
    status: 'unchecked',
    name: 'loadingCapacity.MEDIUM_450KG',
  },
  {
    label: 'HEAVY 675 KG',
    status: 'unchecked',
    name: 'loadingCapacity.HEAVY_675KG',
  },
  {
    label: 'SPECIAL DUTY',
    status: 'unchecked',
    name: 'loadingCapacity.SPECIAL_DUTY',
  },
];

export const erectionRadioData = [
  {
    heading:
      '1. Take Photos of Inspected area attach to report with signed Handover.',
    options: threeOptions,
    name: 'scaffoldChecklist.inspected_area',
  },
  {
    heading: '2. Jacks base plate centre to sole boards.',
    options: threeOptions,
    name: 'scaffoldChecklist.base_plate',
  },
  {
    heading: '3. Face braces installed every 3rd bay',
    options: threeOptions,
    name: 'scaffoldChecklist.braces_installed',
  },
  {
    heading: '4. End braces installed.',
    options: threeOptions,
    name: 'scaffoldChecklist.end_braces',
  },
  {
    heading:
      '5. Kickboards installed correctly end bays fitted with external clips.',
    options: threeOptions,
    name: 'scaffoldChecklist.kickboards_installed',
  },
  {
    heading: '6. Face of scaffold level and plump.',
    options: threeOptions,
    name: 'scaffoldChecklist.scaffold_level',
  },
  {
    heading:
      '7. Strecher stair correct position infills, lap plates, stair bolts, scaff tag, Handdrails, step down at base, step off at floor level, correctly fitted.',
    options: threeOptions,
    name: 'scaffoldChecklist.strecher_stair',
  },
  {
    heading:
      '8. Alloy stair correct position all handdrails secured with bolts step down in place scaff tag fitted',
    options: threeOptions,
    name: 'scaffoldChecklist.alloy_stair',
  },
  {
    heading: '9. Chain and shade fitted correctly looks neat and tidy.',
    options: threeOptions,
    name: 'scaffoldChecklist.chain_shade',
  },
  {
    heading: '10. Ties installed correct position.',
    options: threeOptions,
    name: 'scaffoldChecklist.ties_installed',
  },
  {
    heading:
      '11. Check gap from face of Building scaffold in correct position.',
    options: threeOptions,
    name: 'scaffoldChecklist.building_scaffold',
  },
  {
    heading:
      '12. Housekeeping has area been cleared of left-over material and left clean.',
    options: threeOptions,
    name: 'scaffoldChecklist.houesekeeping_area',
  },
];


export const initialValues = {
  certificateRelation: '',
  project_id: '',
  project_level: '',
  nameOf_customer: '',
  Customer_ABN: '',
  inspection_notes: '',
  Drawings_Supplied: '',
  loadingCapacity: {
    LIGHT_225KG: '',
    MEDIUM_450KG: '',
    HEAVY_675KG: '',
    SPECIAL_DUTY: '',
  },
  elevations: {
    East_Elevation: '',
    West_Elevation: '',
    North_Elevation: '',
    South_Elevation: '',
    Lift_Shaft: '',
    Base: '',
    Bird_Cage: '',
    Roof: '',
    Void: '',
    Loading_Platform: '',
    Whole_Level: '',
    Whole_House: '',
  },
  Scaffold_length: '',
  Bays_long: '',
  Scaffold_Height: '',
  Above_Base_Lift: '',
  scaffoldChecklist: {
    inspected_area: '',
    base_plate: '',
    braces_installed: '',
    end_braces: '',
    kickboards_installed: '',
    scaffold_level: '',
    strecher_stair: '',
    alloy_stair: '',
    chain_shade: '',
    ties_installed: '',
    building_scaffold: '',
    houesekeeping_area: '',
    Rectification_description: '',
  },
  name_prepare_certificate: '',
  date_time: '',
  email_receive_copy: '',
  customers_mail: '',
  HRWL_number: '',
  customer_Representative: '',
  signatureImages: '',
  personSignature: '',
  customerSignature: '',
};
