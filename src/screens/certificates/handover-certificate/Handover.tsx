import {View, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import {myStyles} from './styles';
import RadioGroup from '../../../themes/buttons/RadioButtons';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import CheckBox from '../../../themes/buttons/Checkbox';
import {CheckboxItem} from '../../../types/interfaces/types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
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
  options,
  elevations,
  loadingCapacity,
  initialValues,
  erectionData,
  variationData,
  inspectionData,
  erectionRadioData,
  dismantleRadioData,
} from '../../../data/handoverData';
import commonStyles from '../../../styles/commonStyles';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import { AudioConverter } from '../../../themes/buttons/speechToText';

const Handover = () => {
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
                <View style={{padding: 10, marginBottom: 15}}>
                  <Text>
                    <Icon
                      name="office-building-marker"
                      size={20}
                      color="#112D4E"
                    />{' '}
                    Five Star Scaffolding Pvt Ltd
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
                <Text>Choose One </Text>
                <RadioGroup
                  options={options}
                  name="projectDetails.certificationRelation.selectedOption"
                />
                {values.projectDetails.certificationRelation.selectedOption ===
                  'Erection' && (
                  <View style={commonStyles.mTop15}>
                    <CustomHeader text="Contract Work - Choose all relevant" />
                    <CheckBox
                      checkboxes={erectionData}
                      onPress={handleElevationDataPress}
                    />
                  </View>
                )}
                {values.projectDetails.certificationRelation.selectedOption ===
                  'Dismantle' && (
                  <View style={commonStyles.mTop15}>
                    <CustomHeader text="Contract Work - Choose all relevant" />
                    <CheckBox
                      checkboxes={erectionData}
                      onPress={handleElevationDataPress}
                    />
                  </View>
                )}
                {values.projectDetails.certificationRelation.selectedOption ===
                  'Variation_Works' && (
                  <View style={commonStyles.mTop15}>
                    <CustomHeader text="Variation Contract Works - Choose all relevant" />
                    <CheckBox
                      checkboxes={variationData}
                      onPress={handleElevationDataPress}
                    />
                  </View>
                )}
                {values.projectDetails.certificationRelation.selectedOption ===
                  'Inspection' && (
                  <View style={commonStyles.mTop15}>
                    <CustomHeader text="Inspection" />
                    <CheckBox
                      checkboxes={inspectionData}
                      onPress={handleElevationDataPress}
                    />
                  </View>
                )}
                {/* {values.projectDetails.certificationRelation.selectedOptionData.variation.dayLabourErection === "dayLabourErection" ? <Text> "hey"</Text> : <Text> "dsfhey"</Text>} */}
              </View>
              <View>
                <TextInputGroup inputFields={initialFormData} />
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
                <TextInputGroup inputFields={scaffoldData} />
              </View>
              {values.projectDetails.certificationRelation.selectedOption ===
                'Erection' && (
                <View style={commonStyles.mTop15}>
                  <CustomHeader text="Checklist for Scaffold" />
                  <RadioGroupButton
                    options={erectionRadioData}
                    // name="projectDetails.certificationRelation.selectedOption"
                  />
                  {/* <AudioConverter /> */}
                  <Field name="projectDetails.scaffoldChecklist.speechToText" component={AudioConverter} />

                </View>
              )}
              {values.projectDetails.certificationRelation.selectedOption ===
                'Inspection' && (
                <View style={commonStyles.mTop15}>
                  <CustomHeader text="Checklist for Scaffold" />
                  <RadioGroupButton
                    options={erectionRadioData}
                    // name="projectDetails.certificationRelation.selectedOption"
                  />
                  {/* <AudioConverter /> */}
                  <Field name="projectDetails.scaffoldChecklist.speechToText" component={AudioConverter} />
                </View>
              )}

              {values.projectDetails.certificationRelation.selectedOption ===
                'Dismantle' && (
                <View style={commonStyles.mTop15}>
                  <CustomHeader text="Checklist for Scaffold" />
                  <RadioGroupButton
                    options={dismantleRadioData}
                    // name="projectDetails.certificationRelation.selectedOption"
                  />
                </View>
              )}

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
              <TextInputGroup inputFields={userPersonalData} />
              <View style={{width: '90%', marginBottom: 50}}>
                <FilePicker
                  selectedFiles={selectedFiles}
                  setSelectedFiles={setSelectedFiles}
                />
              </View>

              {/* <SignatureScreen /> */}
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

export default Handover;