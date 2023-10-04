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
  {
    label: 'Start Time ',
    showAsterisk: true,
    name: 'projectDetails.number_of_attendence',
  },
  {
    label: 'Finish Time ',
    showAsterisk: true,
    name: 'projectDetails.start_time',
  },
  
];

export const scaffoldData: Partial<InputField>[] = [
  {
    label: 'Name 1',
    name: 'record.name_1',
  },
];
export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Name of person conducting this Safety Tool Box Discussion',
    showAsterisk: true,
    name: 'signatures.name_day_labour_docket',
  },
  {
    label: 'Write your email to receive a pdf copy ',
    name: 'signatures.email_receive_copy',
    showAsterisk: true,
  },
  {
    label: 'Write your Subcontractors email for them to receive a pdf copy',
    name: 'signatures.email_receive_copy ',
    showAsterisk: true,
  },
];

// export const elevations: CheckboxItem[] = [
//   {
//     label: 'East Elevation',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.East_Elevation',
//   },
//   {
//     label: 'West Elevation',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.West_Elevation',
//   },
//   {
//     label: 'North Elevation',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.North_Elevation',
//   },
//   {
//     label: 'South Elevation',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.South_Elevation',
//   },
//   {
//     label: 'Basement',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.Basement',
//   },
//   {
//     label: 'Whole Level',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.Whole_Level',
//   },
//   {
//     label: 'Whole House',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.Whole_House',
//   },
//   {
//     label: 'Whole Tower',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.Whole_Tower',
//   },
//   {
//     label: 'Total Site',
//     status: 'unchecked',
//     name: 'workDetails.elevationCheckbox.Total_Site',
//   },
// ];
// export const options: RadioOption[] = [
//   {label: 'Variation Works', value: 'Variation_Works'},
//   {label: 'Hourly Labour', value: 'Hourly_labour'},
//   {label: 'Day Labour Other', value: 'Day_labour_other'},
// ];
export const loadingCapacity: CheckboxItem[] = [
  {
    label: 'Bin Strip Dismantle',
    status: 'unchecked',
    name: 'projectDetails.workRelation.Pre_works',
  },
  {
    label: 'Erect, Alter & Dismantle',
    status: 'unchecked',
    name: 'projectDetails.workRelation.BaseOut',
  },


];

// export const erectionData: CheckboxItem[] = [
//   {
//     label: 'Day Labour - External',
//     status: 'unchecked',
//     name: 'projectDetails.docketRelation.selectedOptionData.variation.Day_Labour_External',
//   },
//   {
//     label: 'Day Labour - Internal',
//     status: 'unchecked',
//     name: 'projectDetails.docketRelation.selectedOptionData.variation.Day_Labour_Internal',
//   },
//   {
//     label: 'Day Labour - Other works',
//     status: 'unchecked',
//     name: 'projectDetails.docketRelation.selectedOptionData.variation.Day_Labour_Other_works',
//   },
//   {
//     label: 'Customer Request',
//     status: 'unchecked',
//     name: 'projectDetails.docketRelation.selectedOptionData.variation.Customer_Request',
//   },
// ];

// export const variationData: CheckboxItem[] = [
//   {
//     label: 'Temporary Labour',
//     status: 'unchecked',
//     name: 'projectDetails.docketRelation.selectedOptionData.hourlyLabour.Temporary_Labour',
//   },
//   {
//     label: 'Contract Works',
//     status: 'unchecked',
//     name: 'projectDetails.stageDiscussion.Dismantle.hourlyLabour.Contract_Works',
//   },
//   {
//     label: 'Other works',
//     status: 'unchecked',
//     name: 'projectDetails.stageDiscussion.Existing_Scaffold.hourlyLabour.Other_works',
//   },
// ];

export const initialValues = {
  projectDetails: {
    stageDiscussion: {
      Dismantle: '',
      Existing_Scaffold: '',
    },
    date: '',
    project_id: '',
    building_level: '',
    nameOf_customer: '',
    supervisor_name: '',
    number_of_attendence: '',
    start_time: '',
    finish_time: '',
    duration: '',
    work_description: '',
  },
  supervisor_notes: '',
  record: {
    name_1: '',
    additional_cmt: '',
  },
  signatures: {
    name_of_person: '',
    email_receive_copy: '',
    subcontractor_email: '',
  },
};
