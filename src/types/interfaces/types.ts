export interface InputField {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  showAsterisk?: boolean;
  multiline: boolean;
  numberOfLines: number;
  name: string;
  prefilled?: boolean;
  prefilledUserEmail?: boolean;
  prefilledUsername?: boolean;
  prefilledUserPhoneNumber?: boolean;
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
  };
  variation: {
    [key: string]: string;
  };
}

interface CertificationRelation {
  selectedOption?: string;
  selectedOptionData?: Erection;
}

interface ProjectDetails {
  certificationRelation: CertificationRelation;
  projectId: string;
  erectionRadioData?: {
    [key: string]: string;
  };
  dismantleRadioData: {
    [key: string]: string;
  };

  buildingLevel: string;
  nameOfBuilder: string;
  customerABN: string;
  workCompletion: string;
}

export interface TextInputGroupProps {
  inputFields: Partial<{
    name: any;
    label: string;
    placeholder?: string;
    showAsterisk?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    prefilledUserEmail?: boolean;
    prefilledUsername?: boolean;
    prefilled?: boolean;
    prefilledUserPhoneNumber?: boolean;
  }>[];
  username?: string | null;
  userEmail?: string | null;
  userPhoneNumber?: string | null;
}
export interface PrefilledValuesMap {
  [fieldName: string]: string | undefined | null;
}

export interface MySignatureCanvasRef {
  handleClearSignature: () => void;
}

interface Elevations {
  // Define properties here
}

interface InputDetails {
  // Define properties here
}

export interface DatePickersRef {
  clearDate: () => void;
}

export interface SignatureCanvasRef {
  handleClearSignature: () => void;
}

export interface SelectPickerRef {
  clearPickerData: () => void;
}

export interface FilePickerRef {
  clearAllFiles: () => void;
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

export interface Reporting {
  reportingCheck: {
    damaged_Components: string;
    missing_order: string;
  };
  menon_job: string;
  estimated_time: string;
  total_hours: string;
  extra_truck: string;
  comments: string;
}

export interface DamagedSignature {
  your_name: string;
  subcontractor_name: string;
  supervisor_name: string;
  date_time: string;
  supervisor_email: string;
}

export interface DamagedFormValues {
  projectId: string;
  reporting: Reporting;
  signatures: DamagedSignature;
}

export interface ProjectIdProps {
  name: string;
  label: string;
  showAsterisk: boolean;
  prefilled: boolean;
  prefilledCustomerAbn?: string;
  prefilledCustomerName?: string;
}
