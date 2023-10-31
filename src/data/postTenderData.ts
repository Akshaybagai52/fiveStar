import {InputField} from '../types/interfaces/types';

const threeOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
  {value: 'Not Aplicable', label: 'Not Aplicable'},
];

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'Address of the Construction site',
    showAsterisk: true,
    name: 'project_id',
  },
];

export const secondFormData: Partial<InputField>[] = [
  {
    label: 'What"s the required height of Scaffold?',
    name: 'required_height',
  },
  {
    label:
      'What"s the required load duty of scaffold? (Medium Duty 450kg/675kg wide or Heavy Duty 675kg/1200mm wide)?',
    name: 'duty_scaffold',
  },
  {
    label:
      'What"s the surface scaffold is to be erected on? (Request Geotech Report)',
    name: 'surface_scaffold',
  },
  {
    label: 'What"s the structure the Scaffold will/can be tied to?',
    name: 'structure_scaffold',
  },
  {
    label:
      'What"s the Site or footprint limitations? E.g. areas that require ladder beam openings or suspended scaffold legs? (Exact measurements and mark up locations)',
    name: 'footprint_limitations',
  },
  {
    label:
      'Any Powerlines, Trees, Cranes/hoists, Site Sheds locations that will impact the scaffold design? (Exact measurements and mark up locations)',
    name: 'scaffold_design',
  },
  {
    label: 'Are areas of scaffolding require hoardings?',
    name: 'hoardings',
  },
  {
    label:
      'What are the types and locations of access on the scaffold structure? (Access of Safe scaffold erection/dismantle in all locations must be included?',
    name: 'location_access',
  },
];
export const recordingComp = [
  {
    heading:
      'Are there any areas of the scaffold that require containment sheeting?',
    name: 'containment_sheeting',
  },
  {
    heading:
      'Are there any areas of scaffold that require loading bays and/or crane loading platforms?',
    name: 'loading_platforms',
  },
  {
    heading: 'Is there any vehicle routes that may impact the scaffold?',
    name: 'vehicle_routes',
  },
  {
    heading:
      'Any facade detail at the working face? (Detail to be included in the mark up)',
    name: 'facade_detail',
  },
];
export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Submitted by ',
    showAsterisk: true,
    name: 'Supervisor_Name',
  },
];

export const initialValues = {
  project_id: '',
  landmark_location: '',
  date: '',
  required_height: '',
  duty_scaffold: '',
  surface_scaffold: '',
  structure_scaffold: '',
  footprint_limitations: '',
  scaffold_design: '',
  hoardings: '',
  location_access: '',
  containment_sheeting: '',
  loading_platforms: '',
  vehicle_routes: '',
  facade_detail: '',
  Supervisor_Name: '',
  supervisorSignature: '',
  customerSignature: '',
};
