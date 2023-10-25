import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
} from '../types/interfaces/types';
const threeOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
  {value: 'N/A', label: 'N/A'},
];

export const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'project_id',
  },
  {
    label: 'Which Building and what Level ?',
    name: 'project_level',
  },
  {
    label: 'What"s the name of Customer or Builder ?',
    name: 'nameOf_customer',
  },
  {
    label: 'Customer ABN',
    name: 'Customer_ABN',
  },
  {
    label: 'How would you describe the work completed ?',
    showAsterisk: true,
    multiline: true,
    numberOfLines: 4,
    name: 'inspection_notes',
  },
];

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

export const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Name of person preparing this Certificate ',
    showAsterisk: true,
    name: 'name_prepare_certificate',
  },
  {
    label: 'Handover Date and Time ',
    showAsterisk: true,
    name: 'date_time',
  },
  {
    label: 'Write your email to receive a pdf copy ',
    name: 'email_receive_copy',
  },
  {
    label: 'Write your Customer email for them to receive a pdf copy ',
    name: 'customers_mail',
  },
  {
    label: 'Write your HRWL number (High Risk Work Licence number) ',
    name: 'HRWL_number',
  },
  {
    label: 'Name of authorised Customer Representative ',
    showAsterisk: true,
    name: 'customer_Representative',
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

export const erectionData: CheckboxItem[] = [
  {
    label: 'Pre-works',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.preWorks',
  },
  {
    label: 'BaseOut',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.baseOut',
  },
  {
    label: 'Bird Cage',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.birdCage',
  },
  {
    label: 'Level',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.level',
  },
  {
    label: 'Roof',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.roof',
  },
  {
    label: 'Void',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.void',
  },
  {
    label: 'Erection - New Scaffold (start new project)',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.erectionNew',
  },
  {
    label: 'Erection - Additional scaffold',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.erectionAdditional',
  },
  {
    label: 'Top Up',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.topUp',
  },
  {
    label: 'Stairs',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.stairs',
  },
  {
    label: 'Mesh',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.mesh',
  },
  {
    label: 'Lift Shaft',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.liftShaft',
  },
  {
    label: 'Perimeter only',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.perimeterOnly',
  },
  {
    label: 'Perimeter with hop-up’s',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.perimeterWithHopUps',
  },
  {
    label: 'A Class',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.aClass',
  },
  {
    label: 'B Class',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.bClass',
  },
  {
    label: 'Ladder Beam',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.ladderBeam',
  },
  {
    label: 'Powerline protection',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.powerlineProtection',
  },
  {
    label: 'Lift Overrun',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.liftOverrun',
  },
  {
    label: 'Basement Stairs',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.basementStairs',
  },
  {
    label: 'Other Works - mention in Notes below',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.erection.otherWorks',
  },
];

export const variationData: CheckboxItem[] = [
  {
    label: 'Day Labour - Erection',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.variation.dayLabourErection',
  },
  {
    label: 'Day Labour - Dismantle',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.variation.dayLabourDismantle',
  },
  {
    label: 'Quoted variation- Erection',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.variation.quotedVariationErection',
  },
  {
    label: 'Quoted variation - Dismantle',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.variation.quotedVariationDismantle',
  },
];

export const inspectionData: CheckboxItem[] = [
  {
    label: '30 Day (Monthly Inspections)',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.inspection.day30',
  },
  {
    label: 'Inspection remediation Works',
    status: 'unchecked',
    name: 'projectDetails.certificationRelation.selectedOptionData.inspection.inspectionRemediation',
  },
];

export const erectionRadioData = [
  {
    heading:
      '1. Take Photos of Inspected area attach to report with signed Handover.',
    options: threeOptions,
    name: 'scaffoldChecklist.inspected_area',
  },
  {
    heading: '2. Jacks base plate centre to sole boards.',
    options: threeOptions,
    name: 'scaffoldChecklist.base_plate',
  },
  {
    heading: '3. Face braces installed every 3rd bay',
    options: threeOptions,
    name: 'scaffoldChecklist.braces_installed',
  },
  {
    heading: '4. End braces installed.',
    options: threeOptions,
    name: 'scaffoldChecklist.end_braces',
  },
  {
    heading:
      '5. Kickboards installed correctly end bays fitted with external clips.',
    options: threeOptions,
    name: 'scaffoldChecklist.kickboards_installed',
  },
  {
    heading: '6. Face of scaffold level and plump.',
    options: threeOptions,
    name: 'scaffoldChecklist.scaffold_level',
  },
  {
    heading:
      '7. Strecher stair correct position infills, lap plates, stair bolts, scaff tag, Handdrails, step down at base, step off at floor level, correctly fitted.',
    options: threeOptions,
    name: 'scaffoldChecklist.strecher_stair',
  },
  {
    heading:
      '8. Alloy stair correct position all handdrails secured with bolts step down in place scaff tag fitted',
    options: threeOptions,
    name: 'scaffoldChecklist.alloy_stair',
  },
  {
    heading: '9. Chain and shade fitted correctly looks neat and tidy.',
    options: threeOptions,
    name: 'scaffoldChecklist.chain_shade',
  },
  {
    heading: '10. Ties installed correct position.',
    options: threeOptions,
    name: 'scaffoldChecklist.ties_installed',
  },
  {
    heading:
      '11. Check gap from face of Building scaffold in correct position.',
    options: threeOptions,
    name: 'scaffoldChecklist.building_scaffold',
  },
  {
    heading:
      '12. Housekeeping has area been cleared of left-over material and left clean.',
    options: threeOptions,
    name: 'scaffoldChecklist.houesekeeping_area',
  },
];

export const dismantleRadioData = [
  {
    heading: '1. Scaffold has sufficient ties remaining in place.',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.sufficient_ties',
  },
  {
    heading: '2. Scaffold has safe access for scaffolders to perfrom task.',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.scaffolders_perform',
  },
  {
    heading:
      '3. All structural components are in place (Braces, Transoms, ledgers)',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.structural_components',
  },
  {
    heading:
      '4. Scaffold has been physically blocked from unauthorized access where required.',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.physically_blocked',
  },
];

export const init = {
  certificateRelation: '',
  project_id: '',
  project_level: '',
  nameOf_customer: '',
  Customer_ABN: '',
  inspection_notes: '',
  Drawings_Supplied: '',
  loadingCapacity: {
    LIGHT_225KG: '',
    MEDIUM_450KG: '',
    HEAVY_675KG: '',
    SPECIAL_DUTY: '',
  },
  elevations: {
    East_Elevation: '',
    West_Elevation: '',
    North_Elevation: '',
    South_Elevation: '',
    Lift_Shaft: '',
    Base: '',
    Bird_Cage: '',
    Roof: '',
    Void: '',
    Loading_Platform: '',
    Whole_Level: '',
    Whole_House: '',
  },
  Scaffold_length: '',
  Bays_long: '',
  Scaffold_Height: '',
  Above_Base_Lift: '',
  scaffoldChecklist: {
    inspected_area: '',
    base_plate: '',
    braces_installed: '',
    end_braces: '',
    kickboards_installed: '',
    scaffold_level: '',
    strecher_stair: '',
    alloy_stair: '',
    chain_shade: '',
    ties_installed: '',
    building_scaffold: '',
    houesekeeping_area: '',
    Rectification_description: '',
  },
  name_prepare_certificate: '',
  date_time: '',
  email_receive_copy: '',
  customers_mail: '',
  HRWL_number: '',
  customer_Representative: '',
  signatureImages: '',
  personSignature: '',
  customerSignature: '',
};

export const initialValues = {
  projectDetails: {
    certificationRelation: {
      selectedOption: '',
      selectedOptionData: {
        erection: {
          preWorks: '', // Store selected checkboxes for "Pre-works" as a string
          baseOut: '', // Store selected checkboxes for "BaseOut" as a string
          birdCage: '', // Store selected checkboxes for "Bird Cage" as a string
          level: '', // Store selected checkboxes for "Level" as a string
          roof: '', // Store selected checkboxes for "Roof" as a string
          void: '', // Store selected checkboxes for "Void" as a string
          erectionNew: '', // Store selected checkboxes for "Erection - New Scaffold (start new project)" as a string
          erectionAdditional: '', // Store selected checkboxes for "Erection - Additional scaffold" as a string
          topUp: '', // Store selected checkboxes for "Top Up" as a string
          stairs: '', // Store selected checkboxes for "Stairs" as a string
          mesh: '', // Store selected checkboxes for "Mesh" as a string
          liftShaft: '', // Store selected checkboxes for "Lift Shaft" as a string
          perimeterOnly: '', // Store selected checkboxes for "Perimeter only" as a string
          perimeterWithHopUps: '', // Store selected checkboxes for "Perimeter with hop-up’s" as a string
          aClass: '', // Store selected checkboxes for "A Class" as a string
          bClass: '', // Store selected checkboxes for "B Class" as a string
          ladderBeam: '', // Store selected checkboxes for "Ladder Beam" as a string
          powerlineProtection: '', // Store selected checkboxes for "Powerline protection" as a string
          liftOverrun: '', // Store selected checkboxes for "Lift Overrun" as a string
          basementStairs: '', // Store selected checkboxes for "Basement Stairs" as a string
          otherWorks: '', // Store selected checkboxes for "Other Works - mention in Notes below" as a string
        },
        variation: {
          dayLabourErection: '',
          dayLabourDismantle: '',
          quotedVariationErection: '',
          quotedVariationDismantle: '',
        },
        inspection: {
          day30: '',
          inspectionRemediation: '',
        },
      },
    },
    projectId: '',
    buildingLevel: '',
    nameOfBuilder: '',
    customerABN: '',
    workCompletion: '',
    scaffoldChecklist: {
      inspected_area: '',
      base_plate: '',
      braces_installed: '',
      end_braces: '',
      kickboards_installed: '',
      scaffold_level: '',
      strecher_stair: '',
      alloy_stair: '',
      chain_shade: '',
      ties_installed: '',
      building_scaffold: '',
      houesekeeping_area: '',
      speechToText: '',
    },
    dismantleChecklist: {
      sufficient_ties: '',
      scaffolders_perform: '',
      structural_components: '',
      physically_blocked: '',
    },
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
