import {View, ScrollView, SafeAreaView, TextInput} from 'react-native';
import {Text, ActivityIndicator, Button} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import {DatePickers} from '../../themes/buttons/datePicker';
import TextInputGroup from '../../themes/buttons/TextInputGroup';
import commonStyles from '../../styles/commonStyles';
import {myStyles} from '../certificates/damagedOrMissing';
import {SelectPicker} from '../../themes/buttons/selectDropdown';
import {ButtonGreen} from '../../themes/text/ButtonGreen';
import {colors} from '../../colors/colors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddressOptions} from '../../redux/addressSlice';
import {updateAddressResults} from '../../redux/mainSlice';
import useUserInformation from '../../hooks/userInformation';

const initialValues = {
  date: '',
  time: '',
  notes: '',
  deliveryAddress: '',
  gearCondition: '',
  submitter: '',
};
const initialFormData = [
  {
    label: 'DELIVERY NOTES',
    // showAsterisk: true,
    name: 'notes',
  },
];
const gearConditionData = [
  {label: 'Fresh', value: 'Fresh'},
  {label: 'Un-Fresh', value: 'Un-Fresh'},
];
const gearCondition = {
  name: 'gearCondition',
  label: 'GEAR CONDITION',
  showAsterisk: true,
};
const delieveryAddress = {
  name: 'deliveryAddress',
  label: 'DELIVERY ADDRESS (SEARCH AND SELECT FROM DROPDOWN)',
  showAsterisk: true,
};

export const MaterialOrder = ({navigation}: any) => {
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleGetStartedPress = () => {
    navigation.navigate('Material Checkout');
  };
  const handleCustomAlertClose = () => {
    setCustomAlertVisible(false);
  };
  const dispatch = useDispatch<any>();
  const addressOptions = useSelector((state: any) => state.addressOptions);

  const {username} = useUserInformation();

  useEffect(() => {
    dispatch(fetchAddressOptions());
  }, [dispatch]);

  const handleSubmit1 = async (values: any) => {
    try {
      const requestData = {
        values,
        submitter: username

        // imagesAttached: base64Images,
        // signature: signatures,
      };
      // console.log(requestData);

      // const response = await axios.post(
      //   'https://fivestaraccess.com.au/custom_form/material_order_process_app.php',
      //   requestData,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );
      dispatch(updateAddressResults(values));
      console.log('Post Response:', requestData);
      handleGetStartedPress();

      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // console.log(addressOptions)

  const validationSchema = Yup.object().shape({
    date: Yup.string().required('This is required Field'),
    time: Yup.string().required('This is required Field'),
    notes: Yup.string().required('This is required Field'),
    deliveryAddress: Yup.string().required('This is required Field'),
    gearCondition: Yup.string().required('This is required Field'),
    submitter: Yup.string().required('This is required Field'),
  });

  return (
    <SafeAreaView style={{padding: 20, backgroundColor: '#fff'}}>
      <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={initialValues}
          enableReinitialize={true}
          // validationSchema={validationSchema}
          onSubmit={async (values, {setFieldValue, setSubmitting}) => {
            setLoading(true);
            handleSubmit1(values);
            setSubmitting(false);
            setFieldValue('submitter', username);
            setLoading(false);
          }}>
          {({handleSubmit}) => (
            <View style={{backgroundColor: '#fff'}}>
              <View>
                {/* <Address /> */}
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    Delivery Details
                  </Text>
                </View>
              </View>
              <View style={{marginBottom: 50}}>
                <View style={[commonStyles.mTop15]}>
                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    DELIVERY DATE{' '}
                    <Text style={[commonStyles.errorText]}>*</Text>
                  </Text>
                  <DatePickers name="date" mode="date" />
                </View>
                <View style={[commonStyles.mTop15]}>
                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    DELIVERY TIME{' '}
                    <Text style={[commonStyles.errorText]}>*</Text>
                  </Text>
                  <DatePickers name="time" mode="time" />
                </View>
                <TextInputGroup inputFields={initialFormData} />
                <SelectPicker label={gearCondition} data={gearConditionData} />
                <SelectPicker label={delieveryAddress} data={addressOptions} />
                <View>
                  <Text style={[commonStyles.text16, commonStyles.mb5]}>
                    SUBMITTER
                  </Text>
                  <TextInput
                    defaultValue={username || ''}
                    style={[
                      commonStyles.textInput,
                      {width: '90%', borderColor: colors.darkBlue},
                    ]}
                    editable={false}
                  />
                </View>

                <ButtonGreen text="Submit" onPress={handleSubmit} />
              </View>
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
