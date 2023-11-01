import {View, ScrollView, SafeAreaView} from 'react-native';
import {Text, ActivityIndicator, Button} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import {myStyles} from '../damagedOrMissing';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  initialFormData,
  initialValues,
  siteAuditRadio1,
  inputField1,
  inputField2,
  siteAuditRadio2,
  siteAuditRadio3,
  siteAuditRadio4,
  siteAuditRadio5,
  siteAuditRadio6,
  siteAuditRadio7,
  siteAuditRadio8,
  inputField3,
  inputField4,
  inputField5,
  inputField6,
  inputField7,
  inputField8,
  inputField9,
  siteAuditRadio9,
  siteAuditRadio12,
  inputField10,
  inputField11,
  siteAuditRadio13,
  supervisorName,
  supervisorEmail,
  subcontractor,
} from '../../../data/siteAudit';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import FilePicker from '../../../themes/buttons/FilePicker';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {SelectPicker} from '../../../themes/buttons/selectDropdown';
import {
  subcontractorData,
  supervisorEmailData,
  supervisorNameData,
} from '../../../data/globalData';

export const SiteAudit = () => {
  const [selectedFiles3, setSelectedFiles3] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles4, setSelectedFiles4] = useState<
    DocumentPickerResponse[]
  >([]);

  const [selectedFiles5, setSelectedFiles5] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles6, setSelectedFiles6] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles7, setSelectedFiles7] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles8, setSelectedFiles8] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles9, setSelectedFiles9] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles10, setSelectedFiles10] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles11, setSelectedFiles11] = useState<
    DocumentPickerResponse[]
  >([]);
  const [selectedFiles12, setSelectedFiles12] = useState<
    DocumentPickerResponse[]
  >([]);

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

  const handleCustomAlertClose = () => {
    setCustomAlertVisible(false);
  };

  const handleSubmit1 = async (values: any) => {
    try {
      const convertToBase64 = async (selectedFiles: any) => {
        const base64Images = await Promise.all(
          selectedFiles.map(async (file: any) => {
            const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
            return `data:${file.type};base64,${base64}`;
          }),
        );
        return base64Images;
      };

      const base64Images3 = await convertToBase64(selectedFiles3);
      const base64Images4 = await convertToBase64(selectedFiles4);
      const base64Images5 = await convertToBase64(selectedFiles5);
      const base64Images6 = await convertToBase64(selectedFiles6);
      const base64Images7 = await convertToBase64(selectedFiles7);
      const base64Images8 = await convertToBase64(selectedFiles8);
      const base64Images9 = await convertToBase64(selectedFiles9);
      const base64Images10 = await convertToBase64(selectedFiles10);
      const base64Images11 = await convertToBase64(selectedFiles11);
      const base64Images12 = await convertToBase64(selectedFiles12);
      const requestData = {
        values,
        imagesAttached3: base64Images3,
        imagesAttached4: base64Images4,
        imagesAttached5: base64Images5,
        imagesAttached6: base64Images6,
        imagesAttached7: base64Images7,
        imagesAttached8: base64Images8,
        imagesAttached9: base64Images9,
        imagesAttached10: base64Images10,
        imagesAttached11: base64Images11,
        imagesAttached12: base64Images12,
        // signature: signatures,
      };
      console.log(requestData);

      //   const response = await axios.post(
      //     'https://fivestaraccess.com.au/custom_form/scaffold_tampering_app.php',
      //     requestData,
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     },
      //   );
      //   console.log('Post Response:', requestData);
      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validationSchema = Yup.object().shape({
    project_id: Yup.string().required('This is required Field'),
    date: Yup.string(),
    nameOf_customer: Yup.string(),
    unapproved_modification: Yup.string().required('This is required Field'),
    structural_integrity: Yup.string().required('This is required Field'),
    falling_objects: Yup.string().required('This is required Field'),
    general_access: Yup.string().required('This is required Field'),
    affacted_area: Yup.string().required('This is required Field'),
    repair_scaffold: Yup.string().required('This is required Field'),
    prevent_recurrence: Yup.string().required('This is required Field'),
    Supervisor_Name: Yup.string().required('This is required Field'),
    supervisor_emails: Yup.string().required('This is required Field'),
    customer_representative: Yup.string(),
    representative_email: Yup.string(),
    supervisorSignature: Yup.string(),
  });
  return (
    <SafeAreaView style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView
        ref={scrollViewRef}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          //   validationSchema={validationSchema}
          onSubmit={async values => {
            setLoading(true);
            handleSubmit1(values);
            setLoading(false);
          }}>
          {({handleSubmit, values, setFieldValue}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                <Address />
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    SITE AUDIT FORM
                  </Text>
                </View>
                <View>
                  <CustomHeader text="Project Details" />
                  <TextInputGroup inputFields={initialFormData} />
                </View>
              </View>
              <View>
                <CustomHeader text="Inspections Sign-Off" />
              </View>
              <View style={[commonStyles.mTop15]}>
                {/* <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date
                </Text>
                <DatePickers name="date" mode="date" /> */}
                <Text style={[commonStyles.text16, commonStyles.mTop15]}>
                  Inspection detailed notes
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <Field
                  name="inspection.inspection_notes"
                  component={AudioConverter}
                />
                <View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio1} />
                    <TextInputGroup inputFields={inputField1} />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio2} />
                    <TextInputGroup inputFields={inputField2} />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio3} />
                    <TextInputGroup inputFields={inputField3} />
                    <FilePicker
                      selectedFiles={selectedFiles3}
                      setSelectedFiles={setSelectedFiles3}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio4} />
                    <TextInputGroup inputFields={inputField4} />
                    <FilePicker
                      selectedFiles={selectedFiles4}
                      setSelectedFiles={setSelectedFiles4}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio5} />
                    <TextInputGroup inputFields={inputField5} />
                    <FilePicker
                      selectedFiles={selectedFiles5}
                      setSelectedFiles={setSelectedFiles5}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio6} />
                    <TextInputGroup inputFields={inputField6} />
                    <FilePicker
                      selectedFiles={selectedFiles6}
                      setSelectedFiles={setSelectedFiles6}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio7} />
                    <TextInputGroup inputFields={inputField7} />
                    <FilePicker
                      selectedFiles={selectedFiles7}
                      setSelectedFiles={setSelectedFiles7}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio8} />
                    <TextInputGroup inputFields={inputField8} />
                    <FilePicker
                      selectedFiles={selectedFiles8}
                      setSelectedFiles={setSelectedFiles8}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio9} />
                    <TextInputGroup inputFields={inputField9} />
                    <FilePicker
                      selectedFiles={selectedFiles9}
                      setSelectedFiles={setSelectedFiles9}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <TextInputGroup inputFields={inputField10} />
                    <FilePicker
                      selectedFiles={selectedFiles10}
                      setSelectedFiles={setSelectedFiles10}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <Text style={[commonStyles.text16, commonStyles.fontBold]}>
                      11. What is the ratio of licence workers to labourers?
                    </Text>
                    <TextInputGroup inputFields={inputField11} />
                    <FilePicker
                      selectedFiles={selectedFiles11}
                      setSelectedFiles={setSelectedFiles11}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio12} />
                    <FilePicker
                      selectedFiles={selectedFiles12}
                      setSelectedFiles={setSelectedFiles12}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <RadioGroupButton options={siteAuditRadio13} />
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      Next scheduled Inspection date{' '}
                      <Text style={[commonStyles.errorText]}>*</Text>
                    </Text>
                    <DatePickers name="inspection.date" mode="date" />
                  </View>
                </View>
              </View>

              <View style={{marginBottom: 15, marginTop: 15}}>
                <CustomHeader text="Signatures" />
                {/* <TextInputGroup inputFields={userPersonalData} /> */}
                <View style={[commonStyles.mTop15]}>
                  <SelectPicker
                    label={supervisorName}
                    data={supervisorNameData}
                  />
                </View>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Site Inspection Date and Time{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers name="inspection_date" mode="date" />
                <View style={[commonStyles.mTop15]}>
                  <SelectPicker
                    label={supervisorEmail}
                    data={supervisorEmailData}
                  />
                </View>
                <View style={[commonStyles.mTop15]}>
                  <SelectPicker
                    label={subcontractor}
                    data={subcontractorData}
                  />
                </View>
              </View>

              {/* <SignatureScreen /> */}
              <Text style={[commonStyles.text16, commonStyles.mb15]}>
                Inspectors Signature
              </Text>

              <CanvasSignature
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
                name="inspectorSignature"
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
    </SafeAreaView>
  );
};
