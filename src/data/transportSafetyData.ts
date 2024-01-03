import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
  ProjectIdProps,
} from '../types/interfaces/types';



export const scaffoldData: Partial<InputField>[] = [
  {
    label: 'Revision No.',
    name: 'revision_no',
  },
];

export const descriptionField: Partial<InputField>[] = [
  {
    label: 'Description',
    name: 'doc_description',
  },
];

export const approveByField: Partial<InputField>[] = [
  {
    label: 'Approved By',
    name: 'doc_approved',
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
    label:
      '1. Does driver plant/vehicle have the appropriate class of licence/ticket for plant/vehicle being operated',
    status: 'unchecked',
    name: 'checklist.vehicle_operated',
  },
  {
    label:
      '2. Is the plant vehicle maintained in good working order and registered (if required) for the purpose of use ?',
    status: 'unchecked',
    name: 'checklist.vehicle_maintained',
  },
  {
    label:
      '3. Does the plant/vehicle have the correct and well maintained load restraints for the scope of work needed ?',
    status: 'unchecked',
    name: 'checklist.vehicle_load_restraints',
  },
  {
    label:
      '4. Is the load within the legal load limit and dimensions of the plant/vehicle ?',
    status: 'unchecked',
    name: 'checklist.legal_load_limit',
  },
  {
    label: '5. Is the load evenly distributed for best weight distributed ?',
    status: 'unchecked',
    name: 'checklist.weight_distributed',
  },
  {
    label:
      '6. Are delivery/pickup times in suitable time frames to allow deliveries to be conducted in a safe and legal manner ?',
    status: 'unchecked',
    name: 'checklist.safe_legal_manner',
  },
  {
    label:
      '7. Record of drivers activity kept to moniter fatigue speed and workload ?',
    status: 'unchecked',
    name: 'checklist.driver_activity',
  },
  {
    label:
      '8. Vehicle speed limiters/GPS trackers (if installed) are functioning and maintained ?',
    status: 'unchecked',
    name: 'checklist.vehicle_speed_limiters',
  },
  {
    label: '9. Has the load shifted on the plant/vehicle perior to unloading ?',
    status: 'unchecked',
    name: 'checklist.load_shifted',
  },
  {
    label:
      '10. Are the personnel fit for work ?(e.g not under the influence of alcohol and drugs, not fatigued, etc)',
    status: 'unchecked',
    name: 'checklist.personnel_fit_work',
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


export const initialValues = {
  revision_no: '',
  date: '',
  doc_description: '',
  doc_approved: '',
  checklist: {
    vehicle_operated: '',
    vehicle_maintained: '',
    vehicle_load_restraints: '',
    legal_load_limit: '',
    weight_distributed: '',
    safe_legal_manner: '',
    driver_activity: '',
    vehicle_speed_limiters: '',
    load_shifted: '',
    personnel_fit_work: '',
  },
};
