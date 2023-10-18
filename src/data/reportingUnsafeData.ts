import { CheckboxItem, DamagedFormValues, HandoverFormValues, InputField } from "../types/interfaces/types";

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'Site Address ',
    showAsterisk: true,
    name: 'street_address',
  },
  {
    label: 'Email',
    name: 'project_supervisor_mail',
  },
  {
    label: 'Builder: (if known)',
    name: 'nameOf_customer',
  },
  {
    label: 'Scaffolding Company: (if known)',
    name: 'scaffolding_company',
  },
];
export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'Insufficient or non-existent Edge protection installed by PCBU/Builder',
    status: 'unchecked',
    name: 'fall_from_height.Protection_builder',
  },
  {
    label: 'Scaffold missing Edge protection, or not compliant',
    status: 'unchecked',
    name: 'fall_from_height.Scaffold_missing',
  },
  {
    label: 'Hop up components missing or not compliant',
    status: 'unchecked',
    name: 'fall_from_height.Components_missing',
  },
  {
    label: 'Scaffold erection/Dismantle system of work unsafe',
    status: 'unchecked',
    name: 'fall_from_height.Scaffold_erection',
  },
];

export const loadingCapacity2: CheckboxItem[] = [
    {
      label: 'Containment screening missing or not compliant',
      status: 'unchecked',
      name: 'falling_objects.Screening_missing',
    },
    {
      label: 'Kickboards missing or not compliant',
      status: 'unchecked',
      name: 'falling_objects.Kickboard_missing',
    },
    {
      label: 'Scaffold containment screening height insufficient for the construction stage.',
      status: 'unchecked',
      name: 'falling_objects.Construction_stage',
    },
  ];

  export const loadingCapacity3: CheckboxItem[] = [
    {
      label: 'Bracing missing or not compliant',
      status: 'unchecked',
      name: 'strctural_integrity.Bracing_missing',
    },
    {
      label: 'Ties missing or not compliant',
      status: 'unchecked',
      name: 'strctural_integrity.Ties_missing',
    },
    {
      label: 'Scaffold components missing or not compliant',
      status: 'unchecked',
      name: 'strctural_integrity.Component_missing',
    },
    {
      label: 'Mix and matched scaffold components.',
      status: 'unchecked',
      name: 'strctural_integrity.Mix_matched',
    },
    {
        label: 'Condition of equipment / Damaged or rusted out components',
        status: 'unchecked',
        name: 'strctural_integrity.Equipment_condition',
      },
  ];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Your Name',
    showAsterisk: true,
    name: 'your_name',
  },
  {
    label: 'Your Phone Number',
    name: 'your_number',
  },
  {
    label: 'Your Email Address ',
    name: 'your_email',
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
// export const scaffoldData: Partial<InputField>[] = [
//   {
//     label: 'Men on Job',
//     name: 'reporting.menon_job',
//   },
//   {
//     label: 'Hours Lost',
//     name: 'reporting.estimated_time',
//   },
//   {
//     label: 'Total Hours Lost',
//     name: 'reporting.total_hours',
//   },
// ];
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
    // imagesAttached: [],
    your_name: '',
    your_number: '',
    your_email: '',

     
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