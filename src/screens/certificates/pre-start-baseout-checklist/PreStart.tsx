import {View, ScrollView, SafeAreaView} from 'react-native';
import {Text, ActivityIndicator, Button} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import {myStyles} from '../damagedOrMissing';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import { Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  userPersonalData,
  initialFormData,
  initialValues,
  combinedData,
} from '../../../data/PreStartData';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import RadioAudio from '../../../components/screens/pre-start/RadioAudio';

export const PreStart = () => {
  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
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
      const base64Images = await Promise.all(
        selectedFiles.map(async file => {
          const base64 = await RNFetchBlob.fs.readFile(file.uri, 'base64');
          return `data:${file.type};base64,${base64}`;
        }),
      );
      const requestData = {
        values,
        // imagesAttached: base64Images,
        // signature: signatures,
      };
      console.log(requestData);

      const response = await axios.post(
        'https://fivestaraccess.com.au/custom_form/baseout_checklist_app.php',
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Post Response:', requestData);
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
                    Pre Start - Base out checklist
                  </Text>
                </View>
              </View>
              <View style={[commonStyles.mTop15]}>
                <TextInputGroup inputFields={initialFormData} />
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date
                </Text>
                <DatePickers name="date" mode="date" />
                <Text style={[commonStyles.text16, commonStyles.mTop15]}>
                  Explain the unapproved modification that took place?{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>

                <RadioAudio combinedData={combinedData} />

                <View style={commonStyles.mTop15}>
          
                  <Text
                    style={[
                      commonStyles.text16,
                      commonStyles.mTop15,
                      commonStyles.fontBold,
                    ]}>
                    Other Observations and Comments Any other observations and
                    comments not covered in this form?{' '}
                    <Text style={[commonStyles.errorText]}>*</Text>
                  </Text>
                  <Field name="prevent_recurrence" component={AudioConverter} />
                </View>
              </View>

              <View style={{marginBottom: 15, marginTop: 15}}>
                <TextInputGroup inputFields={userPersonalData} />
              </View>

              {/* <SignatureScreen /> */}
              <Text style={[commonStyles.text16, commonStyles.mb15]}>
                Signature of person completing this form
              </Text>

              <CanvasSignature
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
                name="supervisorSignature"
              />
              <Text style={[commonStyles.text16, commonStyles.mb15]}>
                Signature of Customer
              </Text>
              <CanvasSignature
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
                name="customerSignature"
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
