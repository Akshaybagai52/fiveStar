import {View, ScrollView, SafeAreaView, TextInput} from 'react-native';
import {Text, ActivityIndicator, Button} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {DatePickers} from '../../themes/buttons/datePicker';
import TextInputGroup from '../../themes/buttons/TextInputGroup';
import commonStyles from '../../styles/commonStyles';
import {myStyles} from '../certificates/damagedOrMissing';
import {SelectPicker} from '../../themes/buttons/selectDropdown';
import {ButtonGreen} from '../../themes/text/ButtonGreen';
import {colors} from '../../colors/colors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAddressOptions} from '../../redux/addressSlice';
import { updateAddressResults } from '../../redux/mainSlice';

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

export const MaterialOrder = ({navigation}:any) => {
  const [isCustomAlertVisible, setCustomAlertVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleGetStartedPress = () => {
    navigation.navigate('Material Checkout');
  };
  const handleCustomAlertClose = () => {
    setCustomAlertVisible(false);
  };
  const dispatch = useDispatch();
  const addressOptions = useSelector((state: any) => state.addressOptions);

  useEffect(() => {
    dispatch(fetchAddressOptions());
  }, [dispatch]); 

  const handleSubmit1 = async (values: any) => {

    try {
      const requestData = {
        values,

        // imagesAttached: base64Images,
        // signature: signatures,
      };
      // console.log(requestData);

      //   const response = await axios.post(
      //     'https://fivestaraccess.com.au/custom_form/scaffold_tampering_app.php',
      //     requestData,
      //     {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     },
      //   );
      dispatch(updateAddressResults(values))
        console.log('Post Response:', requestData);
        handleGetStartedPress()

      setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  // console.log(addressOptions)

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
      <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
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
                {/* <Address /> */}
                <View style={{marginBottom: 20}}>
                  <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                    Delivery Details
                  </Text>
                </View>
              </View>
              <View style={{marginBottom:50}}>
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
                    value="Manisha Kumari"
                    style={[
                      commonStyles.textInput,
                      {width: '90%', borderColor: colors.darkBlue},
                    ]}
                    editable={false}
                  />
                </View>

                <ButtonGreen text="Submit" onPress={handleSubmit} />

                {/* <View style={commonStyles.mTop15}>
                  <Text style={[commonStyles.text16, commonStyles.mTop15]}>
                    Other Observations and Comments Any other observations and
                    comments not covered in this form?{' '}
                    <Text style={[commonStyles.errorText]}>*</Text>
                  </Text>
                  <Field name="prevent_recurrence" component={AudioConverter} />
                </View> */}
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
