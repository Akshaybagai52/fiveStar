import {
  InputField,
  CheckboxItem,
  RadioOption,
  HandoverFormValues,
} from '../types/interfaces/types';
export const initialFormData: Partial<InputField>[] = [
  // {
  //   label: 'What"s the Project ID ?',
  //   showAsterisk: true,
  //   name: 'projectDetails.projectId',
  // },
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

export const AddresOptionsData = {
  name: 'projectDetails.projectId',
  label: 'What is the Project ID ?',
  showAsterisk: true,
  prefilled: true,
  prefilledCustomerAbn: 'projectDetails.customerABN',
  prefilledCustomerName: 'projectDetails.nameOfBuilder'
};
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
    prefilled:true,
    prefilledUsername: true,
  },
  {
    label: 'Write your HRWL number (High Risk Work Licence number)',
    name: 'signatures.HRWLNumber',
  },
  {
    label: 'Write your Customer email for them to receive a pdf copy',
    name: 'signatures.customerEmail',
    prefilled:true,
    prefilledUserEmail: true,
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

const threeOptions = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
  {value: 'N/A', label: 'N/A'},

]

export const erectionRadioData = [
  {
    heading: '1. Take Photos of Inspected area attach to report with signed Handover.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.inspected_area'
  },
  {
    heading: '2. Jacks base plate centre to sole boards.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.base_plate'
  },
  {
    heading: '3. Face braces installed every 3rd bay',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.braces_installed'
  },
  {
    heading: '4. End braces installed.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.end_braces'
  },
  {
    heading: '5. Kickboards installed correctly end bays fitted with external clips.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.kickboards_installed'
  },
  {
    heading: '6. Face of scaffold level and plump.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.scaffold_level'
  },
  {
    heading: '7. Strecher stair correct position infills, lap plates, stair bolts, scaff tag, Handdrails, step down at base, step off at floor level, correctly fitted.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.strecher_stair'
  },
  {
    heading: '8. Alloy stair correct position all handdrails secured with bolts step down in place scaff tag fitted',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.alloy_stair'
  },
  {
    heading: '9. Chain and shade fitted correctly looks neat and tidy.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.chain_shade'
  },
  {
    heading: '10. Ties installed correct position.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.ties_installed'
  },
  {
    heading: '11. Check gap from face of Building scaffold in correct position.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.building_scaffold'
  },
  {
    heading: '12. Housekeeping has area been cleared of left-over material and left clean.',
    options: threeOptions,
    name: 'projectDetails.scaffoldChecklist.houesekeeping_area'
  },

]

export const dismantleRadioData = [
  {
    heading: '1. Scaffold has sufficient ties remaining in place.',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.sufficient_ties'
  },
  {
    heading: '2. Scaffold has safe access for scaffolders to perfrom task.',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.scaffolders_perform'
  },
  {
    heading: '3. All structural components are in place (Braces, Transoms, ledgers)',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.structural_components'
  },
  {
    heading: '4. Scaffold has been physically blocked from unauthorized access where required.',
    options: threeOptions,
    name: 'projectDetails.dismantleChecklist.physically_blocked'
  },

]

export const initialValues: HandoverFormValues = {
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
      speechToText: ''
    },
    dismantleChecklist: {
      sufficient_ties: '',
      scaffolders_perform: '',
      structural_components: '',
      physically_blocked: '',
    }
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
