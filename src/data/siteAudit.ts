import {InputField} from '../types/interfaces/types';

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
export const secondFormData: Partial<InputField>[] = [
  {
    label: 'Safe work method Comments Q1',
    name: 'project_id',
  },
];

export const radioData = [
  {
    heading: '1. Safe Work Method Statement complete & Signed ? ',
    options: threeOptions,
    name: 'process.induction_process',
  },
];

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
    audioFieldName: 'process.induction_process_cmt',
  },
  {
    heading: 'Ground Suitability',
    radioData: [
      {
        heading: 'Is the ground suitable for base out ?',
        options: threeOptions,
        name: 'process.ground_suitability',
      },
    ],
    audioFieldHeading: 'Comments for Ground suitability',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.ground_suitability_cmt',
  },
  {
    heading: 'Gear Laydown',
    radioData: [
      {
        heading: 'Is the area available for laydown of scaffold gear?',
        options: threeOptions,
        name: 'process.ground_suitability',
      },
    ],
    audioFieldHeading: 'Comments for space for Gear Laydown',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.ground_suitability_cmt',
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
    audioFieldName: 'process.engineering_drawings_cmt',
  },
  {
    heading: 'Gear List & Transport',
    radioData: [
      {
        heading: 'Has the gear list and transport being organised?',
        options: threeOptions,
        name: 'process.gear_list',
      },
    ],
    audioFieldHeading: 'Comments for Gear list and transport',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.gear_list_cmt',
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
    audioFieldName: 'process.correct_base_cmt',
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
    audioFieldName: 'process.unforeseen_hazard_cmt',
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
    audioFieldName: 'process.subbie_client_cmt',
  },
  {
    heading: 'Crane booking',
    radioData: [
      {
        heading: 'Has crane time been allocated for base out?',
        options: threeOptions,
        name: 'process.crane_booking',
      },
    ],
    audioFieldHeading: 'Comments for Crane Bookings',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.crane_booking_cmt',
  },
  {
    heading: 'Communication protocols',
    radioData: [
      {
        heading: 'Has Communication protocols been established?',
        options: threeOptions,
        name: 'process.communication_protocol',
      },
    ],
    audioFieldHeading: 'Comments for Communication protocols',
    showRadioAsterisk: true,
    showAudioFieldAsterisk: true,
    audioFieldName: 'process.communication_protocol_cmt',
  },
];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Submitted by ',
    showAsterisk: true,
    name: 'Supervisor_Name',
  },
];

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

export const init = {
  project_id: '',
  project_level: '',
  inspection: {
    inspection_notes: '',

    safe_work_statement: '',
    safe_work_cmt: '',
    workers_signed_project: '',
    work_signed_cmt2: '',
    control_places: '',
    Controls_cmt3: '',
    risk_falls: '',
    All_risk_cmt4: '',
    manual_handling: '',
    manual_Handling_cmt5: '',
    Scaffold_stacked: '',
    Prevent_falling_cmt6: '',
    Damaged_scaffold: '',
    Damaged_Scaffold_cmt7: '',
    Handover_Scaffoled: '',
    Handover_Certificate_cmtQ8: '',
    Scaffoled_signed: '',
    Scaffoled_signed_cmtQ9: '',
    high_risk_worlers: '',
    scaffolders_number: '',
    groundies: '',
    labourers_groundies: '',
    internally_scaffold: '',
    date: '',
  },
  Supervisor_Name: '',
  inspection_date: '',
  supervisor_emails: '',
  subcontractor: '',
  inspectorSignature: '',
};
