import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
} from '../types/interfaces/types';

export const supervisorName = {
  name: 'supervisor_name',
  label: 'Supervisor / Manager',
  showAsterisk: true,
};

export const supervisorNameData = [
  {label: 'Keaton Owen', value: 'Keaton Owen'},
  {label: 'Manisha Kumari', value: 'Manisha Kumari'},
  {label: 'Karl Neil', value: 'Karl Neil'},
  {label: 'dhaval shastri', value: 'dhaval shastri'},
  {label: 'John Wickenden', value: 'John Wickenden'},
  {label: 'Willie Tangira', value: 'Willie Tangira'},
  {label: 'Bruce Abrams', value: 'Bruce Abrams'},
  {label: 'Dominic Trotter', value: 'Dominic Trotter'},
  {label: 'Charbel Makary', value: 'Charbel Makary'},
  {label: 'Trae Bridgeman', value: 'Trae Bridgeman'},
  {label: 'Nathan Shanks', value: 'Nathan Shanks'},
];

export const occupation = {
  // name: 'occupation',
  label: 'Occupation',
};
export const industry = {
  // name: 'Industry',
  label: 'Industry',
};
export const alreadyEmployed = {
  // name: 'Is Injured a FiveStar employee?',
  label: 'Is Injured a FiveStar employee?',
};

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'projectDetails.project_id',
  },
  {
    label: 'Which Building and what Level did you work at ?',
    name: 'projectDetails.building_level',
    multiline: true,
    numberOfLines: 4,
  },
  {
    label: 'What"s the name of Customer or Builder ? ',
    showAsterisk: true,
    name: 'projectDetails.nameOf_customer',
  },
  {
    label: 'Supervisor"s Name ',
    showAsterisk: true,
    name: 'projectDetails.manager_name',
  },
  {
    label: 'Number of Attendees ',
    showAsterisk: true,
    name: 'projectDetails.number_of_attendence',
  },
];

export const partATypeOfAccident: CheckboxItem[] = [
  {
    label: 'Equipment Damage and Process Loss',
    status: 'unchecked',
    name: 'typeOfAccident.Equipment_Damage',
  },
  {
    label:
      'First Aid Injury (FAI) - Injury that results in minor First Aid treatment only',
    status: 'unchecked',
    name: 'typeOfAccident.First_Aid_Injury',
  },
  {
    label:
      'Medical Treatment Injury (MTI) - Injury that require medical treatment or professional assistance',
    status: 'unchecked',
    name: 'typeOfAccident.Medical_Treatment',
  },
  {
    label:
      'Lost Time Injury (LTI) - Injuries that result in a loss time or return to work Plan (Tick if unsure)',
    status: 'unchecked',
    name: 'typeOfAccident.Lost_time_Injury',
  },
  {
    label:
      'Minor Near Miss (MNM) - an incident that had the potential to cause minor injury or damage',
    status: 'unchecked',
    name: 'typeOfAccident.Minor_Near_Miss',
  },
  {
    label:
      'Significant Near Miss (SNM) - An incident that had the potential to cause serious injury, death or significant damage',
    status: 'unchecked',
    name: 'typeOfAccident.Significant_Near_Miss',
  },
];

export const partAItemOwner: CheckboxItem[] = [
  {
    label: 'Five Star Scaffolding Pty Ltd',
    status: 'unchecked',
    name: 'itemOwner.Five_Star_Scaffolding',
  },
  {
    label: 'Employee',
    status: 'unchecked',
    name: 'itemOwner.EmployeeCheck',
  },
  {
    label: 'Other (specify)',
    status: 'unchecked',
    name: 'itemOwner.Other_specify',
  },
];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Name ',
    name: 'employee',
  },
  {
    label: 'Occupation ',
    name: 'occupation',
    showAsterisk: true,
  },
  {
    label: 'Address ',
    name: 'street_address',
    showAsterisk: true,
  },
  {
    label: 'Location where incident occurred ',
    name: 'incident_occurred',
    showAsterisk: true,
  },
  {
    label: 'Supervisor ',
    name: 'supervisor',
    showAsterisk: true,
  },
  {
    label: 'Witness ',
    name: 'witness',
    showAsterisk: true,
  },
];
export const partfName: Partial<InputField>[] = [
  {
    label: 'Name ',
    name: 'accident_name',
  },
];
export const partgOhs: Partial<InputField>[] = [
  {
    label: 'OH&S Representative ',
    name: 'Representative',
  },
];
export const partgGM: Partial<InputField>[] = [
  {
    label: 'General Manager ',
    name: 'manager',
  },
];
export const partEData = [
  {
    label: 'Estimated time off work ',
    name: 'estimated_time',
  },
];
export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'Bin Strip Dismantle',
    status: 'unchecked',
    name: 'projectDetails.stageDiscussion.Dismantle',
  },
  {
    label: 'Erect, Alter & Dismantle',
    status: 'unchecked',
    name: 'projectDetails.stageDiscussion.Existing_Scaffold',
  },
];

export const occupationData = [
  {label: 'Scaffolder', value: 'Scaffolder'},
  {label: 'Driver', value: 'Driver'},
  {label: 'Office Worker', value: 'Office Worker'},
  {label: 'Store man', value: 'Store man'},
  {label: 'Trade person', value: 'Trade person'},
  {label: 'Other', value: 'Other'},
];

export const industryData = [
  {label: 'Building and Construction', value: 'Building and Construction'},
  {label: 'Mining', value: 'Mining'},
  {label: 'Administrative', value: 'Administrative'},
  {label: 'Support Services', value: 'Support Services'},
  {label: 'Other', value: 'Other'},
];

export const alreadyEmployedData = [
  {label: 'Yes', value: 'Yes'},
  {label: 'No', value: 'No'},
];

export const initialValues = {
  employee: '',
  occupation: '',
  street_address: '',
  incident_occurred: '',
  supervisor: '',
  witness: '',
  incident_date: '',
  incident_time: '',
  date_reported: '',
  time_reported: '',

  // Part A
  typeOfAccident: {
    Equipment_Damage: '',
    First_Aid_Injury: '',
    Medical_Treatment: '',
    Lost_time_Injury: '',
    Minor_Near_Miss: '',
    Significant_Near_Miss: '',
  },

  describe_incident: '',
  itemOwner: {
    Five_Star_Scaffolding: '',
    EmployeeCheck: '',
    Other_specify: '',
  },
  damage_description: '',

  // Part C
  hazard_incident: '',
  equipment: '',
  environment_cause: '',
  procedures: '',

  // Part D
  recommendations: [
    {
      no: '',
      action: '',
      list_name: '',
      list_date: '',
    },
  ], // Field array

  // Part E
  known_injuries: '',
  estimated_time: '',
  extra_comments: '',

  // Part F
  accident_name: '',
  accident_signature: '',
  accident_date: '',

  // Part G
  supervisor_name: '',
  supervisor_signature: '',
  supervisor_date: '',
  supervisor_comment: '',
  Representative: '',
  representative_signature: '',
  Representative_date: '',
  Representative_comment: '',
  manager: '',
  manager_signature: '',
  manager_date: '',
  manager_comment: '',
};
