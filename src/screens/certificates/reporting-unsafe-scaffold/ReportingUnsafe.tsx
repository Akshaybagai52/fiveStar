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

import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import CheckBox from '../../../themes/buttons/Checkbox';
import {
  CheckboxItem,
  DamagedFormValues,
  InputField,
} from '../../../types/interfaces/types';

import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import {MySignatureCanvas} from '../../../themes/buttons/SignatureCanvas';
import FilePicker from '../../../themes/buttons/FilePicker';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import commonStyles from '../../../styles/commonStyles';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
// import { dismantleRadioData, initialFormData, initialValues, loadingCapacity, scaffoldData, userPersonalData } from '../../../data/damaged';
import {DatePickers} from '../../../themes/buttons/datePicker';
import {
  ReportingUnsafeProjectIdData,
  dismantleRadioData,
  initialFormData,
  initialValues,
  loadingCapacity,
  loadingCapacity2,
  loadingCapacity3,
  // scaffoldData,
  userPersonalData,
} from '../../../data/reportingUnsafeData';
import {SelectPicker} from '../../../themes/buttons/selectDropdown';
import {useSelector} from 'react-redux';
import useUserInformation from '../../../hooks/userInformation';
// import DatePickers from '../../../themes/buttons/datePicker';

export const ReportingUnsafe = () => {
  // Scroll View End
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(loadingCapacity);
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
  const addressOptions = useSelector((state: any) => state.addressOptions);
  const {username, userEmail, userPhoneNumber} = useUserInformation();

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

  const handleCustomAlertClose = () => {
    setCustomAlertVisible(false);
  };

  const handleSubmit1 = async (values: any) => {
    try {
      const base64Images = await Promise.all(
        selectedFiles.map(async file => {
          const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
          return `data:${file.type};base64,${base64}`;
        }),
      );
      const requestData = {
        values,
        // reportingCheck: values.reporting.reportingCheck,
        imagesAttached: base64Images,
        // signature: signatures,
      };
      // console.log(requestData, 'req');

      // const response = await axios.post(
      //   'https://fivestaraccess.com.au/custom_form/unsafe_scaffolding_app.php',
      //   requestData,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );
      console.log('Post Response:', requestData);
      // console.log('signature', values.projectDetails.certificationRelation);
      // Alert.alert("Document submitted successfully")
      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const validationSchema = Yup.object().shape({
    projectId: Yup.string().required('Project ID is required'),

    reporting: Yup.object().shape({
      reportingCheck: Yup.object().shape({
        damaged_Components: Yup.string(),
        missing_order: Yup.string(),
      }),
      menon_job: Yup.string(),
      estimated_time: Yup.string(),
      total_hours: Yup.string(),
      extra_truck: Yup.string(),
      comments: Yup.string().required('Comments is required'),
    }),

    signatures: Yup.object().shape({
      your_name: Yup.string(),
      subcontractor_name: Yup.string(),
      supervisor_name: Yup.string().required('Supervisor Name is required'),
      date_time: Yup.string().required('Date and Time is required'),
      supervisor_email: Yup.string()
        .email('Invalid email address')
        .required('Supervisor Email is required'),
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
                    REPORT UNSAFE SCAFFOLDING
                  </Text>
                  <Text style={{fontSize: 20}}>
                    Please use this form if you have seen an unsafe scaffolding
                    structure. The FSS will receive and follow up on your
                    reporting of unsafe scaffolding.
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#c7fe1a',
                    padding: 10,
                    marginBottom: 10,
                  }}>
                  <Text style={commonStyles.headingText}>
                    Please provide as much details as you can using the fields
                    below
                  </Text>
                </View>

                {/* {values.projectDetails.certificationRelation.selectedOptionData.variation.dayLabourErection === "dayLabourErection" ? <Text> "hey"</Text> : <Text> "dsfhey"</Text>} */}
              </View>
              <View>
                <SelectPicker
                  label={ReportingUnsafeProjectIdData}
                  data={addressOptions}
                />

                <TextInputGroup inputFields={initialFormData} />
              </View>
              {/* <View style={{marginBottom: 15, marginTop: 15}}>
                  <Recorder />
                </View> */}
              <View style={{margin: 15}}>
                <CustomHeader text="Potential Hazard: (tick appropriate from the list below)" />
              </View>

              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Fall From Height*
                </Text>

                <CheckBox
                  checkboxes={loadingCapacity}
                  onPress={handleCheckboxPress}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Falling Objects*
                </Text>

                <CheckBox
                  checkboxes={loadingCapacity2}
                  onPress={handleCheckboxPress}
                />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  Structural Integrity of Scaffold*
                </Text>

                <CheckBox
                  checkboxes={loadingCapacity3}
                  onPress={handleCheckboxPress}
                />
              </View>
              <View>
                {/* <TextInputGroup inputFields={scaffoldData} />
                <RadioGroupButton
                  options={dismantleRadioData}
                  // name="projectDetails.certificationRelation.selectedOption"
                /> */}
                <Text style={[commonStyles.text16]}>
                  If not listed above, please provide details of unsafe
                  scaffolding
                </Text>
                <Field name="recording" component={AudioConverter} />
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
                <TextInputGroup
                  inputFields={userPersonalData}
                  username={username}
                  userEmail={userEmail}
                  userPhoneNumber={userPhoneNumber}
                />
                <Text
                  style={[
                    commonStyles.text16,
                    {marginBottom: 5},
                    commonStyles.mTop15,
                  ]}>
                  The information supplied will remain confidential between the
                  FSS and the above signed.
                </Text>
                <Text
                  style={[
                    commonStyles.text16,
                    commonStyles.fontBold,
                    commonStyles.mTop15,
                  ]}>
                  Please note: If you have seen a scaffold structure that you
                  consider has a risk potential for serious injury, please
                  report this immediately to FSS
                </Text>
              </View>

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
