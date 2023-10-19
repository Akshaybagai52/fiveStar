import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
} from '../types/interfaces/types';

export const label = {
  name: 'subcontractor',
  label: 'Sub Contractor (please select) ',
  showAsterisk: true,
};
export const incidentAddress = {
  name: 'street_address',
  label: 'Where did the incident happen ? Site, Street Address & Suburb) ',
  showAsterisk: true,
};
export const supervisorName = {
  name: 'manager_name',
  label: 'Name of your Supervisor and Manager responsible at workplace ',
  showAsterisk: true,
};
export const supervisorMail = {
  name: 'supervisor_emails',
  label: 'Supervisor Emails (please select) ',
  showAsterisk: true,
};
export const anyOneInjured = {
  name: 'anyone_injured',
  label: 'Was anyone injured ? ',
  showAsterisk: true,
};
export const investigationOfficer = {
  name: 'investigator_name',
  label: 'Who is Investigating ? ',
  showAsterisk: true,
};

export const occupation = {
  // name: 'occupation',
  label: 'Occupation',

}
export const industry = {
  // name: 'Industry',
  label: 'Industry',

}
export const alreadyEmployed = {
  // name: 'Is Injured a FiveStar employee?',
  label: 'Is Injured a FiveStar employee?',

}

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
    name: 'projectDetails.supervisor_name',
  },
  {
    label: 'Number of Attendees ',
    showAsterisk: true,
    name: 'projectDetails.number_of_attendence',
  },
];

export const scaffoldData: Partial<InputField>[] = [
  {
    label: 'Email',
    name: 'project_supervisor_mail',
  },
];
export const checkboxData: CheckboxItem[] = [
  {
    label:
      'First Aid Injury (FAI) - Injury that results in minor First Aid treatment only',
    status: 'unchecked',
    name: 'status_of_injury.First_Aid_Injury',
  },
  {
    label:
      'Medical Treatment Injury (MTI) - Injury that require medical treatment or professional assistance',
    status: 'unchecked',
    name: 'status_of_injury.Medical_Treatment',
  },
  {
    label:
      'Lost Time Injury (LTI) - Injuries that result in a loss time or return to work Plan (Tick if unsure)',
    status: 'unchecked',
    name: 'status_of_injury.Lost_time_Injury',
  },
  {
    label:
      'Minor Near Miss (MNM) - an incident that had the potential to cause minor injury or damage',
    status: 'unchecked',
    name: 'status_of_injury.Minor_Near_Miss',
  },
  {
    label:
      'Significant Near Miss (SNM) - An incident that had the potential to cause serious injury, death or significant damage',
    status: 'unchecked',
    name: 'status_of_injury.Significant_Near_Miss',
  },
];

export const measuresData: CheckboxItem[] = [
  {
    label: 'Tool Box was held and preventative measures were discussed',
    status: 'unchecked',
    name: 'measures_to_prevent.Tool_box_was_held',
  },
  {
    label: 'Referred to FSS Safety Committee',
    status: 'unchecked',
    name: 'measures_to_prevent.Referred_commettee',
  },
  {
    label: 'Escalated to FSS Management',
    status: 'unchecked',
    name: 'measures_to_prevent.Fss_management',
  },
  {
    label: 'Work method changed',
    status: 'unchecked',
    name: 'measures_to_prevent.Work_method',
  },
  {
    label: 'Signs placed',
    status: 'unchecked',
    name: 'measures_to_prevent.Signs_placed',
  },
  {
    label: 'Hazard removed',
    status: 'unchecked',
    name: 'measures_to_prevent.Hazard_removed',
  },
];
export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Your Name ',
    showAsterisk: true,
    name: 'your_name',
  },
  {
    label: 'Write you email to receive a copy of your report ',
    name: 'your_email',
    showAsterisk: true,
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

export const dismantleRadioData = [
  {
    heading: 'Investigation commenced for MTI LTI SNM',
    options: [
      {value: 'Yes', label: 'Yes'},
      {value: 'No', label: 'No'},
      {value: 'N/A', label: 'N/A'},
    ],
    name: 'investigation_commenced',
  },
];

export const data = [
  {label: 'Apple', value: 'apple'},
  {label: 'Banana', value: 'banana'},
  {label: 'Banana1', value: 'banana1'},
  {label: 'Banana2', value: 'banana2'},
  {label: 'Banana3', value: 'banana3'},
  {label: 'Banana4', value: 'banana4'},
  {label: 'Banana5', value: 'banana5'},
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
  date_of_incident: '',
  subcontractor: '',
  project_supervisor_mail: '',
  street_address: '',
  employee_name: [],
  manager_name: '',
  supervisor_emails: '',
  describe_incident: '',
  incident_photos: '',
  anyone_injured: '',
  status_of_injury: {
    First_Aid_Injury: '',
    Medical_Treatment: '',
    Lost_time_Injury: '',
    Minor_Near_Miss: '',
    Significant_Near_Miss: '',
  },
  injured_persons: [
    {
      injured_name_1: '',
      occupation: '',
      fivestar_employee: '',
      employee_address: '',
      birth_of_employee: '',
      employee_industry: '',
    },
  ],
  investigation_commenced: '',
  investigator_name: '',
  measures_to_prevent: {
    Tool_box_was_held: '',
    Referred_commettee: '',
    Fss_management: '',
    Work_method: '',
    Signs_placed: '',
    Hazard_removed: '',
  },
  measures_photos: '',
  specify_measures: '',
  your_name: '',
  your_email: '',
  signature: '',
  number: [{
    number: ""
  }],
  names: [],
};

// export const initialValues = {
//   projectDetails: {
//     stageDiscussion: {
//       Dismantle: '',
//       Existing_Scaffold: '',
//     },
//     date: '',
//     project_id: '',
//     building_level: '',
//     nameOf_customer: '',
//     supervisor_name: '',
//     number_of_attendence: '',
//     start_time: '',
//     finish_time: '',
//     duration: '',
//     work_description: '',
//   },
//   supervisor_notes: '',
//   record: {
//     name_1: '',
//     additional_cmt: '',
//   },
//   signatures: {
//     name_of_person: '',
//     email_receive_copy: '',
//     subcontractor_email: '',
//   },
// };
