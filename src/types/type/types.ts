export type DatePickerGroupProps = {
  name: String;
  mode: String;
  label: String;
  showAsterisk: Boolean;
};

export type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  MyTabs: undefined;
  Login: undefined;
};
