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
  userPersonalData,
  initialFormData,
  scaffoldData,
  // options,
  // elevations,
  loadingCapacity,
  initialValues,
  firstListHeading,
  topicFeedback,
  secondListHeading,
  scaffoldingData,
  safetyToolboxProjectIdData,
  // erectionData,
  // variationData,
} from '../../../data/safetyToolbox';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';
import ListWithBullets from '../../../components/common/ListComp';
import {TimePicker} from '../../../themes/buttons/timeCalculation';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import { SelectPicker } from '../../../themes/buttons/selectDropdown';
import { useSelector } from 'react-redux';

export const SafetyToolbox = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(loadingCapacity);

  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
  // const [signatures, setSignatures] = useState({
  //   signature1: '',
  //   signature2: '',
  // });
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
  };
  const addressOptions = useSelector((state: any) => state.addressOptions);

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
        stageDiscuss: values.projectDetails.stageDiscussion,
        imagesAttached: base64Images,
        data: values.record.data,
        // signature: signatures,
      };
      console.log(requestData);

      const response = await axios.post(
        'https://fivestaraccess.com.au/custom_form/safety_toolbox_app.php',
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
  const validationSchema = Yup.object().shape({
    projectDetails: Yup.object().shape({
      stageDiscussion: Yup.object().shape({
        Dismantle: Yup.string().required('Dismantle is required'),
        Existing_Scaffold: Yup.string().required(
          'Existing Scaffold is required',
        ),
      }),
      date: Yup.string().required('Date is required'),
      project_id: Yup.string().required('Project ID is required'),
      building_level: Yup.string(),
      nameOf_customer: Yup.string().required('Customer Name is required'),
      supervisor_name: Yup.string().required('Supervisor Name is required'),
      number_of_attendence: Yup.string().required(
        'Number of Attendance is required',
      ),
      start_time: Yup.string().required('Start Time is required'),
      finish_time: Yup.string().required('Finish Time is required'),
      duration: Yup.string().required('Duration is required'),
      work_description: Yup.string().required('Work Description is required'),
    }),
    supervisor_notes: Yup.string(),
    record: Yup.object().shape({
      name_1: Yup.string(),
      additional_cmt: Yup.string().required('Additional Comment is required'),
    }),
    signatures: Yup.object().shape({
      name_of_person: Yup.string().required('Name is required'),
      email_receive_copy: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      subcontractor_email: Yup.string()
        .email('Invalid email format')
        .required('Subcontractor Email is required'),
    }),
  });
  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView
        ref={scrollViewRef}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={async values => {
            setLoading(true);
            await handleSubmit1(values);
            setLoading(false);
          }}>
          {({handleSubmit, values, setFieldValue}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                <Address />
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    RECORD OF SAFETY TOOL BOX DISCUSSION
                  </Text>
                </View>
                <CustomHeader text="Project Details" />
                <Text style={[{fontSize: 19}, commonStyles.mTop15]}>
                  What Project Stage are you discussing about ? Choose all
                  relevant* <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                {/* <Text>Choose One </Text> */}
                <CheckBox
                  checkboxes={loadingCapacity}
                  onPress={handleCheckboxPress}
                />
              </View>
              <View style={[commonStyles.mTop15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date of Safety Tool Box Meeting *
                </Text>
                <DatePickers name="projectDetails.date" mode="date" />
                <SelectPicker label={safetyToolboxProjectIdData} data={addressOptions} />

                <TextInputGroup inputFields={initialFormData} />
                <TimePicker names={TimeNames} />

                {values.projectDetails.stageDiscussion.Dismantle && (
                  <View style={[commonStyles.mb15]}>
                    <ListWithBullets
                      heading={firstListHeading}
                      listText={topicFeedback}
                    />
                  </View>
                )}
                {values.projectDetails.stageDiscussion.Existing_Scaffold && (
                  <View style={[commonStyles.mb15]}>
                    <ListWithBullets
                      heading={secondListHeading}
                      listText={scaffoldingData}
                    />
                  </View>
                )}
                <Text style={[commonStyles.text16]}>
                  What additional topics you will be discussing today?
                </Text>

                <Field
                  name="projectDetails.work_description"
                  component={AudioConverter}
                />
                <View style={{width: '90%', marginBottom: 20}}>
                  <FilePicker
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                  />
                </View>
              </View>

              <View style={{marginTop: 15}}>
                <CustomHeader text="Site Supervisor Comments & Suggestions Regarding Today's Work Activities" />
                <Text
                  style={[
                    commonStyles.text20,
                    commonStyles.fontBold,
                    commonStyles.mTop15,
                  ]}>
                  Supervisors Notes <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <Field
                  name="projectDetails.supervisor_notes"
                  component={AudioConverter}
                />
              </View>
              <View style={[commonStyles.mTop15]}>
                <CustomHeader text="Record of Attendees" />
                {Array.from({
                  length: parseInt(
                    values?.projectDetails?.number_of_attendence,
                  ),
                }).map((_, index) => (
                  <View key={index}>
                    <TextInputGroup
                      inputFields={[
                        {
                          label: `Name ${index + 1}`,
                          name: `name_${index + 1}`,
                        },
                      ]}
                    />
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      Signature {index + 1}
                    </Text>
                    <CanvasSignature
                      onBegin={handleCanvasBegin}
                      onEnd={handleCanvasEnd}
                      name={`recordSign_${index+1}`}
                    />
                  </View>
                ))}

                <Text style={[commonStyles.text16, commonStyles.mb5, commonStyles.mTop15]}>
                  Worker Feedback
                </Text>
                <Field
                  name="record.additional_cmt"
                  component={AudioConverter}
                />
              </View>

              <View style={{marginBottom: 15, marginTop: 15}}>
                <CustomHeader text="Supervisor/Team Leader Signatures" />
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginBottom: 15,
                  }}>
                  I have conducted the Safety Tool Box disscussion at above site
                  and I have truly and accurately recorded today's discussion.
                </Text>
              </View>
              <TextInputGroup inputFields={userPersonalData} />

              {/* <SignatureScreen /> */}
              <Text style={[commonStyles.text16, commonStyles.mb15]}>
                Signature of person completing this form
              </Text>

              <CanvasSignature
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
                name="signatures.signature_img"
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
