import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
// import {myStyles} from './styles';
import RadioGroup from '../../../themes/buttons/RadioButtons';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import CheckBox from '../../../themes/buttons/Checkbox';
import {CheckboxItem, InputField} from '../../../types/interfaces/types';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon1 from 'react-native-vector-icons/FontAwesome5';
// import Icon2 from 'react-native-vector-icons/Feather';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import Recorder from '../../../themes/buttons/AudioRecorder';
import {MySignatureCanvas} from '../../../themes/buttons/SignatureCanvas';
import FilePicker from '../../../themes/buttons/FilePicker';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {HandoverFormValues} from '../../../types/interfaces/types';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  //   userPersonalData,
  //   initialFormData,
  //   scaffoldData,
  options,
  elevations,
  //   loadingCapacity,
//   initialValues,
  erectionData,
  variationData,
  inspectionData,
  erectionRadioData,
  //   dismantleRadioData,
} from '../../../data/handoverData';
import commonStyles from '../../../styles/commonStyles';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import { initialValues } from '../../../data/Damaged';

// DATA
const initialFormData: Partial<InputField>[] = [
  {
    label: 'What"s the Project ID ?',
    showAsterisk: true,
    name: 'projectDetails.projectId',
    multiline: true,
    numberOfLines: 5,
  },
];
const loadingCapacity: CheckboxItem[] = [
  {
    label: 'Damaged Scaffold Components',
    status: 'unchecked',
    name: 'scaffoldDetails.drawingsSupplied.light225',
  },
  {
    label: 'Missing Order Items',
    status: 'unchecked',
    name: 'scaffoldDetails.drawingsSupplied.Medium450',
  },
];
export const scaffoldData: Partial<InputField>[] = [
  {
    label: 'Men on Job',
    name: 'scaffoldDetails.inputDetails.scaffoldLength',
  },
  {
    label: 'Hours Lost',
    name: 'scaffoldDetails.inputDetails.numberOfBays',
  },
  {
    label: 'Total Hours Lost',
    name: 'scaffoldDetails.inputDetails.scaffoldHeight',
  },
];
const dismantleRadioData = [
  {
    heading: 'Extra Truck',
    options: [
      {value: 'Yes', label: 'Yes'},
      {value: 'No', label: 'No'},
      {value: 'N/A', label: 'N/A'},
    ],
    name: 'projectDetails.dismantleChecklist.sufficient_ties',
  },
];

const userPersonalData: Partial<InputField>[] = [
  {
    label: 'Your Name',
    name: 'signatures.customerName',
  },
  {
    label: 'Subcontractor Name',
    name: 'signatures.HRWLNumber',
  },
  {
    label: 'Supervisor Name (please select) ',
    showAsterisk: true,
    name: 'signatures.customerEmail',
  },
  {
    label: 'Reporting Date and Time ',
    showAsterisk: true,
    name: 'signatures.customerEmail2',
  },
  {
    label: 'Supervisors email (please select) ',
    showAsterisk: true,
    name: 'signatures.DateTime',
  },
  // {
  //   label: 'Name of authorised Customer Representative ',
  //   showAsterisk: true,
  //   name: 'signatures.customerName2',
  // },
];

