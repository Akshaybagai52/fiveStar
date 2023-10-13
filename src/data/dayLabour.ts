import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
} from '../types/interfaces/types';

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'projectDetails.project_id',
  },
  {
    label: 'FSS Purchase Order #',
    name: 'projectDetails.purchase_order',
  },
  {
    label: 'Which Building and what Level did you work at ?',
    name: 'projectDetails.building_level',
    multiline: true,
    numberOfLines: 4,
  },
  {
    label: 'What"s the name of Customer or Builder ?',
    showAsterisk: true,
    name: 'projectDetails.nameOf_customer',
  },
];


// export const scaffoldData: Partial<InputField>[] = [
//   {
//     label: 'Number of Men ',
//     showAsterisk: true,
//     name: 'scaffoldDetails.inputDetails.scaffoldLength',
//   },
//   {
//     label: 'Number of Hours Per Man ',
//     showAsterisk: true,
//     name: 'scaffoldDetails.inputDetails.numberOfBays',
//   },
//   {
//     label: 'Total Hours ',
//     showAsterisk: true,
//     name: 'scaffoldDetails.inputDetails.scaffoldHeight',
//   },
// ];
export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Name of person Issuing this Day Labour Docket ',
    showAsterisk: true,
    name: 'signatures.name_day_labour_docket',
  },
  {
    label: 'Name of authorised Customer site representative',
    name: 'signatures.authorised',
  },
  {
    label: 'Write your email to receive a pdf copy ',
    name: 'signatures.email_receive_copy',
    showAsterisk: true,

  },
  {
    label: 'Write your Customer email for them to receive a pdf copy',
    name: 'signatures.customers_mail',
  },
  {
    label: 'Customer representative capacity and designation ',
    showAsterisk: true,
    name: 'signatures.customer_Representative',
  },
];

export const elevations: CheckboxItem[] = [
  {
    label: 'East Elevation',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.East_Elevation',
  },
  {
    label: 'West Elevation',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.West_Elevation',
  },
  {
    label: 'North Elevation',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.North_Elevation',
  },
  {
    label: 'South Elevation',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.South_Elevation',
  },
  {
    label: 'Basement',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.Basement',
  },
  {
    label: 'Whole Level',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.Whole_Level',
  },
  {
    label: 'Whole House',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.Whole_House',
  },
  {
    label: 'Whole Tower',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.Whole_Tower',
  },
  {
    label: 'Total Site',
    status: 'unchecked',
    name: 'workDetails.elevationCheckbox.Total_Site',
  },

];
export const options: RadioOption[] = [
  {label: 'Variation Works', value: 'Variation_Works'},
  {label: 'Hourly Labour', value: 'Hourly_labour'},
  {label: 'Day Labour Other', value: 'Day_labour_other'},
];
export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'Pre-works',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Pre_works',
  },
  {
    label: 'BaseOut',
    status: 'unchecked',
    name: 'projectDetails.workRelation.BaseOut',
  },
  {
    label: 'Erection - New Scaffold',
    status: 'unchecked',
    name: 'projectDetails.workRelation.ErectionNew_Scaffold',
  },
  {
    label: 'Erection - Addition to Existing Scaffold',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Existing_Scaffold',
  },
  {
    label: 'Dismantle',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Dismantle',
  },
  {
    label: 'Perimeter Stairs',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Perimeter_Stairs',
  },
  {
    label: 'Perimeter Scaffold',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Perimeter_Scaffold',
  },
  {
    label: 'Lift Shaft',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Lift_Shaft',
  },
  {
    label: 'Bird Cage',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Bird_Cage',
  },
  {
    label: 'Loading Platform',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Loading_Platform',
  },
  {
    label: 'Suspended Alloy Stairs',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Suspended_Alloy_Stairs',
  },
  {
    label: 'Suspended Stretched Stairs',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Suspended_Stretched_Stairs',
  },
  {
    label: 'Non Suspended Alloy Stairs',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Non_Suspended_Alloy_Stairs',
  },
  {
    label: 'Non Suspended Stretcher Stairs',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Non_Suspended_Stretcher_Stairs',
  },
  {
    label: 'Lift Overrun',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Lift_Overrun',
  },
  {
    label: 'Roof rails',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Roof_rails',
  },
  {
    label: 'Hand Rails/Edge Protection',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Hand_Rails',
  },
  {
    label: 'Damage Rectification Works',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Rectification_Works',
  },
  {
    label: 'Inspection remediation Works',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Remediation_Works',
  },
  {
    label: 'Other Works - mention in works description below',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Other_Works_description',
  },


];

export const erectionData: CheckboxItem[] = [
  {
    label: 'Day Labour - External',
    status: 'unchecked',
    name: 'projectDetails.docketRelation.selectedOptionData.variation.Day_Labour_External',
  },
  {
    label: 'Day Labour - Internal',
    status: 'unchecked',
    name: 'projectDetails.docketRelation.selectedOptionData.variation.Day_Labour_Internal',
  },
  {
    label: 'Day Labour - Other works',
    status: 'unchecked',
    name: 'projectDetails.docketRelation.selectedOptionData.variation.Day_Labour_Other_works',
  },
  {
    label: 'Customer Request',
    status: 'unchecked',
    name: 'projectDetails.docketRelation.selectedOptionData.variation.Customer_Request',
  },
];

