import { CheckboxItem, DamagedFormValues, HandoverFormValues, InputField } from "../types/interfaces/types";

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'projectId',
    multiline: true,
    numberOfLines: 5,
  },
];
export const damagedProjectIdData = {
  name: 'projectId',
  label: 'What is the Project ID ?',
  showAsterisk: true,
  prefilled: false,
}
export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'Damaged Scaffold Components',
    status: 'unchecked',
    name: 'reporting.reportingCheck.damaged_Components',
  },
  {
    label: 'Missing Order Items',
    status: 'unchecked',
    name: 'reporting.reportingCheck.missing_order',
  },
];

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Your Name',
    name: 'signatures.your_name',
    prefilled: true,
    prefilledUsername: true,
  },
  {
    label: 'Subcontractor Name',
    name: 'signatures.subcontractor_name',
  },
  {
    label: 'Supervisor Name (please select) ',
    showAsterisk: true,
    name: 'signatures.supervisor_name',
  },
  // {
  //   label: 'Reporting Date and Time ',
  //   showAsterisk: true,
  //   name: 'signatures.date_time',
  // },
  {
    label: 'Supervisors email (please select) ',
    showAsterisk: true,
    name: 'signatures.supervisor_email',
  },
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

export const initialValues: DamagedFormValues  = {
    projectId: '',
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