import {View, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import {myStyles} from './styles';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import {
  CheckboxItem,
  DatePickersRef,
  FilePickerRef,
  MySignatureCanvasRef,
  SelectPickerRef,
  SignatureCanvasRef,
} from '../../../types/interfaces/types';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import {MySignatureCanvas} from '../../../themes/buttons/SignatureCanvas';
import {Field, Formik, useFormikContext} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {HandoverFormValues} from '../../../types/interfaces/types';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  initialFormData,
  elevations,
  loadingCapacity,
  initialValues,
  erectionRadioData,
  truckLoadingData,
} from '../../../data/pickingCheklistData';
import commonStyles from '../../../styles/commonStyles';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import Address from '../../../components/common/Address';
import {useSelector} from 'react-redux';
// import {fetchAddressOptions} from '../../../redux/addressSlice';
import {SelectPicker} from '../../../themes/buttons/selectDropdown';
import useUserInformation from '../../../hooks/userInformation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/type/types';
import {DatePickers} from '../../../themes/buttons/datePicker';
import { pickingChecklistSchema } from '../../../schema/yup-schema/fomsSchema';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const PickingChecklist = ({
  navigation,
}: {
  navigation: HomeNavigationProp;
}) => {
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

  const addressOptions = useSelector((state: any) => state.addressOptions);
  const mySignatureCanvasRefs = useRef<SignatureCanvasRef[]>([]);
  const myDatePickerRefs = useRef<DatePickersRef[]>([]);
  //   const mySelectPickerRef = useRef<SelectPickerRef>(null);
  //   const myFilePickerRef = useRef<FilePickerRef>(null);

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
        userId: userId,
        signatures: signatures,
      };
      const response = await axios.post(
        'https://fivestaraccess.com.au/fivestaraccess_formapp/picking_loading_checklist_app.php',
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
      //   mySelectPickerRef?.current?.clearPickerData();

      mySignatureCanvasRefs?.current?.forEach((ref: SignatureCanvasRef) =>
        ref.handleClearSignature(),
      );
      myDatePickerRefs?.current?.forEach((ref: DatePickersRef) =>
        ref.clearDate(),
      );
      // mySelectPickerRefs?.current?.forEach((ref:SelectPickerRef) => ref.clearPickerData());
      //   myFilePickerRef?.current?.clearAllFiles();
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
          validationSchema={pickingChecklistSchema}
          onSubmit={async (values, {resetForm}) => {
            setLoading(true);
            await handleSubmit1(values);
            resetForm();
            setLoading(false);
            // navigation.navigate("Home")
          }}>
          {({handleSubmit, values}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                <Address />
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    Picking/Loading Checklist
                  </Text>
                  <Text>
                    Checklist Purpose - Checklist for Warehouse team to complete
                    before moving to another order and loading
                  </Text>
                </View>
                <CustomHeader text="Picking Details" />
              </View>
              <View>
                {/* <SelectPicker
                  ref={mySelectPickerRef}
                  label={AddresOptionsData}
                  data={addressOptions}
                /> */}
                <TextInputGroup inputFields={initialFormData} />
              </View>
              <View style={[commonStyles.mt5]}>
                <Text style={[commonStyles.text16, commonStyles.mb5]}>
                  Date <Text style={[commonStyles.errorText]}>*</Text>
                </Text>
                <DatePickers name="picking_date" mode="date" />
              </View>
              <View style={[commonStyles.mTop15]}>
                <CustomHeader text="Order Details" />
                <RadioGroupButton
                  options={erectionRadioData}
                  // name="projectDetails.certificationRelation.selectedOption"
                />
              </View>

              <View style={[commonStyles.mTop15]}>
                <CustomHeader text="3. Truck Loading" />
                <RadioGroupButton
                  options={truckLoadingData}
                  // name="projectDetails.certificationRelation.selectedOption"
                />
              </View>
              <View style={[commonStyles.mTop15]}>
                <Text style={[commonStyles.text16, commonStyles.fontBold]}>Comments:</Text>
                <Field
                  name="truckLoading.comments"
                  component={AudioConverter}
                />
              </View>

              <View style={[commonStyles.mt30, commonStyles.mb15]}>
                <Text style={[commonStyles.text16, commonStyles.fontBold]}>
                  Signature
                </Text>
              </View>

              <MySignatureCanvas
                ref={(el: SignatureCanvasRef) =>
                  (mySignatureCanvasRefs.current[0] = el)
                }
                onBegin={handleCanvasBegin}
                onEnd={handleCanvasEnd}
                signature={signatures}
                setSignature={(signature: string) =>
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
