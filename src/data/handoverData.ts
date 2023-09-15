import { InputField, CheckboxItem, RadioOption, HandoverFormValues } from "../types/interfaces/types";
export const initialFormData: Partial<InputField>[] = [
    {
      label: 'What"s the Project ID ?',
      showAsterisk: true,
      name: 'projectDetails.projectId',
    },
    {
      label: 'Which Building and what Level ?',
      name: 'projectDetails.buildingLevel',
    },
    {
      label: 'What"s the name of Customer or Builder ?',
      name: 'projectDetails.nameOfBuilder',
    },
    {
      label: 'Customer ABN',
      name: 'projectDetails.customerABN',
    },
    {
      label: 'How would you describe the work completed ?',
      showAsterisk: true,
      multiline: true,
      numberOfLines: 4,
      name: 'projectDetails.workCompletion',
    },
  ];
  export const scaffoldData: Partial<InputField>[] = [
    {
      label: 'Scaffold length',
      name: 'scaffoldDetails.inputDetails.scaffoldLength',
    },
    {
      label: 'No. of Bays long',
      name: 'scaffoldDetails.inputDetails.numberOfBays',
    },
    {
      label: 'Scaffold Height',
      name: 'scaffoldDetails.inputDetails.scaffoldHeight',
    },
    {
      label: 'No. of Lifts Above Base Lift',
      name: 'scaffoldDetails.inputDetails.numberOfLifts',
    },
  ];
  export const userPersonalData: Partial<InputField>[] = [
    {
      label: 'Name of authorised Customer Representative ',
      showAsterisk: true,
      name: 'signatures.customerName',
    },
    {
      label: 'Write your HRWL number (High Risk Work Licence number)',
      name: 'signatures.HRWLNumber',
    },
    {
      label: 'Write your Customer email for them to receive a pdf copy',
      name: 'signatures.customerEmail',
    },
    {
      label: 'Write your email to receive a pdf copy',
      name: 'signatures.customerEmail2',
    },
    {
      label: 'Handover Date and Time ',
      showAsterisk: true,
      name: 'signatures.DateTime',
    },
    {
      label: 'Name of authorised Customer Representative ',
      showAsterisk: true,
      name: 'signatures.customerName2',
    },
  ];

  export const elevations: CheckboxItem[] = [
    {
      label: 'East Elevation',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.east',
    },
    {
      label: 'West Elevation',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.west',
    },
    {
      label: 'North Elevation',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.north',
    },
    {
      label: 'South Elevation',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.south',
    },
    {
      label: 'Variation works',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.variationWorks',
    },
    {
      label: 'Whole Project',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.wholeProject',
    },
    {
      label: 'Whole Level',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.wholeLevel',
    },
    {
      label: 'Whole House',
      status: 'unchecked',
      name: 'scaffoldDetails.elevations.wholeHouse',
    },
  ];
  export const options: RadioOption[] = [
    {label: 'Erection', value: 'Erection'},
    {label: 'Variation Works', value: 'Variation_Works'},
    {label: 'Dismantle', value: 'Dismantle'},
    {label: 'Inspection', value: 'Inspection'},
    {label: 'Damage Rectification Works', value: 'Rectification_Works'},
    {
      label: 'Other Works - mention in Notes below',
      value: 'Other_WorksNotes',
    },
  ];
  export const loadingCapacity: CheckboxItem[] = [
    {
      label: 'LIGHT 225 KG',
      status: 'unchecked',
      name: 'scaffoldDetails.drawingsSupplied.light225',
    },
    {
      label: 'MEDIUM 450 KG',
      status: 'unchecked',
      name: 'scaffoldDetails.drawingsSupplied.Medium450',
    },
    {
      label: 'HEAVY 675 KG',
      status: 'unchecked',
      name: 'scaffoldDetails.drawingsSupplied.heavy675',
    },
    {
      label: 'SPECIAL DUTY',
      status: 'unchecked',
      name: 'scaffoldDetails.drawingsSupplied.specialDuty',
    },
  ];
  
  export const initialValues: HandoverFormValues = {
    projectDetails: {
      certificationRelation: {
        selectedOption: '',
      },
      projectId: '',
      buildingLevel: '',
      nameOfBuilder: '',
      customerABN: '',
      workCompletion: '',
    },
    scaffoldDetails: {
      drawingsSupplied: {
        heavy675: '',
        light225: '',
        Medium450: '',
        specialDuty: '',
      },
      elevations: {
        south: '',
        north: '',
        west: '',
        east: '',
        variationWorks: '',
        wholeProject: '',
        wholeLevel: '',
        wholeHouse: '',
      },
      inputDetails: {
        scaffoldLength: '',
        numberOfBays: '',
        scaffoldHeight: '',
        numberOfLifts: '',
      },
    },
    signatures: {
      customerName: '',
      HRWLNumber: '',
      customerEmail2: '',
      customerEmail: '',
      DateTime: '',
      customerName2: '',
    },
  };