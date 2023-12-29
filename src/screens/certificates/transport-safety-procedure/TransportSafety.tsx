import {View, ScrollView} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import React, {useState, useRef} from 'react';
import {myStyles} from '../damagedOrMissing';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CheckBox from '../../../themes/buttons/Checkbox';
import {
  CheckboxItem,
  DatePickersRef,
  FilePickerRef,
  SelectPickerRef,
  SignatureCanvasRef,
} from '../../../types/interfaces/types';
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
  listData,
  definationsColumn,
  definationsData,
  rolesAndResColumn,
  rolesAndResData,
} from '../../../data/transportSafetyData';
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
import Table from '../../../components/common/Table';
import UnorderedList from '../../../components/common/UnorderedList';

const tableData = [
  {document: 'Document ID:', information: ' FSS-EHS-PR-024'},
  {document: 'Document Name:', information: 'Transport Safety Procedure'},
  {document: 'Prepared By:', information: 'Chris Hyett'},
  {document: 'Approved By:', information: 'Managing Director'},
  {document: 'Issue Date:', information: '22nd April 2020'},
];

// Column headers for the table
const tableColumns = ['Document', 'Information'];
const TransportSafety = () => {
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

  const mySignatureCanvasRefs = useRef<SignatureCanvasRef[]>([]);
  const myDatePickerRefs = useRef<DatePickersRef[]>([]);
  const mySelectPickerRef = useRef<SelectPickerRef[]>([]);
  const myFilePickerRef = useRef<FilePickerRef>(null);
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

      mySelectPickerRef?.current?.forEach((ref: SelectPickerRef) =>
        ref.clearPickerData(),
      );
      mySignatureCanvasRefs?.current?.forEach((ref: SignatureCanvasRef) =>
        ref.handleClearSignature(),
      );
      myDatePickerRefs?.current?.forEach((ref: DatePickersRef) =>
        ref.clearDate(),
      );
      myFilePickerRef?.current?.clearAllFiles();
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
                    Transport Safety Procedure
                  </Text>
                </View>
                <Table columns={tableColumns} data={tableData} isList={false} />
                <View style={[commonStyles.mTop15]}>
                  <Text style={[commonStyles.text20, commonStyles.fontBold]}>
                    2. Purpose
                  </Text>
                  <Text style={[commonStyles.text16]}>
                    The purpose of this document is to create a zero harm
                    workplace by eliminating the risks associated with the
                    loading/unloading of scaffold gear and transportation of
                    scaffold gear to and from site in a pro-active and
                    consistent manner.
                  </Text>
                </View>
                <View style={[commonStyles.mTop15]}>
                  <Text style={[commonStyles.text20, commonStyles.fontBold]}>
                    3. Scope
                  </Text>
                  <Text style={[commonStyles.text16]}>
                    By eliminating the risks associated with the
                    loading/unloading of scaffold and transportation of scaffold
                    gear to and from site we can move forward to the goal of
                    creating a zero harm workplace for Five Star Scaffolding Pty
                    Ltd. This goal can be achieved by adhering to the
                    responsibilities for each personnel set out in the procedure
                    in section 5.0
                  </Text>
                </View>
                <View style={[commonStyles.mTop15]}>
                  <Text style={[commonStyles.text20, commonStyles.fontBold]}>
                    This procedure applies to :
                  </Text>
                  <UnorderedList items={listData} />
                </View>
                <View style={[commonStyles.mTop15]}>
                  <Text style={[commonStyles.text20, commonStyles.fontBold]}>
                    4. Definations
                  </Text>
                  <Table
                    columns={definationsColumn}
                    data={definationsData}
                    isList={false}
                  />
                </View>
                <View style={[commonStyles.mTop15]}>
                  <Text style={[commonStyles.text20, commonStyles.fontBold]}>
                    5. Roles and Responsibility
                  </Text>
                  <Table
                    columns={rolesAndResColumn}
                    data={rolesAndResData}
                    isList={true}
                  />
                </View>
              </View>
              <View style={[commonStyles.mTop15, commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Incident Date <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers
                  ref={(el: DatePickersRef) =>
                    (myDatePickerRefs.current[0] = el)
                  }
                  name="date_of_incident"
                  mode="date"
                />
              </View>
              <SelectPicker
                ref={(el: SelectPickerRef) =>
                  (mySelectPickerRef.current[0] = el)
                }
                label={label}
                data={subcontractorData}
              />
              <TextInputGroup inputFields={scaffoldData} />
              <SelectPicker
                ref={(el: SelectPickerRef) =>
                  (mySelectPickerRef.current[1] = el)
                }
                label={safetyIncidentProjectIdData}
                data={addressOptions}
              />
              <Text>Name of Employee Involved in this incident</Text>
              <SafetyInjuredFieldArray number="number" />
              <SelectPicker
                ref={(el: SelectPickerRef) =>
                  (mySelectPickerRef.current[2] = el)
                }
                label={supervisorName}
                data={supervisorNameData}
              />
              <SelectPicker
                ref={(el: SelectPickerRef) =>
                  (mySelectPickerRef.current[3] = el)
                }
                label={supervisorMail}
                data={supervisorEmailData}
              />
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
              <SelectPicker
                ref={(el: SelectPickerRef) =>
                  (mySelectPickerRef.current[4] = el)
                }
                label={anyOneInjured}
                data={anyOneInjuredData}
              />
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
                  ref={(el: SelectPickerRef) =>
                    (mySelectPickerRef.current[5] = el)
                  }
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
                  ref={(el: SignatureCanvasRef) =>
                    (mySignatureCanvasRefs.current[0] = el)
                  }
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

export default TransportSafety;
