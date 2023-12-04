import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
  ProjectIdProps,
} from '../types/interfaces/types';

export const label = {
  name: 'subcontractor',
  label: 'Sub Contractor (please select) ',
  showAsterisk: true,
};

export const subcontractorData = [
  {
    label: '100%erz Scaffolding and Labour Hire Pty Ltd',
    value: '100%erz Scaffolding and Labour Hire Pty Ltd',
  },
  {label: 'ACT Height', value: 'ACT Height'},
  {label: 'AJ Scaff', value: 'AJ Scaff'},
  {label: 'Aus Safe Access', value: 'Aus Safe Access'},
  {label: 'BMR Scaffolding', value: 'BMR Scaffolding'},
  {
    label: 'Breakout Scaffolding Australia Pty Ltd',
    value: 'Breakout Scaffolding Australia Pty Ltd',
  },
  {label: 'Compendium Design Pty Ltd', value: 'Compendium Design Pty Ltd'},
  {label: 'Crane Service Industries', value: 'Crane Service Industries'},
  {label: 'Elevated Access Solutions', value: 'Elevated Access Solutions'},
  {label: 'Extreme Scaffolding Pty Ltd', value: 'Extreme Scaffolding Pty Ltd'},
  {label: 'First Class Scaffolding', value: 'First Class Scaffolding'},
  {label: 'Five Star Scaffolding copy', value: 'Five Star Scaffolding copy'},
  {
    label: 'Fortitude Scaffolding Pty Ltd',
    value: 'Fortitude Scaffolding Pty Ltd',
  },
  {label: 'G&S Scaffolding Pty Ltd', value: 'G&S Scaffolding Pty Ltd'},
  {
    label: 'Hammond Scaffolding & Rigging Pty Ltd',
    value: 'Hammond Scaffolding & Rigging Pty Ltd',
  },
  {
    label: 'Hills Engineering Consultants',
    value: 'Hills Engineering Consultants',
  },
  {label: 'L&N Scaffolding', value: 'L&N Scaffolding'},
  {label: 'MMA Scaffolding', value: 'MMA Scaffolding'},
  {label: 'MPR Scaffolding Pty Ltd', value: 'MPR Scaffolding Pty Ltd'},
  {label: 'Other', value: 'Other'},
  {label: 'Pro-Scaff', value: 'Pro-Scaff'},
  {label: 'Ross Engineers', value: 'Ross Engineers'},
  {
    label: 'Sabel Rigging & Scaffolding Pty Ltd',
    value: 'Sabel Rigging & Scaffolding Pty Ltd',
  },
  {label: 'Safe Hands 002 Pty Ltd', value: 'Safe Hands 002 Pty Ltd'},
  {label: 'Scaffold Studio', value: 'Scaffold Studio'},
  {label: 'Struttura Scaffolding', value: 'Struttura Scaffolding'},
  {label: 'Sydscaff', value: 'Sydscaff'},
  {label: 'TSB Scaffolding', value: 'TSB Scaffolding'},
  {label: 'Warrior Scaffold', value: 'Warrior Scaffold'},
];

// export const incidentAddress = {
//   name: 'street_address',
//   label: 'Where did the incident happen ? Site, Street Address & Suburb) ',
//   showAsterisk: true,
// };
export const safetyIncidentProjectIdData:ProjectIdProps = {
  name: 'street_address',
  label: 'Where did the incident happen ? Site, Street Address & Suburb) ',
  showAsterisk: true,
  prefilled: false,
};
export const supervisorName = {
  name: 'manager_name',
  label: 'Name of your Supervisor and Manager responsible at workplace ',
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

export const supervisorMail = {
  name: 'supervisor_emails',
  label: 'Supervisor Emails (please select) ',
  showAsterisk: true,
};

export const supervisorEmailData = [
  {
    label: 'keaton@fivestarscaffolding.com.au',
    value: 'keaton@fivestarscaffolding.com.au',
  },
  {
    label: 'manishakumari85611@gmail.com',
    value: 'manishakumari85611@gmail.com',
  },
  {
    label: 'karl@fivestarscaffolding.com.au',
    value: 'karl@fivestarscaffolding.com.au',
  },
  {label: 'dhavalshastri84@gmail.com', value: 'dhavalshastri84@gmail.com'},
  {
    label: 'john@fivestarscaffolding.com.au',
    value: 'john@fivestarscaffolding.com.au',
  },
  {
    label: 'willie@fivestarscaffolding.com.au',
    value: 'willie@fivestarscaffolding.com.au',
  },
  {
    label: 'bruce@fivestarscaffolding.com.au',
    value: 'bruce@fivestarscaffolding.com.au',
  },
  {
    label: 'dominic@fivestarscaffolding.com.au',
    value: 'dominic@fivestarscaffolding.com.au',
  },
  {label: 'charbelmakari1@gmail.com', value: 'charbelmakari1@gmail.com'},
  {
    label: 'trae@fivestarscaffolding.com.au',
    value: 'trae@fivestarscaffolding.com.au',
  },
  {
    label: 'n.shanks@fivestarscaffolding.com.au',
    value: 'n.shanks@fivestarscaffolding.com.au',
  },
];

export const anyOneInjured = {
  name: 'anyone_injured',
  label: 'Was anyone injured ? ',
  showAsterisk: true,
};

export const anyOneInjuredData = [
  {label: 'Yes', value: 'Yes'},
  {label: 'No', value: 'No'},
];
export const investigationOfficer = {
  name: 'investigator_name',
  label: 'Who is Investigating ? ',
  showAsterisk: true,
};

export const investigationOfficerData = [
  {label: 'Keaton', value: 'Keaton'},
  {label: 'Bruce', value: 'Bruce'},
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
  number: [
    {
      number: '',
    },
  ],
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
