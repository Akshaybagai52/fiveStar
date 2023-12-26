import {
    InputField,
    CheckboxItem,
    RadioOption,
    ProjectIdProps,
  } from '../types/interfaces/types';
  const threeOptions = [
    {value: 'Yes', label: 'Yes'},
    {value: 'No', label: 'No'},
    {value: 'N/A', label: 'N/A'},
  ];
  
  export const initialFormData: Partial<InputField>[] = [
    {
      label: 'Workplace: Warehouse/Transport',
      name: 'workplace',
    },
    {
      label: 'Name of Supervisor or Presenter',
      name: 'supervisor',
    },
  ];
  
  export const monthlyInspectionProjectIdData:ProjectIdProps = {
    name: 'project_id',
    label: 'What"s the Project ID ? ',
    showAsterisk: true,
    prefilled: true,
    prefilledCustomerName: 'nameOf_customer',
    prefilledCustomerAbn: 'Customer_ABN',
  };
  
  export const scaffoldData: Partial<InputField>[] = [
    {
      label: 'Scaffold length',
      name: 'Scaffold_length',
    },
    {
      label: 'No. of Bays long',
      name: 'Bays_long',
    },
    {
      label: 'Scaffold Height',
      name: 'Scaffold_Height',
    },
    {
      label: 'No. of Lifts Above Base Lift',
      name: 'Above_Base_Lift',
    },
  ];
  
  export const firstPersonName: Partial<InputField>[] = [
    {
      label: 'Name',
      name: 'present_person_name',
    },
  ];

  export const secondPersonName: Partial<InputField>[] = [
    {
      label: 'Name',
      name: 'second_present_person_name',
    },
  ];
  export const feedback: Partial<InputField>[] = [
    {
      label: 'We have discussed the following topics',
      name: 'topic_discuss',
      multiline: true,
      numberOfLines: 4,
    },
    {
        label: 'Comments feedback',
        name: 'feedback_comment',
        multiline: true,
        numberOfLines: 4,
      },
  ];

  
  export const elevations: CheckboxItem[] = [
    {
      label: 'East Elevation',
      status: 'unchecked',
      name: 'elevations.East_Elevation',
    },
    {
      label: 'West Elevation',
      status: 'unchecked',
      name: 'elevations.West_Elevation',
    },
    {
      label: 'North Elevation',
      status: 'unchecked',
      name: 'elevations.North_Elevation',
    },
    {
      label: 'South Elevation',
      status: 'unchecked',
      name: 'elevations.South_Elevation',
    },
    {
      label: 'Lift Shaft',
      status: 'unchecked',
      name: 'elevations.Lift_Shaft',
    },
    {
      label: 'Base',
      status: 'unchecked',
      name: 'elevations.Base',
    },
    {
      label: 'Bird Cage',
      status: 'unchecked',
      name: 'elevations.Bird_Cage',
    },
    {
      label: 'Roof',
      status: 'unchecked',
      name: 'elevations.Roof',
    },
    {
      label: 'Void',
      status: 'unchecked',
      name: 'elevations.Void',
    },
    {
      label: 'Loading Platform',
      status: 'unchecked',
      name: 'elevations.Loading_Platform',
    },
    {
      label: 'Whole Level',
      status: 'unchecked',
      name: 'elevations.Whole_Level',
    },
    {
      label: 'Whole House',
      status: 'unchecked',
      name: 'elevations.Whole_House',
    },
  
  ];
  export const options: RadioOption[] = [
    {label: '30 Day (Monthly Inspection)', value: 'monthly_inspection'},
    {
      label: 'Other Works - mention in Notes below',
      value: 'Other_WorksNotes',
    },
  ];
  
  export const drawingOptions = [
    {
      heading: 'Is scaffold built as per Drawings Supplied ?',
      options: threeOptions,
      name: 'certificateRelation',
    },
  ];
  export const loadingCapacity: CheckboxItem[] = [
    {
      label: 'LIGHT 225 KG',
      status: 'unchecked',
      name: 'loadingCapacity.LIGHT_225KG',
    },
    {
      label: 'MEDIUM 450 KG',
      status: 'unchecked',
      name: 'loadingCapacity.MEDIUM_450KG',
    },
    {
      label: 'HEAVY 675 KG',
      status: 'unchecked',
      name: 'loadingCapacity.HEAVY_675KG',
    },
    {
      label: 'SPECIAL DUTY',
      status: 'unchecked',
      name: 'loadingCapacity.SPECIAL_DUTY',
    },
  ];
  
  
  export const initialValues = {
    workplace: '',
    date: '',
    supervisor: '',
    time: '',
    present_person_name: '',
    first_signature: '',
    second_present_person_name: '',
    second_signature: '',
    topic_discuss: '',
    feedback_comment: '',
  };
  