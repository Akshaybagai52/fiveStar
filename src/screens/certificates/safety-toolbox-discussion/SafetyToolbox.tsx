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
  // erectionData,
  // variationData,
} from '../../../data/safetyToolbox';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';

export const SafetyToolbox = () => {

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
        imagesAttached: base64Images,
        signature: signatures,
      };

      const response = await axios.post(
        'https://fivestaraccess.com.au/custom_form/damaged_scaffold_app.php',
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
      building_level: Yup.string(),
      date: Yup.date(),
      docketRelation: Yup.object().shape({
        selectOption: Yup.string().required(),
      }),
      hourlyLabour: Yup.string(),
      variation: Yup.string(),
      nameOf_customer: Yup.string().required('Name of customer is required'),
      project_id: Yup.string().required('Project ID is required'),
      purchaseOrder: Yup.string().required('Purchase order is required'),
      workRelation: Yup.string(),
    }),
    // signatures: Yup.object().shape({
    //   nameDayLabourDocket: Yup.string().required('Name is required'),
    //   capacityDesignation: Yup.string().required('capacity can"t be empty'),
    //   emailReceiveCopy: Yup.string().email('Invalid email'),
    //   // customerEmail2: Yup.string().email('Invalid email'),
    //   // // DateTime: Yup.string().required('Handover Date and Time is required'),
    //   // customerName2: Yup.string().required('Name is required'),
    // }),
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
                {/* {values.projectDetails.docketRelation.selectedOption ===
                  'Variation_Works' && (
                  <View style={commonStyles.mTop15}>
                    <CustomHeader text="Variation Work" />
                    <CheckBox
                      checkboxes={erectionData}
                      onPress={handleElevationDataPress}
                    />
                  </View>
                )}
                {values.projectDetails.docketRelation.selectedOption ===
                  'Hourly_labour' && (
                  <View style={commonStyles.mTop15}>
                    <CustomHeader text="Hourly Labour" />
                    <CheckBox
                      checkboxes={variationData}
                      onPress={handleElevationDataPress}
                    />
                  </View>
                )} */}
                {/* {values.projectDetails.certificationRelation.selectedOptionData.variation.dayLabourErection === "dayLabourErection" ? <Text> "hey"</Text> : <Text> "dsfhey"</Text>} */}
              </View>
              <View style={[commonStyles.mTop15]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date of Safety Tool Box Meeting *
                </Text>
                <DatePickers name="projectDetails.date" mode="date" />
                <TextInputGroup inputFields={initialFormData} />
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
                  Supervisors Notes *
                </Text>
                <Field
                  name="projectDetails.supervisor_notes"
                  component={AudioConverter}
                />
              </View>
              <View style={[commonStyles.mTop15]}>
                <CustomHeader text="Record of Attendees" />
                <TextInputGroup inputFields={scaffoldData} />
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
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
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
              <Text style={[commonStyles.text16, commonStyles.mb15]}>Signature of person completing this form</Text>

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
