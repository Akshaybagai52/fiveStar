import {View, ScrollView, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import React, {useState, useRef} from 'react';
import {myStyles} from './styles';
import RadioGroup, {Option} from '../../themes/buttons/RadioButtons';
import TextInputGroup from '../../themes/buttons/TextInputGroup';
import {InputField} from '../../types/interfaces/types';
import CustomHeader from '../../themes/text/TextWithGreenBg';
import CheckBox from '../../themes/buttons/Checkbox';
import {CheckboxItem} from '../../types/interfaces/types';
// import { checkBoxType } from '../../types/interfaces/types';
// import AudioRecorderScreen from '../../themes/buttons/AudioRecorder';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
import {ButtonGreen} from '../../themes/text/ButtonGreen';
import Recorder from '../../themes/buttons/AudioRecorder';
import {MySignatureCanvas} from '../../themes/buttons/SignatureCanvas';
import FilePicker from '../../themes/buttons/FilePicker';
import {Formik, Form} from 'formik'; // Import Formik and Form
import * as Yup from 'yup';
import GeneratePdf from '../../themes/buttons/GeneratePdf';
// import SignatureCanvas from '../../themes/buttons/SignatureCanvas';

const loadingCapacity: CheckboxItem[] = [
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

const elevations: CheckboxItem[] = [
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
const options: Option[] = [
  {label: 'Erection', value: 'Erection'},
  {label: 'Variation Works', value: 'Variation Works'},
  {label: 'Dismantle', value: 'Dismantle'},
  {label: 'Inspection', value: 'Inspection'},
  {label: 'Damage Rectification Works', value: 'Damage Rectification Works'},
  {
    label: 'Other Works - mention in Notes below',
    value: 'Other Works - mention in Notes below',
  },
];
// const scaffoldData: InputField[] =

const Handover = () => {
  // Scroll View start
  const scrollViewRef: any = useRef(null);

  const handleCanvasBegin = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({scrollEnabled: false});
    }
  };

  const handleCanvasEnd = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({scrollEnabled: true});
    }
  };

  // Scroll View End
  const initialFormData: Partial<InputField>[] = [
    {
      label: 'What"s the Project ID ?',
      showAsterisk: true,
      name: 'projectDetails.projectId',
    },
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
  const scaffoldData: Partial<InputField>[] = [
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
  const userPersonalData: Partial<InputField>[] = [
    {
      label: 'Name of authorised Customer Representative ',
      showAsterisk: true,
      name: 'signatures.customerName'
    },
    {
      label: 'Write your HRWL number (High Risk Work Licence number)',
      name: 'signatures.HRWLNumber'
    },
    {
      label: 'Write your Customer email for them to receive a pdf copy',
      name: 'signatures.customerEmail'
    },
    {
      label: 'Write your email to receive a pdf copy',
      name: 'signatures.customerEmail2'
    },
    {
      label: 'Handover Date and Time ',
      showAsterisk: true,
      name: 'signatures.Date&Time'
    },
    {
      label: 'Name of authorised Customer Representative ',
      showAsterisk: true,
      name: 'signatures.customerName2'

    },
  ];
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [formData, setFormData] =
    useState<Partial<InputField>[]>(initialFormData);
  const [scaffold, setScaffold] = useState<Partial<InputField>[]>(scaffoldData);
  const [userData, setUserData] =
    useState<Partial<InputField>[]>(userPersonalData);
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(loadingCapacity);
  const [elevationData, setElevationData] =
    useState<CheckboxItem[]>(elevations);

  const handleCheckboxPress = (label: string) => {
    // @ts-ignore
    setCheckboxes(prevCheckboxes => {
      const updatedCheckboxes = prevCheckboxes.map((checkbox: CheckboxItem) => {
        if (checkbox.label === label) {
          const newStatus =
            checkbox.status === 'checked'
              ? 'unchecked'
              : checkbox.status === 'unchecked'
              ? 'checked'
              : 'indeterminate';
          return {
            ...checkbox,
            status: newStatus,
          };
        } else {
          return checkbox;
        }
      });
      return updatedCheckboxes;
    });
  };
  const handleElevationDataPress = (label: string) => {
    // @ts-ignore
    setElevationData(prevElevation => {
      const updatedCheckboxes = prevElevation.map((elevation: CheckboxItem) => {
        if (elevation.label === label) {
          const newStatus =
            elevation.status === 'checked'
              ? 'unchecked'
              : elevation.status === 'unchecked'
              ? 'checked'
              : 'indeterminate';
          return {
            ...elevation,
            status: newStatus,
          };
        } else {
          return elevation;
        }
      });
      return updatedCheckboxes;
    });
  };

  const initialValues = {
    projectDetails: {
      certificationRelation: {
        selectedOption: '',
      },
      projectId: '',
      buildingLevel: '',
      nameOfBuilder: '',
      customerABN: '',
      workCompletion: '',
    },
    scaffoldDetails: {
      drawingsSupplied: {},
      elevations: {},
      inputDetails: {},
    },
    signatures: {},
  };
  // const handleSubmit = (values: any) => {
  //   // Handle form submission...
  //   console.log(values);
  // };

  return (
    <View style={{padding: 20}}>
      <ScrollView ref={scrollViewRef} scrollEnabled>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          onSubmit={values => {
            console.log(values);
          }}>
          {({handleSubmit, values}) => (
            <View>
              <View>
                <View style={{padding: 10, marginBottom: 15}}>
                  <Text>
                    <Icon
                      name="office-building-marker"
                      size={20}
                      color="#112D4E"
                    />{' '}
                    Five Star Scaffolding Pty Ltd
                  </Text>
                  <Text style={{marginTop: 10}}>
                    <Icon name="license" size={20} color="#112D4E" /> ABN 70 130
                    008 212
                  </Text>
                  <Text style={{marginTop: 10}}>
                    <Icon1 name="street-view" size={20} color="#112D4E" /> 61
                    Long Street, Smithfield NSW 2164
                  </Text>
                  <Text style={{marginTop: 10}}>
                    <Icon2 name="phone-call" size={20} color="#112D4E" /> (02)
                    9632 3466
                  </Text>
                </View>
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    Handover Certificate
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#c7fe1a',
                    padding: 10,
                    marginBottom: 10,
                  }}>
                  <Text style={myStyles.headingText}>Project Details:</Text>
                </View>
                <Text style={{fontSize: 19}}>
                  What is this Certificate Relating to ?
                </Text>
                <Text>Choose One</Text>
                <RadioGroup
                  options={options}
                  name="projectDetails.certificationRelation.selectedOption"
                />
              </View>
              <View>
                <TextInputGroup inputFields={formData} />
              </View>
              <View style={{marginBottom: 15, marginTop: 15}}>
                <Recorder />
              </View>
              <View style={{margin: 15}}>
                <CustomHeader text="Scaffold Details:" />
              </View>
              <View
                style={{
                  elevation: 8,
                  borderColor: 'black',
                  padding: 30,
                  marginTop: 20,
                  marginBottom: 20,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  The scaffold described below has been erected in accordance
                  with AS 4576 - Guidelines for scaffolding, AS 1576 (1-6) -
                  Scaffolding, AS 1577 - Scaffold planks, Work Health and Safety
                  (managing the Risks of Falls at Workplaces) Code of Practice
                  2015, Safe Work Australia - Guide to Scaffolds and
                  Scaffolding. The scaffold described below is suitable for its
                  intended purpose only. All Hop-up’s can only be installed
                  following the removal of the form ply deck below. The
                  Principal contractor must ensure all falls are managed in the
                  interim by either installing adequate edge protection or
                  ensuring the ply is formed to the perimeter scaffold internal
                  standards. Hop-Ups are to be loaded to maximum capacity of
                  225Kg Simultaneous loading permitted as per Scaffold Design
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Is scaffold built as per Drawings Supplied ?
                </Text>

                <CheckBox
                  checkboxes={checkboxes}
                  onPress={handleCheckboxPress}
                />
              </View>
              <View style={{marginTop: 15}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Which elevations were completed ? Choose all applicable *
                </Text>
                <CheckBox
                  checkboxes={elevationData}
                  onPress={handleElevationDataPress}
                />
              </View>
              <View>
                <TextInputGroup inputFields={scaffold} />
              </View>
              <View style={{marginBottom: 15, marginTop: 15}}>
                <CustomHeader text="Signatures" />
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginBottom: 15,
                  }}>
                  I acknowledge that I have read and understood and agree with
                  the Handover Certificate Terms and Conditions. I have fully
                  understood the Duty Category of the work platforms. Any breach
                  of the Handover Certificate Terms and Conditions may result in
                  an infringement of "Decommission of Scaffold Notice" being
                  issued. Any breach of the Handover Certificate may lead to
                  injury or death.
                </Text>
              </View>
             <TextInputGroup inputFields={userData} />
              <View style={{width: '90%', marginBottom: 50}}>
                <FilePicker />
              </View>
              <GeneratePdf />

              {/* <SignatureScreen /> */}
              <MySignatureCanvas
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
              />

              <MySignatureCanvas
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
              />
              <TouchableOpacity onPress={() => handleSubmit()}>
                <Text>Submit</Text>
              </TouchableOpacity>
              <ButtonGreen text="Submit" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Handover;
