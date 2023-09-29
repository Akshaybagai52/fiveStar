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
  options,
  elevations,
  loadingCapacity,
  initialValues,
  erectionData,
  variationData,
  // inspectionData,
  // erectionRadioData,
  // dismantleRadioData,
} from '../../../data/dayLabour';
import commonStyles from '../../../styles/commonStyles';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';

export const DayLabour = () => {
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
  const [numFields, setNumFields] = useState(1);
  const addField = () => {
    if (numFields < 3) {
      setNumFields(numFields + 1);
    }
  };

  const renderAudioConverters = () => {
    const audioConverters = [];
    for (let i = 1; i <= numFields; i++) {
      audioConverters.push(
        <Field
          key={`description-${i}`}
          name={`workDetails.workDescription.description[${i - 1}]`}
          component={AudioConverter}
        />,
      );
    }
    return audioConverters;
  };
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

  const handleSubmit1 = async (values: any) => {
    try {
      const base64Images = await Promise.all(
        selectedFiles.map(async file => {
          const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
          return `data:${file.type};base64,${base64}`;
        }),
      );
      const requestData = {
        projectDetails: {
          buildingLevel: values.projectDetails.building_level,
          date: values.projectDetails.date,
          selectedOption: values.projectDetails.docketRelation.selectedOption,
          hourlyLabour:
            values.projectDetails.docketRelation.selectedOptionData
              .hourlyLabour,
          variation:
            values.projectDetails.docketRelation.selectedOptionData.variation,
          nameOfCustomer: values.projectDetails.nameOf_customer,
          projectId: values.projectDetails.project_id,
          purchaseOrder: values.projectDetails.purchase_order,
          workRelation: values.projectDetails.workRelation,
        },
        scaffoldDetails: {
          elevations: values.scaffoldDetails.elevations,
        },
        signatures: {
          authorised: values.signatures.authorised,
          capacityDesignation: values.signatures.capacity_designation,
          customerRepresentative: values.signatures.customer_Representative,
          customersMail: values.signatures.customers_mail,
          emailReceiveCopy: values.signatures.email_receive_copy,
          nameDayLabourDocket: values.signatures.name_day_labour_docket,
        },
        workDetails: {
          elevationCheckbox: values.workDetails.elevationCheckbox,
          workDescription: values.workDetails.workDescription,
        },
        imagesAttached: base64Images,
        signature: signatures,
      };

      // const response = await axios.post(
      //   'https://fivestaraccess.com.au/custom_form/handover_native_app.php',
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
                    DAY LABOUR DOCKET
                  </Text>
                </View>
                <CustomHeader text="Project Details" />
                <Text style={[{fontSize: 19}, commonStyles.mTop15]}>
                  What is this Docket relating to ?*
                </Text>
                {/* <Text>Choose One </Text> */}
                <RadioGroup
                  options={options}
                  name="projectDetails.docketRelation.selectedOption"
                />
                {values.projectDetails.docketRelation.selectedOption ===
                  'Variaton_works' && (
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
                )}
                {/* {values.projectDetails.certificationRelation.selectedOptionData.variation.dayLabourErection === "dayLabourErection" ? <Text> "hey"</Text> : <Text> "dsfhey"</Text>} */}
              </View>
              <View>
                <DatePickers name="projectDetails.date" mode="date" />
                <TextInputGroup inputFields={initialFormData} />
              </View>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  What was the work relating to ? Choose all relevant *
                </Text>

                <CheckBox
                  checkboxes={checkboxes}
                  onPress={handleCheckboxPress}
                />
              </View>
              <View style={{marginTop: 15}}>
                <CustomHeader text="Work Details" />
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  On which elevations did you work ? Choose all applicable *
                </Text>
                <CheckBox
                  checkboxes={elevationData}
                  onPress={handleElevationDataPress}
                />
                <View>
                  {renderAudioConverters()}
                  {numFields < 3 && (
                    <Button
                      mode="elevated"
                      style={[commonStyles.mTop15, {alignSelf: 'flex-end'}]}
                      onPress={addField}>
                      Add more Fields
                    </Button>
                  )}
                  {/* <Button title="Submit" onPress={handleSubmit} /> */}
                </View>
                <View style={{width: '90%', marginBottom: 50}}>
                  <FilePicker
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                  />
                </View>
              </View>
              <View>
                <TextInputGroup inputFields={scaffoldData} />
              </View>

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
                  I confirm abovementioned works has been completed as
                  authorised by Five Star Scaffolding
                </Text>
              </View>
              <TextInputGroup inputFields={userPersonalData} />

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
              <Text style={[commonStyles.text16,commonStyles.fontBold, commonStyles.mb15]}>
                This document is issued in accordance with the terms and
                conditions of contract and constitutes formal notification of
                variation, extension of time and any related additional cost
                claims. This is a claim made under the Building and Construction
                Industry Security of Payment Act 1999 NSW
              </Text>
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