export const variationData: CheckboxItem[] = [
  {
    label: 'Temporary Labour',
    status: 'unchecked',
    name: 'projectDetails.docketRelation.selectedOptionData.hourlyLabour.Temporary_Labour',
  },
  {
    label: 'Contract Works',
    status: 'unchecked',
    name: 'projectDetails.docketRelation.selectedOptionData.hourlyLabour.Contract_Works',
  },
  {
    label: 'Other works',
    status: 'unchecked',
    name: 'projectDetails.docketRelation.selectedOptionData.hourlyLabour.Other_works',
  },
];

// export const inspectionData: CheckboxItem[] = [
//   {
//     label: '30 Day (Monthly Inspections)',
//     status: 'unchecked',
//     name: 'projectDetails.certificationRelation.selectedOptionData.inspection.day30',
//   },
//   {
//     label: 'Inspection remediation Works',
//     status: 'unchecked',
//     name: 'projectDetails.certificationRelation.selectedOptionData.inspection.inspectionRemediation',
//   },
// ];

// const threeOptions = [
//   {value: 'Yes', label: 'Yes'},
//   {value: 'No', label: 'No'},
//   {value: 'N/A', label: 'N/A'},
// ];

// export const erectionRadioData = [
//   {
//     heading:
//       '1. Take Photos of Inspected area attach to report with signed Handover.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.inspected_area',
//   },
//   {
//     heading: '2. Jacks base plate centre to sole boards.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.base_plate',
//   },
//   {
//     heading: '3. Face braces installed every 3rd bay',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.braces_installed',
//   },
//   {
//     heading: '4. End braces installed.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.end_braces',
//   },
//   {
//     heading:
//       '5. Kickboards installed correctly end bays fitted with external clips.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.kickboards_installed',
//   },
//   {
//     heading: '6. Face of scaffold level and plump.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.scaffold_level',
//   },
//   {
//     heading:
//       '7. Strecher stair correct position infills, lap plates, stair bolts, scaff tag, Handdrails, step down at base, step off at floor level, correctly fitted.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.strecher_stair',
//   },
//   {
//     heading:
//       '8. Alloy stair correct position all handdrails secured with bolts step down in place scaff tag fitted',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.alloy_stair',
//   },
//   {
//     heading: '9. Chain and shade fitted correctly looks neat and tidy.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.chain_shade',
//   },
//   {
//     heading: '10. Ties installed correct position.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.ties_installed',
//   },
//   {
//     heading:
//       '11. Check gap from face of Building scaffold in correct position.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.building_scaffold',
//   },
//   {
//     heading:
//       '12. Housekeeping has area been cleared of left-over material and left clean.',
//     options: threeOptions,
//     name: 'projectDetails.scaffoldChecklist.houesekeeping_area',
//   },
// ];

// export const dismantleRadioData = [
//   {
//     heading: '1. Scaffold has sufficient ties remaining in place.',
//     options: threeOptions,
//     name: 'projectDetails.dismantleChecklist.sufficient_ties',
//   },
//   {
//     heading: '2. Scaffold has safe access for scaffolders to perfrom task.',
//     options: threeOptions,
//     name: 'projectDetails.dismantleChecklist.scaffolders_perform',
//   },
//   {
//     heading:
//       '3. All structural components are in place (Braces, Transoms, ledgers)',
//     options: threeOptions,
//     name: 'projectDetails.dismantleChecklist.structural_components',
//   },
//   {
//     heading:
//       '4. Scaffold has been physically blocked from unauthorized access where required.',
//     options: threeOptions,
//     name: 'projectDetails.dismantleChecklist.physically_blocked',
//   },
// ];

export const initialValues = {
  projectDetails: {
    docketRelation: {
      selectedOption: '',
      selectedOptionData: {
        variation: {
          Day_Labour_External: '',
          Day_Labour_Internal: '',
          Day_Labour_Other_works: '',
          Customer_Request: '',
        },
        hourlyLabour: {
          Temporary_Labour: '',
          Contract_Works: '',
          Other_works: '',
        },
      },
    },
    date: '',
    project_id: '',
    purchase_order: '',
    building_level: '',
    nameOf_customer: '',
    workRelation: {
      Pre_works: '',
      BaseOut: '',
      ErectionNew_Scaffold: '',
      Existing_Scaffold: '',
      Dismantle: '',
      Perimeter_Stairs: '',
      Perimeter_Scaffold: '',
      Lift_Shaft: '',
      Bird_Cage: '',
      Loading_Platform: '',
      Suspended_Alloy_Stairs: '',
      Suspended_Stretched_Stairs: '',
      Non_Suspended_Alloy_Stairs: '',
      Non_Suspended_Stretcher_Stairs: '',
      Lift_Overrun: '',
      Roof_rails: '',
      Hand_Rails: '',
      Rectification_Works: '',
      Remediation_Works: '',
      Other_Works_description: '',
    },
  },
  workDetails: {
    elevationCheckbox: {
      East_Elevation: '',
      West_Elevation: '',
      North_Elevation: '',
      South_Elevation: '',
      Basement: '',
      Whole_Level: '',
      Whole_House: '',
      Whole_Tower: '',
      Total_Site: '',
    },
    workDescription: {
      description: [],
    },
  },
  signatures: {
    name_day_labour_docket: '',
    authorised: '',
    email_receive_copy: '',
    customers_mail: '',
    capacity_designation: '',
    customer_Representative: '',
  },
  number: [{
    number: ""
  }],
};
