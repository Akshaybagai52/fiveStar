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
export const safetyIncidentProjectIdData: ProjectIdProps = {
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

export const listData = [
  'all workers and other persons at our workplace',
  "all workers while present at another workplace (e.g. a customer's workplace)",
  'all workers in our vehicles and eqiupment',
  "all workers performing our work using someone else's vehicle and equipment",
  'Any location where a worker undertakes activities on our behalf, including but not limited to our sites and offices',
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

export const definationsColumn = ['Team', 'Meaning'];
export const definationsData = [
  {
    team: 'Manager/Supervisor',
    meaning:
      'Manager and Supervisor are workers who have an area of control within the workplace, in our organisation this responsbility is accepted by our Department Heads',
  },
  {
    team: 'Tranport Manager',
    meaning:
      'The Transport manager is the person in control of all transportation requirments and has influence or control over the delivery time (often the person who schedules the transport of goods by road)',
  },
  {
    team: 'Driver',
    meaning:
      'The Driver is a worker who drives the vehicle and transports the load to its defination by road',
  },
  {
    team: 'Loading Manager',
    meaning:
      'The Loading Manager is a worker who supervises the activities of loaders or unloaders. In our organization this responsbility is accepted by the Yard Manager',
  },
  {
    team: 'Loader/Unloader',
    meaning:
      'The Loader/Unloader is a worker who is responsible for loading the goods into or onto the vehicle. In our organization this responsbility is accepted by Loaders and Warehouse staff',
  },
];

export const rolesAndResColumn = ['Role', 'Responsibility'];
export const rolesAndResData = [
  {
    role: 'Manager and Supervisors',
    responsibility: [
      'Ensure this WHS policy and the WHS management system are effectively implemented within their area of control',
      'Accept accountability for ensuring that the workplace under their control is safe and without risk to health and safety',
      'Accept accountability for ensuring that the behavior of workers under their control is safe and without risk to health and safety',
      'Consult with workers on issues that affect their health and safety',
      'Resolve appropriately escalate WHS issues promptly',
    ],
  },
  {
    role: 'Transport Manager',
    responsibility: [
      'The transport manager must ensure that',
      'Drivers have relevant licences for the type of plant being driven',
      'The driver has sufficient and appropriate load restraint equipment',
      'Is provided with sufficient training to use it correctly',
      'Vehicle do not exceed legal mass limit',
      'Drivers have accurate documents of the tare weight(or empty weight) of the combination',
      'Load plans for vehicle combination do not exceed maximum weight limits and if load planning by pallet space, that legal axle limits are not exceeded',
      'Proof of accreditation is available if operating under Higher Mass Limits',
      'Lagally permitted and registered vehicles are supplied that meet the legal dimension requirments',
      'Drivers are able to take their required rest breaks',
      'The timeshot at the destination is able to be met within the legal driving hours, allowing for required rest breaks',
      'Drivers adhere to contingency procedures that are in place to cope with unexpected circumstances like road works',
      'Prior notification is given to the receiving/dispatching site if a timeslot cannot be made due to delays',
      'Records are kept of the drivers activities, including driving and rest times',
      'Schedules do not require drivers to exceed the limit',
      'Contigency and plans are developed to deal with scheduling and problems with meeting deadlines',
      'Drivers are able to report delays or other problems',
      'Vehicle speed limiters(if installed) are functioning and maintained',
    ],
  },
  {
    role: 'Drivers',
    responsibility: [
      'The drivers must:',
      'Must have the appropriate class of licence for plant/vehicle being driven',
      'Ensure the load is correctly retrained so that the load cannot move during transit',
      'Have access to the loading area or dock to supervise and/ or participate in the load retraint process',
      'Ensure the vehicle does not exceed maximum limits',
      'Load according to the load plan (or to legal axle limits if there is no load plan) consult with the loader to load to the best weight distribution',
      'Assess my changes between the order and loading',
      'Be given the opportunity to check load plans freight prior to loading, flag any concerns with the supervisor and refuse the load if unsatisfied',
      'Ensure they are driving a leggaly permitted and registered vehicle with relevant documentation',
      'The drivers must understand:',
      'When they can start driving',
      'When they should stop driving',
      'How long their breaks should be',
      'Whether they can complete the journey/make the timeslot in time allowing for delays and rests',
      'How to communicate any issues and delays to the transport company',
      'How to record their driving hours',
      'How to identify when they are showing signs of fatigue and take appropriate action',
      'That speed limit are observed at all times',
      'Safe and responsible driving behavior is demostrated at all times',
    ],
  },
  {
    role: 'Loading Yard Manager',
    responsibility: [
      'The loading manager must:',
      'Ensure all loader/unloaders have appropriate licence/tickets for vehicle plans being used and are kept on record i.e forklift ticket',
      'Ensure correct procedures are used to so that the load is securely restrained',
      'Check when the truck arrives to ensure the load has not shifted or become unstable due to lack of load restraint',
      'Allow drivers access to the loading area to supervise and/or participate in the load restraint process',
      'Enusre any changes between order and loading (such as extra pallets or extra weight) is conveyed to the driver, transport company and consignee',
      'Ensure loads are loaded and placed on trailers according to customer and /or transport company',
      'Stop loading and contact the transport company or site manager if a driver appears fatigued',
      'Minimise queues and have call-up system available (on arrival, the driver checks in with the appropriate office)',
      'Notify the driver and/or scheduler immediately of any laoding delays or potential missed timeslots',
      'Take reasonable steps to ensure the driver is able to take rest while waiting for the vehicle to be loaded/unloaded',
      'Contact the transport company if the truck does not arrive on time and advise them of the next available timeslot or the delay time',
      'Ensure a truck parking area and facilities are provided',
      'The loading manager must ensure that loading and unloading:',
      'arrangements do not require drivers to speed',
      'Times and delays are regularly reviewed',
      'Bottlenecks are identified and resolved promptly',
    ],
  },
  {
    role: 'Loader Unloader Worker',
    responsibility: [
      'The loader must use methods and load restraint equipment to ensure loads do not:',
      'Become unstable',
      'Move inside the vehicle, container or other contianment equipment',
      'The loader must ensure that:',
      'Ensure they have appropriate licence/ticket for Vehicle/plant being used i.e forklift ticket',
      'Presure is not put on the driver to load more than is leggaly allowable',
      'Ensure all loaders/unloaders have appropriate licence/ticket for vehicle/plant being used i.e forklift ticket',
      'The vehicle load does not cause the vehicle mass or dimension limits to be exceeded',
      'For palletized load, the driver is advised of the actual/indicative weight of each pallet and consulted to ensure that goods area loaded to the best weight distribution',
      'Loaded in a timely manner, without unnecessary delays',
      'Ready to be loaded at the agreed loading time',
      'Unloaded in a timely manner, without unnecessary delays load restraint',
      'Checked on arrival to ensure the load has not shifted or become unstable due to lack of load restraint',
    ],
  },
];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Your Name ',
    showAsterisk: true,
    name: 'your_name',
    prefilled: true,
    prefilledUsername: true,
  },
  {
    label: 'Write you email to receive a copy of your report ',
    name: 'your_email',
    showAsterisk: true,
    prefilled: true,
    prefilledUserEmail: true,
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
  number: [{}],
  names: [],
};
