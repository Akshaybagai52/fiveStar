export interface InputField {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  showAsterisk?: boolean;
  multiline: boolean;
  numberOfLines: number;
  name: string;
}

export interface RadioOption {
  value: string;
  label: string;
}

export interface CheckboxItem {
  label?: string;
  status: 'checked' | 'unchecked' | 'indeterminate';
  name: string;
}

interface Erection {
  erection: {
    [key: string]: string;
  };
  inspection: {
    [key: string]: string;
  }
  variation: {
    [key: string]: string;

  }
}

interface CertificationRelation {
  selectedOption: string;
  selectedOptionData: Erection
  
}

interface ProjectDetails {
  certificationRelation: CertificationRelation;
  projectId: string;
  buildingLevel: string;
  nameOfBuilder: string;
  customerABN: string;
  workCompletion: string;
}

interface DrawingsSupplied {
  // Define properties here
}

interface Elevations {
  // Define properties here
}

interface InputDetails {
  // Define properties here
}

interface ScaffoldDetails {
  drawingsSupplied: DrawingsSupplied;
  elevations: Elevations;
  inputDetails: InputDetails;
}

interface Signatures {
  customerName: string;
  HRWLNumber: string;
  customerEmail2: string;
  customerEmail: string;
  DateTime: string;
  customerName2: string;
}

export interface HandoverFormValues {
  projectDetails: ProjectDetails;
  scaffoldDetails: ScaffoldDetails;
  signatures: Signatures;
}

export interface WindowDimension {
  width: number;
  height: number;
}
