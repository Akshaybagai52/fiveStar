export interface InputField {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    showAsterisk?: boolean;
    multiline: boolean;
    numberOfLines: number;
  }