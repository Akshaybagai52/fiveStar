import {View, ScrollView, SafeAreaView} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import React, {useState, useRef} from 'react';
import {myStyles} from '../damagedOrMissing';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import FilePicker from '../../../themes/buttons/FilePicker';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  userPersonalData,
  initialFormData,
  initialValues,
  erectionRadioData,
  list,
  scaffoldTemperingProjectIdData,
} from '../../../data/scaffoldTemperingData';
import commonStyles from '../../../styles/commonStyles';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {DatePickers} from '../../../themes/buttons/datePicker';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import ListCompGroup from '../../../components/common/ListCompGroup';
import {useSelector} from 'react-redux';
import {SelectPicker} from '../../../themes/buttons/selectDropdown';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/type/types';
import {scaffoldTamperingSchema} from '../../../schema/yup-schema/fomsSchema';
import {
  DatePickersRef,
  FilePickerRef,
  SelectPickerRef,
  SignatureCanvasRef,
} from '../../../types/interfaces/types';
import useUserInformation from '../../../hooks/userInformation';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const ScaffoldTempering = ({
  navigation,
}: {
  navigation: HomeNavigationProp;
}) => {
  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const addressOptions = useSelector((state: any) => state.addressOptions);

  const mySignatureCanvasRefs = useRef<SignatureCanvasRef[]>([]);
  const myDatePickerRefs = useRef<DatePickersRef[]>([]);
  const mySelectPickerRef = useRef<SelectPickerRef>(null);
  const myFilePickerRef = useRef<FilePickerRef>(null);

  const {userId} = useUserInformation();
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
    navigation.navigate('Home');
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
        userId: userId,
        // signature: signatures,
      };
      console.log(requestData);

      const response = await axios.post(
        'https://fivestaraccess.com.au/custom_form/scaffold_tampering_app.php',
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
      mySelectPickerRef?.current?.clearPickerData();
      mySignatureCanvasRefs?.current?.forEach((ref: SignatureCanvasRef) =>
        ref.handleClearSignature(),
      );
      myDatePickerRefs?.current?.forEach((ref: DatePickersRef) =>
        ref.clearDate(),
      );
      myFilePickerRef?.current?.clearAllFiles();
      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView
        ref={scrollViewRef}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          validationSchema={scaffoldTamperingSchema}
          onSubmit={async (values, {resetForm}) => {
            setLoading(true);
            handleSubmit1(values);
            resetForm();
            setLoading(false);
          }}>
          {({handleSubmit, values, setFieldValue}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                <Address />
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    Scaffold Tampering Investigation Form
                  </Text>
                </View>
              </View>
              <View style={[commonStyles.mTop15]}>
                
                <SelectPicker
                  ref={mySelectPickerRef}
                  label={scaffoldTemperingProjectIdData}
                  data={addressOptions}
                />
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date
                </Text>
                <DatePickers
                  name="date"
                  mode="date"
                  ref={(el: DatePickersRef) =>
                    (myDatePickerRefs.current[0] = el)
                  }
                />
                <TextInputGroup inputFields={initialFormData} />
                {/* <ListWithBullets
                  heading={secondListHeading}
                  listText={scaffoldingData}
                /> */}
                <ListCompGroup list={list} />
                <Text style={[commonStyles.text16, commonStyles.mTop15]}>
                  Explain the unapproved modification that took place?{' '}
                  <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <Field
                  name="unapproved_modification"
                  component={AudioConverter}
                />

                <View style={commonStyles.mTop15}>
                  <RadioGroupButton
                    options={erectionRadioData}
                    // name="projectDetails.certificationRelation.selectedOption"
                  />
                  {/* <AudioConverter /> */}
                  <Text
                    style={[
                      commonStyles.text16,
                      commonStyles.mTop15,
                      commonStyles.fontBold,
                    ]}>
                    Q6. What has been implemented to prevent recurrence of
                    tampering? <Text style={[commonStyles.errorText]}>*</Text>
                  </Text>
                  <Field name="prevent_recurrence" component={AudioConverter} />
                </View>
                <View style={{width: '90%', marginBottom: 20}}>
                  <FilePicker
                    ref={myFilePickerRef}
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                  />
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
    </SafeAreaView>
  );
};
