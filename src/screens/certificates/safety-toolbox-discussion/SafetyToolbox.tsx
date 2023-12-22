import {View, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, ActivityIndicator, Button} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import {myStyles} from '../damagedOrMissing';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import CheckBox from '../../../themes/buttons/Checkbox';
import {
  CheckboxItem,
  DatePickersRef,
  FilePickerRef,
  SelectPickerRef,
  SignatureCanvasRef,
} from '../../../types/interfaces/types';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import FilePicker from '../../../themes/buttons/FilePicker';
import {Field, Formik} from 'formik';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  userPersonalData,
  initialFormData,
  loadingCapacity,
  initialValues,
  firstListHeading,
  topicFeedback,
  secondListHeading,
  scaffoldingData,
  safetyToolboxProjectIdData,
} from '../../../data/safetyToolbox';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';
import ListWithBullets from '../../../components/common/ListComp';
import {TimePicker} from '../../../themes/buttons/timeCalculation';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import {SelectPicker} from '../../../themes/buttons/selectDropdown';
import {useSelector} from 'react-redux';
import useUserInformation from '../../../hooks/userInformation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/type/types';
import {safetyToolboxSchema} from '../../../schema/yup-schema/fomsSchema';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const SafetyToolbox = ({
  navigation,
}: {
  navigation: HomeNavigationProp;
}) => {
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>(loadingCapacity);

  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {username, userEmail} = useUserInformation();

  const mySignatureCanvasRefs = useRef<SignatureCanvasRef[]>([]);
  const myDatePickerRefs = useRef<DatePickersRef[]>([]);
  const mySelectPickerRef = useRef<SelectPickerRef>(null);
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
    navigation.navigate('Home');
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

      mySelectPickerRef?.current?.clearPickerData();
      mySignatureCanvasRefs?.current?.forEach((ref: SignatureCanvasRef) =>
        ref.handleClearSignature(),
      );
      myDatePickerRefs?.current?.forEach((ref: DatePickersRef) =>
        ref.clearDate(),
      );
      myFilePickerRef?.current?.clearAllFiles();
      // console.log('signature', values.projectDetails.certificationRelation);
      // Alert.alert("Document submitted successfully")
      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView
        ref={scrollViewRef}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          // validationSchema={safetyToolboxSchema}
          onSubmit={async (values, {resetForm}) => {
            setLoading(true);
            await handleSubmit1(values);
            resetForm();
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
                <DatePickers
                  ref={(el: DatePickersRef) =>
                    (myDatePickerRefs.current[0] = el)
                  }
                  name="projectDetails.date"
                  mode="date"
                />
                <SelectPicker
                  ref={mySelectPickerRef}
                  label={safetyToolboxProjectIdData}
                  data={addressOptions}
                />

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
                    ref={myFilePickerRef}
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
                  Supervisors Notes{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
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
                      ref={(el: SignatureCanvasRef) =>
                        (mySignatureCanvasRefs.current[0] = el)
                      }
                      onBegin={handleCanvasBegin}
                      onEnd={handleCanvasEnd}
                      name={`recordSign_${index + 1}`}
                    />
                  </View>
                ))}

                <Text
                  style={[
                    commonStyles.text16,
                    commonStyles.mb5,
                    commonStyles.mTop15,
                  ]}>
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
              <TextInputGroup
                inputFields={userPersonalData}
                username={username}
                userEmail={userEmail}
              />

              {/* <SignatureScreen /> */}
              <Text style={[commonStyles.text16, commonStyles.mb15]}>
                Signature of person completing this form
              </Text>

              <CanvasSignature
                ref={(el: SignatureCanvasRef) =>
                  (mySignatureCanvasRefs.current[0] = el)
                }
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
