import {View, ScrollView, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, ActivityIndicator} from 'react-native-paper';
import React, {useState, useRef, useEffect} from 'react';
import {myStyles} from './styles';
import TextInputGroup from '../../../themes/buttons/TextInputGroup';
import CustomHeader from '../../../themes/text/TextWithGreenBg';
import {
  FilePickerRef,
  SelectPickerRef,
  SignatureCanvasRef,
} from '../../../types/interfaces/types';
import {ButtonGreen} from '../../../themes/text/ButtonGreen';
import {Field, Formik} from 'formik';
import axios from 'axios';
import {DocumentPickerResponse} from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import CustomAlert from '../../../themes/buttons/Alert';
import {
  //   userPersonalData,
  initialFormData,
  //   scaffoldData,
  loadingCapacity,
  initialValues,
  firstPersonName,
  secondPersonName,
  feedback,
} from '../../../data/recordOfToolboxData';
import Address from '../../../components/common/Address';
import {CanvasSignature} from '../../../themes/buttons/canvas-signature';
import useUserInformation from '../../../hooks/userInformation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/type/types';
import {DatePickers} from '../../../themes/buttons/datePicker';
import commonStyles from '../../../styles/commonStyles';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const RecordToolbox = ({
  navigation,
}: {
  navigation: HomeNavigationProp;
}) => {
  // Scroll View End

  const [selectedFiles, setSelectedFiles] = useState<DocumentPickerResponse[]>(
    [],
  );
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {userId} = useUserInformation();

  const mySignatureCanvasRefs = useRef<SignatureCanvasRef[]>([]);
  const mySelectPickerRef = useRef<SelectPickerRef>(null);
  const myFilePickerRef = useRef<FilePickerRef>(null);
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
      };

      const response = await axios.post(
        'https://fivestaraccess.com.au/fivestaraccess_formapp/record_toolbox_app.php',
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
      myFilePickerRef?.current?.clearAllFiles();
      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView ref={scrollViewRef} scrollEnabled>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          //   validationSchema={monthlyInspectionSchema}
          onSubmit={async (values, {resetForm}) => {
            setLoading(true);
            await handleSubmit1(values);
            resetForm();
            setLoading(false);
          }}>
          {({handleSubmit, values}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                <Address />
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    RECORD OF TOOLBOX TALK
                  </Text>
                </View>
              </View>
              <View>
                {/* <SelectPicker
                  ref={mySelectPickerRef}
                  label={monthlyInspectionProjectIdData}
                  data={addressOptions}
                /> */}

                <TextInputGroup inputFields={initialFormData} />
                <View style={{marginBottom: 20}}>
                  <Text style={[commonStyles.mb5, commonStyles.text16]}>
                    Date
                  </Text>
                  <DatePickers name="date" mode="date" />
                </View>
                <View style={{marginBottom: 20}}>
                  <Text style={[commonStyles.mb5, commonStyles.text16]}>
                    Time
                  </Text>
                  <DatePickers name="time" mode="time" />
                </View>
              </View>
              <View style={{marginBottom: 15, marginTop: 15}}>
                <CustomHeader text="Person's Present" />
              </View>
              <View>
                <TextInputGroup inputFields={firstPersonName} />
                <CanvasSignature
                  ref={(el: SignatureCanvasRef) =>
                    (mySignatureCanvasRefs.current[0] = el)
                  }
                  onBegin={handleCanvasBegin}
                  onEnd={handleCanvasEnd}
                  name={'first_signature'}
                />
              </View>
              <View>
                <TextInputGroup inputFields={secondPersonName} />
                <CanvasSignature
                  ref={(el: SignatureCanvasRef) =>
                    (mySignatureCanvasRefs.current[1] = el)
                  }
                  onBegin={handleCanvasBegin}
                  onEnd={handleCanvasEnd}
                  name={'second_signature'}
                />
              </View>
              <TextInputGroup inputFields={feedback} />

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
