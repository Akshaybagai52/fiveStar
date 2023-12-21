import {View, ScrollView} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import React, {useState, useRef} from 'react';
import {myStyles} from '../damagedOrMissing';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CheckBox from '../../../themes/buttons/Checkbox';
import {CheckboxItem} from '../../../types/interfaces/types';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import {MySignatureCanvas} from '../../../themes/buttons/SignatureCanvas';
import FilePicker from '../../../themes/buttons/FilePicker';
import {Field, Formik} from 'formik';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  userPersonalData,
  scaffoldData,
  loadingCapacity,
  initialValues,
  label,
  supervisorName,
  supervisorMail,
  anyOneInjured,
  checkboxData,
  investigationOfficer,
  measuresData,
  dismantleRadioData,
  subcontractorData,
  supervisorNameData,
  supervisorEmailData,
  anyOneInjuredData,
  investigationOfficerData,
  safetyIncidentProjectIdData,
} from '../../../data/safetyIncidents';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';
import {SelectPicker} from '../../../themes/buttons/selectDropdown';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {SafetyFieldArray} from '../../../themes/buttons/fieldArray-safetyInjured';
import {useSelector} from 'react-redux';
import SafetyInjuredFieldArray from '../../../components/screens/safetyInjured/FieldArray';
import useUserInformation from '../../../hooks/userInformation';
import {safetyIncidentSchema} from '../../../schema/yup-schema/fomsSchema';

export const SafetyIncident = () => {
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
  const {username, userEmail} = useUserInformation();
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
        incidentImages: base64Images,
        measureImages: base64Images2,
        signature: signatures,
      };
      console.log(requestData);

      // const response = await axios.post(
      //   'https://fivestaraccess.com.au/custom_form/safety_incident_app.php',
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
  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView ref={scrollViewRef} scrollEnabled>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={safetyIncidentSchema}
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
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    SAFETY INCIDENT / INJURY REPORTING
                  </Text>
                  <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    FSS-EHS-009
                  </Text>
                  <Text style={[commonStyles.text16, commonStyles.mt5]}>
                    (TO BE COMPLETED BY THE EMPLOYEE WITH THE SUPERVISOR OR
                    MANAGER)
                  </Text>
                  <Text style={[commonStyles.mt5, commonStyles.text16]}>
                    This report is the initial notification of a safety incident
                    involving Five Star Scaffolding Employees and is not
                    intended to replace the normal safety incident investigation
                    and report procedures.
                  </Text>
                </View>
              </View>
              <View style={[commonStyles.mTop15, commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Incident Date <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers name="date_of_incident" mode="date" />
              </View>
              <SelectPicker label={label} data={subcontractorData} />
              <TextInputGroup inputFields={scaffoldData} />
              <SelectPicker
                label={safetyIncidentProjectIdData}
                data={addressOptions}
              />
              <Text>Name of Employee Involved in this incident</Text>
              <SafetyInjuredFieldArray number="number" />
              <SelectPicker label={supervisorName} data={supervisorNameData} />
              <SelectPicker label={supervisorMail} data={supervisorEmailData} />
              <View>
                <Text style={[commonStyles.text16]}>
                  How you would describe the incident ?{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>

                <Field name="describe_incident" component={AudioConverter} />
              </View>
              <View style={{width: '90%', marginBottom: 20}}>
                <FilePicker
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                />
              </View>
              <SelectPicker label={anyOneInjured} data={anyOneInjuredData} />
              {/* <TextInputGroup inputFields={} /> */}
              <View style={[commonStyles.mb15, commonStyles.mt5]}>
                <Text style={[commonStyles.text16, commonStyles.mb10]}>
                  Status of Injury / Incident
                </Text>
                <CheckBox
                  checkboxes={checkboxData}
                  onPress={handleCheckboxPress}
                />
              </View>
              {values.anyone_injured === 'Yes' && (
                <SafetyFieldArray number="number" />
              )}

              <RadioGroupButton options={dismantleRadioData} />
              <View style={[commonStyles.mTop15]}>
                <SelectPicker
                  label={investigationOfficer}
                  data={investigationOfficerData}
                />
              </View>
              <Text style={[commonStyles.mb10, commonStyles.text16]}>
                What measures were taken to prevent recurrence ?{' '}
                <Text style={[commonStyles.errorText]}>*</Text>
              </Text>
              <CheckBox
                checkboxes={measuresData}
                onPress={handleCheckboxPress}
              />
              <FilePicker
                selectedFiles={selectedFiles2}
                setSelectedFiles={setSelectedFiles2}
              />
              <Field name="specify_measures" component={AudioConverter} />
              <View style={[commonStyles.mTop15]}>
                <TextInputGroup
                  inputFields={userPersonalData}
                  username={username}
                  userEmail={userEmail}
                />
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Signature 1
                </Text>
                <MySignatureCanvas
                  onBegin={handleCanvasBegin}
                  onEnd={handleCanvasEnd}
                  signature={signatures}
                  setSignature={(signature: any) =>
                    setSignatures(prevSignatures => ({
                      ...prevSignatures,
                      signature2: signature,
                    }))
                  }
                />
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
