import {
  InputField, ProjectIdProps,
} from '../types/interfaces/types';

const threeOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
  {value: 'Not Aplicable', label: 'Not Aplicable'},
];

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'project_id',
  },
];

export const preStartProjectIdData:ProjectIdProps = {
  name: 'project_id',
  label: 'What"s the Project ID ? ',
  showAsterisk: true,
  prefilled: false
};
export const combinedData = [
  {
    heading: 'Induction Process',
    radioData: [
      {
        heading:
          'Has the schedule of work and induction process been spoken about and agreed upon with the client? - base out date confirmed ?',
        options: threeOptions,
        name: 'process.induction_process',
      },
    ],
    audioFieldHeading: 'Comments for Induction process',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.induction_process_cmt'
  },
  {
    heading: 'Ground Suitability',
    radioData: [
      {
        heading:
          'Is the ground suitable for base out ?',
        options: threeOptions,
        name: 'process.ground_suitability',
      },
    ],
    audioFieldHeading: 'Comments for Ground suitability',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.ground_suitability_cmt'
  },
  {
    heading: 'Gear Laydown',
    radioData: [
      {
        heading:
          'Is the area available for laydown of scaffold gear?',
        options: threeOptions,
        name: 'process.gear_laydown',
      },
    ],
    audioFieldHeading: 'Comments for space for Gear Laydown',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.gear_laydown_cmt'
  },
  {
    heading: 'Engineering Drawings',
    radioData: [
      {
        heading:
          'Are plans sent to subbie and engineered drawings completed (if required)?',
        options: threeOptions,
        name: 'process.engineering_drawings ',
      },
    ],
    audioFieldHeading: 'Comments for Engineering drawings',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.engineering_drawings_cmt'
  },
  {
    heading: 'Gear List & Transport',
    radioData: [
      {
        heading:
          'Has the gear list and transport being organised?',
        options: threeOptions,
        name: 'process.gear_list',
      },
    ],
    audioFieldHeading: 'Comments for Gear list and transport',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.gear_list_cmt'
  },
  {
    heading: 'Correct Base Out Line',
    radioData: [
      {
        heading:
          'Have the correct lines been given for base out? Or will be provided on the day of base out ?',
        options: threeOptions,
        name: 'process.correct_base',
      },
    ],
    audioFieldHeading: 'Comments for Correct base out line',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.correct_base_cmt'
  },
  {
    heading: 'Unforeseen Hazard',
    radioData: [
      {
        heading:
          'Any unforeseen Hazards present? E.g Powerlines, trenches, unsuitable ground',
        options: threeOptions,
        name: 'process.unforeseen_hazard',
      },
    ],
    audioFieldHeading: 'Comments for Unforseen hazards',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.unforeseen_hazard_cmt'
  },
  {
    heading: 'SOW',
    radioData: [
      {
        heading:
          'Are supervisor, subbie and client clear on scope of work needed?',
        options: threeOptions,
        name: 'process.subbie_client',
      },
    ],
    audioFieldHeading: 'Comments for SOW',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.subbie_client_cmt'
  },
  {
    heading: 'Crane booking',
    radioData: [
      {
        heading:
          'Has crane time been allocated for base out?',
        options: threeOptions,
        name: 'process.crane_booking',
      },
    ],
    audioFieldHeading: 'Comments for Crane Bookings',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.crane_booking_cmt'
  },
  {
    heading: 'Communication protocols',
    radioData: [
      {
        heading:
          'Has Communication protocols been established?',
        options: threeOptions,
        name: 'process.communication_protocol',
      },
    ],
    audioFieldHeading: 'Comments for Communication protocols',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.communication_protocol_cmt'
  },

];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Submitted by ',
    showAsterisk: true,
    name: 'Supervisor_Name',
  },
];

export const infitiaalValues = {
  project_id: '',
  date: '',
  nameOf_customer: '',
  unapproved_modification: '',
  structural_integrity: '',
  falling_objects: '',
  general_access: '',
  affacted_area: '',
  repair_scaffold: '',
  prevent_recurrence: '',
  Supervisor_Name: '',
  supervisor_emails: '',
  customer_representative: '',
  representative_email: '',
  supervisorSignature: '',
};

export const initialValues = {
  project_id: '',
  date: '',
  process: {
    induction_process: '',
    induction_process_cmt: '',
    ground_suitability: '',
    ground_suitability_cmt: '',
    gear_laydown: '',
    gear_laydown_cmt: '',
    engineering_drawings: '',
    engineering_drawings_cmt: '',
    gear_list: '',
    gear_list_cmt: '',
    correct_base: '',
    correct_base_cmt: '',
    unforeseen_hazard: '',
    unforeseen_hazard_cmt: '',
    subbie_client: '',
    subbie_client_cmt: '',
    crane_booking: '',
    crane_booking_cmt: '',
    communication_protocol: '',
    communication_protocol_cmt: '',
  },
  observation_cmt: '',
  Supervisor_Name: '',
  supervisorSignature: '',
  customerSignature: '',
};
