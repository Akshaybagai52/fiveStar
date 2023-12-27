import {InputField, ProjectIdProps} from '../types/interfaces/types';

const threeOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
  {value: 'Not Aplicable', label: 'Not Aplicable'},
];

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'project_id',
  },
];
export const siteAuditProjectIdData:ProjectIdProps = {
  name: 'project_id',
  label: 'What"s the Project ID ? ',
  showAsterisk: true,
  prefilled: false,
};
export const inputField1: Partial<InputField>[] = [
  {
    label: 'Safe work method Comments Q1',
    name: 'inspection.safe_work_cmt',
  },
];
export const inputField2: Partial<InputField>[] = [
  {
    label: 'Workers signed in comments for Q2',
    name: 'inspection.work_signed_cmt2',
  },
];
export const inputField3: Partial<InputField>[] = [
  {
    label: 'Controls are in place comments for Q3',
    name: 'inspection.Controls_cmt3',
  },
];
export const inputField4: Partial<InputField>[] = [
  {
    label: 'All risk of falls comments for Q4',
    name: 'inspection.All_risk_cmt4',
  },
];
export const inputField5: Partial<InputField>[] = [
  {
    label: 'Manual Handling techniques comments for Q5',
    name: 'inspection.manual_Handling_cmt5',
  },
];
export const inputField6: Partial<InputField>[] = [
  {
    label: 'Prevent falling/sliding comments for Q6',
    name: 'inspection.Prevent_falling_cmt6',
  },
];
export const inputField7: Partial<InputField>[] = [
  {
    label: 'Workers signed in comments for Q2',
    name: 'inspection.Damaged_Scaffold_cmt7',
  },
];
export const inputField8: Partial<InputField>[] = [
  {
    label: 'Handover Scaffold Certificate comments for Q8',
    name: 'inspection.Handover_Certificate_cmtQ8',
  },
];
export const inputField9: Partial<InputField>[] = [
  {
    label: 'Scaffold tag comments for Q9',
    name: 'inspection.Scaffoled_signed_cmtQ9',
  },
];
export const inputField10: Partial<InputField>[] = [
  {
    label:
      '10. How many Workers hold current High Risk Work Licence? (Licence must be with Worker’s possession - Transport NSW digital photo acceptable)',
    name: 'inspection.high_risk_worlers',
  },
];

export const inputField11: Partial<InputField>[] = [
  {
    label: 'Scaffolders',
    name: 'inspection.scaffolders_number',
  },
  {
    label: 'Labourers (Groundies)',
    name: 'inspection.groundies',
  },
];

export const siteAuditRadio1 = [
  {
    heading: '1. Safe Work Method Statement complete & Signed ? ',
    options: threeOptions,
    name: 'inspection.safe_work_statement',
  },
];
export const siteAuditRadio2 = [
  {
    heading: '2. All workers are signed into Site Project ? ',
    options: threeOptions,
    name: 'inspection.workers_signed_project',
  },
];
export const siteAuditRadio3 = [
  {
    heading:
      '3. Controls are in place for falling objects (Barricade with signage, spotters in place)  ',
    options: threeOptions,
    name: 'inspection.control_places',
  },
];
export const siteAuditRadio4 = [
  {
    heading:
      '4. All risk of falls are being controlled with 1 metre lifts (i.e workers on 2 boards minimum and guardrails always in place) ',
    options: threeOptions,
    name: 'inspection.risk_falls',
  },
];
export const siteAuditRadio5 = [
  {
    heading:
      '5. Workers are using correct manual Handling techniques (i.e Bending knees, Back Straight, Team Lifts as required, ROTATE tasks) ',
    options: threeOptions,
    name: 'inspection.manual_handling',
  },
];
export const siteAuditRadio6 = [
  {
    heading:
      '6. Scaffold is stacked neatly to Prevent Objects falling/sliding ? ',
    options: threeOptions,
    name: 'inspection.Scaffold_stacked',
  },
];
export const siteAuditRadio7 = [
  {
    heading: '7. Damaged Scaffold clearly identified in Separate Stillage ? ',
    options: threeOptions,
    name: 'inspection.Damaged_scaffold',
  },
];
export const siteAuditRadio8 = [
  {
    heading: '8. Is Handover Scaffold Certificate up to Date ? ',
    options: threeOptions,
    name: 'inspection.Handover_Scaffoled',
  },
];
export const siteAuditRadio9 = [
  {
    heading: '9. Is Scaffold tag signed & updated ? ',
    options: threeOptions,
    name: 'inspection.Scaffoled_signed',
  },
];
export const siteAuditRadio12 = [
  {
    heading:
      '12. Are Labourers/Groundies working from Ground or Fully complete and Handed over sections of the Scaffold? ',
    options: threeOptions,
    name: 'inspection.labourers_groundies',
  },
];
export const siteAuditRadio13 = [
  {
    heading: '13. Are Workers passing Scaffold Internally or Chain Staggered? ',
    options: threeOptions,
    name: 'inspection.internally_scaffold',
  },
];

export const supervisorName = {
  name: 'Supervisor_Name',
  label: 'Supervisor Name (please select) ',
  showAsterisk: true,
};
export const supervisorEmail = {
  name: 'supervisor_emails',
  label: 'Supervisor Emails (please select) ',
  showAsterisk: true,
};

export const subcontractor = {
  name: 'subcontractor',
  label: 'SubContractor (please select) ',
  showAsterisk: true,
};

export const initialValues = {
  project_id: '',
  project_level: '',
  inspection: {
    inspection_notes: '',
    safe_work_statement: '',
    safe_work_cmt: '',
    workers_signed_project: '',
    work_signed_cmt2: '',
    control_places: '',
    Controls_cmt3: '',
    risk_falls: '',
    All_risk_cmt4: '',
    manual_handling: '',
    manual_Handling_cmt5: '',
    Scaffold_stacked: '',
    Prevent_falling_cmt6: '',
    Damaged_scaffold: '',
    Damaged_Scaffold_cmt7: '',
    Handover_Scaffoled: '',
    Handover_Certificate_cmtQ8: '',
    Scaffoled_signed: '',
    Scaffoled_signed_cmtQ9: '',
    high_risk_worlers: '',
    scaffolders_number: '',
    groundies: '',
    labourers_groundies: '',
    internally_scaffold: '',
    date: '',
  },
  Supervisor_Name: '',
  inspection_date: '',
  supervisor_emails: '',
  subcontractor: '',
  inspectorSignature: '',
};
