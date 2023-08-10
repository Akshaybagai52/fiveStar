
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



export interface CheckboxItem {
  label: string;
  status: 'checked' | 'unchecked' | 'indeterminate';
}