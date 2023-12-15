import {View, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, ActivityIndicator, Button} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import {myStyles} from '../damagedOrMissing';
import RadioGroup from '../../../themes/buttons/RadioButtons';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import CheckBox from '../../../themes/buttons/Checkbox';
import {CheckboxItem} from '../../../types/interfaces/types';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import {MySignatureCanvas} from '../../../themes/buttons/SignatureCanvas';
import FilePicker from '../../../themes/buttons/FilePicker';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  userPersonalData,
  loadingCapacity,
  initialValues,
  supervisorName,
  supervisorNameData,
  partATypeOfAccident,
  partAItemOwner,
  partEData,
  partgOhs,
  partgGM,
  partfName,
  partbInputt,
  accidentInvestigationProjectIdData,
} from '../../../data/accidentInvestigationData';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';
import {SelectPicker} from '../../../themes/buttons/selectDropdown';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {SafetyFieldArray} from '../../../themes/buttons/fieldArray-safetyInjured';
import {SafeAreaView} from 'react-native';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import AccidentFieldArray from '../../../components/screens/accident-investigation/FieldArray';
import { useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/type/types';

type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const AccidentInvestigation = ({navigation}:{navigation:HomeNavigationProp}) => {
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(loadingCapacity);

  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
  const [selectedFiles2, setSelectedFiles2] = useState<
    DocumentPickerResponse[]
  >([]);
  const [signatures, setSignatures] = useState({
    signature1: '',
    signature2: '',
  });
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const addressOptions = useSelector((state: any) => state.addressOptions);

  // Scroll View start
  const scrollViewRef: any = useRef(null);

  const handleCanvasBegin = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({scrollEnabled: false});
    }
  };

  const TimeNames: any = {
    startTime: 'projectDetails.start_time',
    endTime: 'projectDetails.finish_time',
    duration: 'projectDetails.duration',
  };

  const handleCanvasEnd = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.setNativeProps({scrollEnabled: true});
    }
  };

  // Scroll View End

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
    navigation.navigate("Home")
  };

  const handleSubmit1 = async (values: any) => {
    try {
      const base64Images = await Promise.all(
        selectedFiles.map(async file => {
          const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
          return `data:${file.type};base64,${base64}`;
        }),
      );
      const base64Images2 = await Promise.all(
        selectedFiles2.map(async file => {
          const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
          return `data:${file.type};base64,${base64}`;
        }),
      );
      const requestData = {
        values,
        number: values.number,
        // stageDiscuss: values.projectDetails.stageDiscussion,
        recommendationsImages: base64Images,
        // measureImages: base64Images2,
        // signature: signatures,
      };
      console.log(requestData);

      // const response = await axios.post(
      //   'https://fivestaraccess.com.au/custom_form/accident_report_app.php',
      //   requestData,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );
      // console.log('Post Response:', response);
      // console.log('signature', values.projectDetails.certificationRelation);
      // Alert.alert("Document submitted successfully")
      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // employee: '',
  // occupation: '',
  // street_address: '',
  // incident_occurred: '',
  // supervisor: '',
  // witness: '',
  // incident_date: '',
  // incident_time: '',
  // date_reported: '',
  // time_reported: '',
  const validationSchema = Yup.object().shape({
    employee: Yup.string().required('employee is required'),
    occupation: Yup.string().required('occupation is required'),
    street_address: Yup.string().required('Address ID is required'),
    incident_occurred: Yup.string().required('Location ID is required'),
    supervisor: Yup.string().required('Supervisor Name is required'),
    witness: Yup.string().required('Witness is required'),
    incident_date: Yup.string().required('Incident Date is required'),
    incident_time: Yup.string().required('Incident Time is required'),
    date_reported: Yup.string().required('Reported Date is required'),
    time_reported: Yup.string().required('Reported Time is required'),
    item_damaged: Yup.string().required('Reported Time is required'),
    identitfy_no: Yup.string().required('Reported Time is required'),
    damage_description: Yup.string().required('Reported Time is required'),
    // occupation: Yup.string().required('Project ID is required'),
    // building_level: Yup.string(),
    // nameOf_customer: Yup.string().required('Customer Name is required'),
    // supervisor_name: Yup.string().required('Supervisor Name is required'),
    // number_of_attendence: Yup.string().required(
    //   'Number of Attendance is required',
    // ),
    // start_time: Yup.string().required('Start Time is required'),
    // finish_time: Yup.string().required('Finish Time is required'),
    // duration: Yup.string().required('Duration is required'),
    // work_description: Yup.string().required('Work Description is required'),

    // supervisor_notes: Yup.string(),
    // record: Yup.object().shape({
    //   name_1: Yup.string(),
    //   additional_cmt: Yup.string().required('Additional Comment is required'),
    // }),
    // signatures: Yup.object().shape({
    //   name_of_person: Yup.string().required('Name is required'),
    //   email_receive_copy: Yup.string()
    //     .email('Invalid email format')
    //     .required('Email is required'),
    //   subcontractor_email: Yup.string()
    //     .email('Invalid email format')
    //     .required('Subcontractor Email is required'),
    // }),
  });
  return (
    <SafeAreaView style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView ref={scrollViewRef} scrollEnabled>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          // validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);
            await handleSubmit1(values);
            resetForm()
            setLoading(false);
          }}>
          {({handleSubmit, values}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                <Address />
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    ACCIDENT / INCIDENT INVESTIGATION REPORT
                  </Text>
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    FSS-EHS-FM-003
                  </Text>
                  <Text style={[commonStyles.text16, commonStyles.mt5]}>
                    (To be completed within 12hrs of incident and submitted to
                    the Manager)
                  </Text>
                </View>
              </View>
              <SelectPicker label={accidentInvestigationProjectIdData} data={addressOptions} />

              <TextInputGroup inputFields={userPersonalData} />
              <View style={[commonStyles.mTop15, commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Accident/Incident Date{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers name="incident_date" mode="date" />
              </View>
              <View style={[commonStyles.mTop15, commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Accident/Incident Time{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers name="incident_time" mode="time" />
              </View>
              <View style={[commonStyles.mTop15, commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date Reported <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers name="date_reported" mode="date" />
              </View>
              <View style={[commonStyles.mTop15, commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Time Reported <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers name="time_reported" mode="time" />
              </View>
              <CustomHeader text="PART A. ACCIDENT / INCIDENT DESCRIPTION" />
              <View style={[commonStyles.mb15, commonStyles.mt5]}>
                <Text style={[commonStyles.text16, commonStyles.mb10]}>
                  Type of Accident
                </Text>
                <CheckBox
                  checkboxes={partATypeOfAccident}
                  onPress={handleCheckboxPress}
                />
              </View>
              <View>
                <Text style={[commonStyles.text16]}>
                  What Occurred? Describe all relevant background information,
                  sequence of events leading to the incident, what occurred that
                  precipitated the accident, mechanism of accident and contact
                  agent. <Text style={[commonStyles.errorText]}>*</Text>
                </Text>

                <Field name="describe_incident" component={AudioConverter} />
              </View>
              <View style={[commonStyles.mb15, commonStyles.mTop15]}>
                <CustomHeader text="PART B. EQUIPMENT DAMAGE" />
                {values.typeOfAccident.Equipment_Damage && 
                  <TextInputGroup inputFields={partbInputt} />
                }

                <Text style={[commonStyles.text16, commonStyles.mb10]}>
                  Item Owner <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <CheckBox
                  checkboxes={partAItemOwner}
                  onPress={handleCheckboxPress}
                />
              </View>
              <View style={[commonStyles.mb15]}>
                <Text style={[commonStyles.text16]}>
                  Damage Description{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>

                <Field name="damage_description" component={AudioConverter} />
              </View>
              <View style={[commonStyles.mb10]}>
                <CustomHeader text="PART C. CAUSATION" />

                <Text variant="headlineSmall" style={[commonStyles.mTop15]}>
                  PROFILE
                </Text>
                <Text>
                  What people issues were included in the hazard/incident (e.g
                  competency level, training, procedures followed, fitness for
                  work, etc)?
                </Text>
                <Field name="hazard_incident" component={AudioConverter} />
              </View>
              <View style={[commonStyles.mb10]}>
                {/* <CustomHeader text="PART C. CAUSATION" /> */}

                <Text variant="headlineSmall" style={[commonStyles.mTop15]}>
                  Equipment
                </Text>
                <Text>
                  What plant/equipment/material issues were involved in the
                  hazard/incident (e.g fit for purpose maintained equipment,
                  protective devices/guards,PPE labelling etc )?
                </Text>
                <Field name="equipment" component={AudioConverter} />
              </View>
              <View style={[commonStyles.mb10]}>
                {/* <CustomHeader text="PART C. CAUSATION" /> */}

                <Text variant="headlineSmall" style={[commonStyles.mTop15]}>
                  Environment
                </Text>
                <Text>
                  What work environment/natural environment issues were involved
                  in the hazard/incident (e.g ventilation, ground conditions,
                  wind, lighting, space, storage conditions, explosive
                  atmosphere, etc ) ?
                </Text>
                <Field name="environment_cause" component={AudioConverter} />
              </View>
              <View style={[commonStyles.mb10]}>
                <Text variant="headlineSmall" style={[commonStyles.mTop15]}>
                  Procedures
                </Text>
                <Text>
                  What procedural issues were involved in the hazard/incident
                  (e.g permit system, isolation, standard operating procedures,
                  maintenance, pre-use checks,etc )?
                </Text>
                <Field name="procedures" component={AudioConverter} />
              </View>
              <View>
                <CustomHeader text="PART D: RECOMMENDATIONS (list in point form the specific actions taken to prevent recurrence)" />
                <View style={[commonStyles.mTop15]}>
                  <AccidentFieldArray number="number" />
                </View>
              </View>

              <View style={{width: '90%', marginBottom: 20}}>
                <FilePicker
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                />
              </View>
              <View style={[commonStyles.mb15]}>
                <CustomHeader text="PART E: Consequences" />
                <Text style={[commonStyles.text16, commonStyles.mt5]}>
                  Known injuries from incident
                </Text>
                <Field name="known_injuries" component={AudioConverter} />

                <TextInputGroup inputFields={partEData} />
                <Text style={[commonStyles.text16]}>Extra Comments</Text>
                <Field name="extra_comments" component={AudioConverter} />
              </View>

              <View style={[commonStyles.mTop15]}>
                <CustomHeader text="PART F: ACCIDENT INVESTIGATION BY" />
                <TextInputGroup inputFields={partfName} />

                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Signature
                </Text>
                <CanvasSignature
                  onBegin={handleCanvasBegin}
                  onEnd={handleCanvasEnd}
                  name={'accident_signature'}
                />
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date
                </Text>
                <DatePickers name="accident_date" mode="date" />
              </View>
              <View style={[commonStyles.mTop15, commonStyles.mb15]}>
                <CustomHeader text="PART G: REVIEWED BY" />

                <View style={[commonStyles.mTop15]}>
                  {/* <TextInputGroup inputFields={partgSupervisor} /> */}
                  <SelectPicker
                    label={supervisorName}
                    data={supervisorNameData}
                  />

                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    Signature
                  </Text>
                  <CanvasSignature
                    onBegin={handleCanvasBegin}
                    onEnd={handleCanvasEnd}
                    name={'supervisor_signature'}
                  />
                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    Date
                  </Text>
                  <DatePickers name="supervisor_date" mode="date" />
                  <Text style={[commonStyles.text16, commonStyles.mTop15]}>
                    Comments
                  </Text>
                  <Field name="supervisor_comment" component={AudioConverter} />
                </View>
                <View style={[commonStyles.mTop15]}>
                  <TextInputGroup inputFields={partgOhs} />

                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    Signature
                  </Text>
                  <CanvasSignature
                    onBegin={handleCanvasBegin}
                    onEnd={handleCanvasEnd}
                    name={'representative_signature'}
                  />
                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    Date
                  </Text>
                  <DatePickers name="Representative_date" mode="date" />
                  <Text style={[commonStyles.text16, commonStyles.mTop15]}>
                    Comments
                  </Text>
                  <Field
                    name="Representative_comment"
                    component={AudioConverter}
                  />
                </View>
                <View style={[commonStyles.mTop15]}>
                  <TextInputGroup inputFields={partgGM} />

                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    Signature
                  </Text>
                  <CanvasSignature
                    onBegin={handleCanvasBegin}
                    onEnd={handleCanvasEnd}
                    name={'manager_signature'}
                  />
                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    Date
                  </Text>
                  <DatePickers name="manager_date" mode="date" />
                  <Text style={[commonStyles.text16, commonStyles.mTop15]}>
                    Comments
                  </Text>
                  <Field name="manager_comment" component={AudioConverter} />
                </View>
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
    </SafeAreaView>
  );
};
