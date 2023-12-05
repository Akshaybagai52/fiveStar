import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
  ProjectIdProps,
} from '../types/interfaces/types';

const twoOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
];

export const initialFormData: Partial<InputField>[] = [
  // {
  //   label: 'What"s the Project ID ?',
  //   showAsterisk: true,
  //   name: 'project_id',
  // },
  {
    label: 'Customer Name',
    name: 'nameOf_customer',
    //   multiline: true,
    //   numberOfLines: 4,
  },
];

export const scaffoldTemperingProjectIdData:ProjectIdProps = {
  name: 'project_id',
  label: 'What"s the Project ID ? ',
  showAsterisk: true,
  prefilled: true,
  prefilledCustomerName: 'nameOf_customer',
};

export const list = [
    {
        heading: 'Category of scaffold tampering as per chapter 7.3 of the SafeWork NSW Scaffold Industry Safety Standard TYPICAL RECTIFICATION WORK (Licensed FSS Scaffolder to reinstate with Handover certificate)',
        listText: [
            'Missing Handrails, Mid-Rails, Kickboards',
            'Missing Hop-up’s and Tie-bars',
          ],
    },
    {
        heading: 'Category of scaffold tampering as per chapter 7.3 of the SafeWork NSW Scaffold Industry Safety Standard TYPICAL RECTIFICATION WORK (Licensed FSS Scaffolder to reinstate with Handover certificate)',
        listText: [
            'Missing Handrails, Mid-Rails, Kickboards',
            'Missing Hop-up’s and Tie-bars',
          ],
    }
]

export const erectionRadioData = [
  {
    heading:
      'Q1. Has this caused a risk of structural integrity to the scaffold?',
    options: twoOptions,
    name: 'structural_integrity',
  },
  {
    heading:
      'Q2. Has this created a risk of falling objects from the scaffold structure?',
    options: twoOptions,
    name: 'falling_objects',
  },
  {
    heading:
      'Q3. Has this made any part of the scaffold unsafe for general access?',
    options: twoOptions,
    name: 'general_access',
  },
  {
    heading:
      'Q4. Has the scaffold or areas been affected been closed off with signage?',
    options: twoOptions,
    name: 'affacted_area',
  },
  {
    heading:
      'Q5. Has a Handover certificate/engineer certificate been completed following the repair of the scaffold?',
    options: twoOptions,
    name: 'repair_scaffold',
  },
];
export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Name of Supervisor',
    showAsterisk: true,
    name: 'Supervisor_Name',
  },
  {
    label: 'Email address of Supervisor ',
    name: 'supervisor_emails',
    showAsterisk: true,
  },
  {
    label: 'Name of Customer Representative',
    name: 'customer_representative ',
  },
  {
    label: 'Email of Customer Representative',
    name: 'representative_email',
  },
];

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
//     data: [],
//   },
//   signatures: {
//     name_of_person: '',
//     email_receive_copy: '',
//     subcontractor_email: '',
//     signature_img: '',
//   },
//   names: [],
// };

export const initialValues = {
  project_id: '',
  date: '',
  nameOf_customer: '',
  unapproved_modification: '',
  structural_integrity: '',
  falling_objects: '',
  general_access: '',
  affacted_area: '',
  repair_scaffold: '',
  prevent_recurrence: '',
  Supervisor_Name: '',
  supervisor_emails: '',
  customer_representative: '',
  representative_email: '',
  supervisorSignature: '',
};
