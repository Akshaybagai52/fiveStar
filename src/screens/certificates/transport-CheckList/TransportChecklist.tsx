import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import Address from '../../../components/common/Address';
import RadioGroupButton from '../../../themes/buttons/radioButtonGroup';
// import { erectionRadioData } from '../../../data/handoverData';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import {
  transPortHeading,
  transPortHeading1,
  transportUserPersonalData,
  initialValues,
} from '../../../data/TransportChecklist';
import {
  DatePickersRef,
  SignatureCanvasRef,
} from '../../../types/interfaces/types';
import {Formik, Field} from 'formik';

import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import useUserInformation from '../../../hooks/userInformation';
import {DatePickers} from '../../../themes/buttons/datePicker';
// import {MySignatureCanvas} from '../../../themes/buttons/SignatureCanvas';
import CustomAlert from '../../../themes/buttons/Alert';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import {RootStackParamList} from '../../../types/type/types';
import {AudioConverter} from '../../../themes/buttons/speechToText';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import {transportChecklistSchema} from '../../../schema/yup-schema/fomsSchema';
import { style } from './style';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const TransportChecklist = ({
  navigation,
}: {
  navigation: HomeNavigationProp;
}) => {
  const {username} = useUserInformation();
  const [loading, setLoading] = useState(false);
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [numFields, setNumFields] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
  const myDatePickerRefs = useRef<DatePickersRef[]>([]);
  const [signatures, setSignatures] = useState({
    signature1: '',
    signature2: '',
  });
  const mySignatureCanvasRefs = useRef<SignatureCanvasRef[]>([]);
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
      // console.log('Post Response:', requestData);
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


  const handleCustomAlertClose = () => {
    setCustomAlertVisible(false);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <ScrollView ref={scrollViewRef}>
        <View style={style.transPortForm}>
          <Address />
          <Text style={style.transport_heading}>Transport Checklist</Text>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={transportChecklistSchema}
            onSubmit={async (values, {resetForm}) => {
              //  console.log(values,"lllll")
              setLoading(true);
              await handleSubmit1(values);
              resetForm();
              setLoading(false);
            }}>
            {({handleSubmit}) => (
              <View>
                <View>
                  <View>
                    <CustomHeader text="Details" />
                  </View>
                  <View>
                    <TextInputGroup inputFields={transportUserPersonalData} />
                  </View>

                  <View style={style.dateSpace}>
                    <Text style={style.dateText}>Date</Text>
                    <DatePickers name="date" mode="date" />
                  </View>
                </View>
                <CustomHeader text="Order Details" />
                <View>
                  <RadioGroupButton options={transPortHeading} />
                </View>
                <CustomHeader text="3. Next Day Allocation" />
                <View>
                  <RadioGroupButton options={transPortHeading1} />
                </View>
                <View style={style.commentsSpace}>
                  <Text style={style.commentText}>Comments</Text>
                  <Field name="hazard_incident" component={AudioConverter} />
                </View>
                <CanvasSignature
                  onBegin={handleCanvasBegin}
                  onEnd={handleCanvasEnd}
                  name={'signature'}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

