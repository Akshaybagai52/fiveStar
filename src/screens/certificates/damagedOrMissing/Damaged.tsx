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
import {CheckboxItem, DamagedFormValues, InputField} from '../../../types/interfaces/types';

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
import { dismantleRadioData, initialFormData, initialValues, loadingCapacity, scaffoldData, userPersonalData } from '../../../data/Damaged';
import { DatePickers } from '../../../themes/buttons/datePicker';
// import DatePickers from '../../../themes/buttons/datePicker';

export const Damaged = () => {
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

  const handleSubmit1 = async (values: DamagedFormValues) => {
    try {
      const base64Images = await Promise.all(
        selectedFiles.map(async file => {
          const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
          return `data:${file.type};base64,${base64}`;
        }),
      );
      const requestData = {
        values,
        reportingCheck: values.reporting.reportingCheck,
        imagesAttached: base64Images,
        signature: signatures,
      };
      // console.log(requestData, 'req');
      

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
      supervisor_email: Yup.string().email('Invalid email address').required('Supervisor Email is required'),
    }),
  });

  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView ref={scrollViewRef} scrollEnabled>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
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
              {/* <View style={{marginBottom: 15, marginTop: 15}}>
                <Recorder />
              </View> */}
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
                  name="reporting.comments"
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
                <Text style={[commonStyles.text16, {marginBottom:5}, commonStyles.mTop15]}>Reporting Date And Time</Text>
                <DatePickers name='signatures.date_time' mode='datetime' />
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
