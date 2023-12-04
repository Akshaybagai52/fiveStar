import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
  ProjectIdProps,
} from '../types/interfaces/types';

export const initialFormData: Partial<InputField>[] = [
  // {
  //   label: 'What"s the Project ID ?',
  //   showAsterisk: true,
  //   name: 'projectDetails.project_id',
  // },
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
  // {
  //   label: 'Start Time ',
  //   showAsterisk: true,
  //   name: 'projectDetails.number_of_attendence',
  // },
  // {
  //   label: 'Finish Time ',
  //   showAsterisk: true,
  //   name: 'projectDetails.start_time',
  // },
  
];
export const safetyToolboxProjectIdData:ProjectIdProps = {
  name: 'projectDetails.project_id',
  label: 'What is the Project ID ?',
  showAsterisk: true,
  prefilled: true,
  prefilledCustomerName: 'projectDetails.supervisor_name'
};
export const firstListHeading = 'Topics discussed and feedback'

export const topicFeedback = [
  'Scaffolders to use "1m lifts" during dismantle (1. Minimum 2 boards at all times  (2. Handrail in place at all times (includes transom as required) ',
  'Access to lower bays in scaffold section being dismantled to be physically blocked and monitored',
  'Barricade or spotter to be used to prevent access to drop zone under bin etc',
  'Dogman to be constant communication with scaffolders, crane driver and traffic control at all times',
  'Crane or monitored weight according to SWL of bin and rigging equipment',
  'Do not fill bin past indicated line',
  'Weather to be checked prior to and during work activity',
  'Scaffold bin not to be tied to or supported by scaffold structure',
  'Adequate ties, braces and structural components to be checked prior to and at the completion of work day',
  'Scaffolders to rotate labour task and use teamwork and correct manual handling techniques',
  'Licensed scaffolders only to dismantle scaffold',
  'Labourers/Groundies/Dogman only to access fully complete decks or work from ground',
  'Ensure scaffold sections are not overloaded as per the load duty and allowable multiple bays per drawing detail',
  'All workers to STOP work if unsafe and report any findings',
  'Traffic management plan to read and understood by all participating workers and management',
  'Safety Bulletins',
];

export const secondListHeading = 'Five-star scaffolding toolbox (Erect, alter and dismantle scaffold general)'

export const scaffoldingData = [
  'Scaffold to be installed using approved 1m lifts (Handrail always in place and minimum 2 boards or erection ladder',
  'Barricades or spotter to be used to manage risk of falling objects',
  'Use team lifts, mechanical advantage or correct manual handling techniques.',
  'Ensure scaffold is standing neat and not at risk of sliding.',
  'Wear mandatory PPE for site as well as task appropriate (e.g. face shield when using grinder)',
  'Do not fill bin past indicated line',
  'Only current High risk licensed scaffolders to perform scaffolding tasks. (All non-ticketed persons to work from ground only)',
  'Report all injuries and near miss incidents immediately to supervisor.',
  'No climbing up external scaffold. Access to scaffold is only via stair or ladder.',
  'Safety Bulletins',
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
    name: 'signatures.name_of_person',
  },
  {
    label: 'Write your email to receive a pdf copy ',
    name: 'signatures.email_receive_copy',
    showAsterisk: true,
  },
  {
    label: 'Write your Subcontractors email for them to receive a pdf copy',
    name: 'signatures.subcontractor_email ',
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
    data: [],
  },
  signatures: {
    name_of_person: '',
    email_receive_copy: '',
    subcontractor_email: '',
    signature_img: '',
  },
  names: [],
};