export const Damaged = () => {
  // Scroll View End
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(loadingCapacity);
  const [elevationData, setElevationData] =
    useState<CheckboxItem[]>(elevations);
  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
  const [signatures, setSignatures] = useState({
    signature1: '',
    signature2: '',
  });
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleCustomAlertClose = () => {
    setCustomAlertVisible(false);
  };

  const handleSubmit1 = async (values: HandoverFormValues) => {
    try {
      const base64Images = await Promise.all(
        selectedFiles.map(async file => {
          const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
          return `data:${file.type};base64,${base64}`;
        }),
      );
      const requestData = {
        projectDetails: values.projectDetails,
        selectedOptionData:
          values.projectDetails.certificationRelation.selectedOptionData,
        // dismantleRadio: values.projectDetails.dismantleRadioData,
        // erectionRadio: values.projectDetails.erectionRadioData,
        scaffoldDetails: values.scaffoldDetails,
        signatures: values.signatures,
        imagesAttached: base64Images,
        signature: signatures,
      };

      const response = await axios.post(
        'https://fivestaraccess.com.au/custom_form/handover_native_app.php',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Post Response:', requestData);
      // console.log('signature', values.projectDetails.certificationRelation);
      // Alert.alert("Document submitted successfully")
      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const validationSchema = Yup.object({
    projectDetails: Yup.object().shape({
      projectId: Yup.string().required('Project ID is required'),
      buildingLevel: Yup.string(),
      nameOfBuilder: Yup.string(),
      customerABN: Yup.string(),
      workCompletion: Yup.string().required('Work completion is required'),
    }),
    signatures: Yup.object().shape({
      customerName: Yup.string().required('Name is required'),
      HRWLNumber: Yup.string(),
      customerEmail: Yup.string().email('Invalid email'),
      customerEmail2: Yup.string().email('Invalid email'),
      // DateTime: Yup.string().required('Handover Date and Time is required'),
      customerName2: Yup.string().required('Name is required'),
    }),
  });

  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView ref={scrollViewRef} scrollEnabled>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          // validationSchema={validationSchema}
          onSubmit={async values => {
            setLoading(true);
            await handleSubmit1(values);
            setLoading(false);
          }}>
          {({handleSubmit, values}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                <Address />
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    DAMAGED OR MISSING SCAFFOLD
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#c7fe1a',
                    padding: 10,
                    marginBottom: 10,
                  }}>
                  <Text style={commonStyles.headingText}>Site Details</Text>
                </View>

                {/* {values.projectDetails.certificationRelation.selectedOptionData.variation.dayLabourErection === "dayLabourErection" ? <Text> "hey"</Text> : <Text> "dsfhey"</Text>} */}
              </View>
              <View>
                <TextInputGroup inputFields={initialFormData} />
              </View>
              <View style={{marginBottom: 15, marginTop: 15}}>
                <Recorder />
              </View>
              <View style={{margin: 15}}>
                <CustomHeader text="What are you Reporting ?" />
              </View>

              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  1. What are you reporting*
                </Text>

                <CheckBox
                  checkboxes={checkboxes}
                  onPress={handleCheckboxPress}
                />
              </View>
              <View>
                <TextInputGroup inputFields={scaffoldData} />
                <RadioGroupButton
                  options={dismantleRadioData}
                  // name="projectDetails.certificationRelation.selectedOption"
                />
                <Field
                  name="projectDetails.scaffoldChecklist.speechToText"
                  component={AudioConverter}
                />
              </View>
              <View style={{width: '90%', marginBottom: 50}}>
                <FilePicker
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                />
              </View>

              <View style={{marginBottom: 15, marginTop: 15}}>
                <CustomHeader text="Signatures" />
              </View>
              <Text style={commonStyles.text20}>
                I acknowledge that I have completed the form and I declare that
                it's true and accurate.
              </Text>
              <View style={commonStyles.mb15}>
                <TextInputGroup inputFields={userPersonalData} />
              </View>
              <Text style={[commonStyles.text16, commonStyles.mb15]}>Your Signature (please sign)</Text>

              <MySignatureCanvas
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
                signature={signatures}
                setSignature={(signature: any) =>
                  setSignatures(prevSignatures => ({
                    ...prevSignatures,
                    signature1: signature,
                  }))
                }
              />
              <CustomAlert
                visible={isCustomAlertVisible}
                title="Details submitted successfully"
                message="Thank you for being with us"
                onClose={handleCustomAlertClose}
              />
              <ButtonGreen text="Submit" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
        {loading && (
          <View style={myStyles.activityContainer}>
            <ActivityIndicator
              animating={true}
              size="large"
              color="#c7fe1a"
              style={myStyles.activityIndicator}
            />
          </View>
        )}
        {/* {loading && <ActivityIndicator animating={true} size="large" color="blue" />}  */}
      </ScrollView>
    </View>
  );
};

export const myStyles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14274E',
  },
  activityContainer: {
    position: 'absolute',
    left: '40%',
    // transform: [{ translateX: -ScreenWidth * 0.5 }],
    bottom: '7%',
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 70
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
});

// export default Handover;
