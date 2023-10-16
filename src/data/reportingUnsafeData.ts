import { CheckboxItem, DamagedFormValues, HandoverFormValues, InputField } from "../types/interfaces/types";

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'Site Address ',
    showAsterisk: true,
    name: 'projectId',
  },
  {
    label: 'Email',
    name: 'projectId',
  },
  {
    label: 'Builder: (if known)',
    name: 'projectId',
  },
  {
    label: 'Scaffolding Company: (if known)',
    name: 'projectId',
  },
];
export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'Insufficient or non-existent Edge protection installed by PCBU/Builder',
    status: 'unchecked',
    name: 'reporting.reportingCheck.damaged_Components',
  },
  {
    label: 'Scaffold missing Edge protection, or not compliant',
    status: 'unchecked',
    name: 'reporting.reportingCheck.missing_order1',
  },
  {
    label: 'Hop up components missing or not compliant',
    status: 'unchecked',
    name: 'reporting.reportingCheck.missing_order2',
  },
  {
    label: 'Scaffold erection/Dismantle system of work unsafe',
    status: 'unchecked',
    name: 'reporting.reportingCheck.missing_order3',
  },
];

export const loadingCapacity2: CheckboxItem[] = [
    {
      label: 'Containment screening missing or not compliant',
      status: 'unchecked',
      name: 'reporting.reportingCheck.damaged_Components4',
    },
    {
      label: 'Kickboards missing or not compliant',
      status: 'unchecked',
      name: 'reporting.reportingCheck.missing_order4',
    },
    {
      label: 'Scaffold containment screening height insufficient for the construction stage.',
      status: 'unchecked',
      name: 'reporting.reportingCheck.missing_order5',
    },
  ];

  export const loadingCapacity3: CheckboxItem[] = [
    {
      label: 'Bracing missing or not compliant',
      status: 'unchecked',
      name: 'reporting.reportingCheck.damaged_Components0',
    },
    {
      label: 'Ties missing or not compliant',
      status: 'unchecked',
      name: 'reporting.reportingCheck.missing_order7',
    },
    {
      label: 'Scaffold components missing or not compliant',
      status: 'unchecked',
      name: 'reporting.reportingCheck.missing_order8',
    },
    {
      label: 'Mix and matched scaffold components.',
      status: 'unchecked',
      name: 'reporting.reportingCheck.missing_order9',
    },
    {
        label: 'Condition of equipment / Damaged or rusted out components',
        status: 'unchecked',
        name: 'reporting.reportingCheck.missing_order0',
      },
  ];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Your Name',
    showAsterisk: true,
    name: 'signatures.your_name',
  },
  {
    label: 'Your Phone Number',
    name: 'signatures.subcontractor_name',
  },
  {
    label: 'Your Email Address ',
    name: 'signatures.supervisor_name',
  },
  // {
  //   label: 'Reporting Date and Time ',
  //   showAsterisk: true,
  //   name: 'signatures.date_time',
  // },
//   {
//     label: 'Supervisors email (please select) ',
//     showAsterisk: true,
//     name: 'signatures.supervisor_email',
//   },
];
export const scaffoldData: Partial<InputField>[] = [
  {
    label: 'Men on Job',
    name: 'reporting.menon_job',
  },
  {
    label: 'Hours Lost',
    name: 'reporting.estimated_time',
  },
  {
    label: 'Total Hours Lost',
    name: 'reporting.total_hours',
  },
];
export const dismantleRadioData = [
  {
    heading: 'Extra Truck',
    options: [
      {value: 'Yes', label: 'Yes'},
      {value: 'No', label: 'No'},
      {value: 'N/A', label: 'N/A'},
    ],
    name: 'reporting.extra_truck',
  },
];

export const initialValues  = {
    
    street_address: '',
    project_supervisor_mail: '',
    nameOf_customer: '',
    scaffolding_company: '',

    fall_from_height: {
        Protection_builder: '',
        Scaffold_missing: '',
        Components_missing: '',
        Scaffold_erection: '',
    },
    falling_objects: {
        Screening_missing: '',
        Kickboard_missing: '',
        Construction_stage: '',
    },
    strctural_integrity: {
        Bracing_missing: '',
        Ties_missing: '',
        Component_missing: '',
        Mix_matched: '',
        Equipment_condition: '',
    },
    recording: '',
    imagesAttached: [],
    your_name: '',
    your_number: '',
    your_email: '',

    reporting: {
      reportingCheck: {
        damaged_Components: '',
        missing_order: '',
      },
      menon_job: '',
      estimated_time: '',
      total_hours: '',
      extra_truck: '',
      comments: '',

    },
    signatures: {
      your_name: '',
      subcontractor_name: '',
      supervisor_name: '',
      date_time: '',
      supervisor_email: '',
    }
    
 
  };



  // projectDetails: {
  //   certificationRelation: {
  //     selectedOption: '',
  //   },
  //   projectId: '',
  //   buildingLevel: '',
  //   nameOfBuilder: '',
  //   customerABN: '',
  //   workCompletion: '',
  // },
  // scaffoldDetails: {
  //   drawingsSupplied: {
  //     heavy675: '',
  //     light225: '',
  //     Medium450: '',
  //     specialDuty: '',
  //   },
  //   elevations: {
  //     south: '',
  //     north: '',
  //     west: '',
  //     east: '',
  //     variationWorks: '',
  //     wholeProject: '',
  //     wholeLevel: '',
  //     wholeHouse: '',
  //   },
  //   inputDetails: {
  //     scaffoldLength: '',
  //     numberOfBays: '',
  //     scaffoldHeight: '',
  //     numberOfLifts: '',
  //   },
  // },
  // signatures: {
  //   customerName: '',
  //   HRWLNumber: '',
  //   customerEmail2: '',
  //   customerEmail: '',
  //   DateTime: '',
  //   customerName2: '',
  // },