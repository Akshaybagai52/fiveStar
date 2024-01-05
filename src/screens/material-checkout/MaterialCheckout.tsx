import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingSpinner from '../../components/loader/LoadingSpinner';
import commonStyles from '../../styles/commonStyles';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateAddressResults} from '../../redux/mainSlice';
import {Button} from 'react-native-paper';
import ProductsInput from '../../components/screens/material-checkout/ProductsInput';
import {FlatList} from 'react-native';
import {DatePickers} from '../../themes/buttons/datePicker';
import {Formik} from 'formik';
import {SelectPicker} from '../../themes/buttons/selectDropdown';
import TextInputGroup from '../../themes/buttons/TextInputGroup';
import {colors} from '../../colors/colors';
import {ButtonGreen} from '../../themes/text/ButtonGreen';
import {updateCheckoutDetails} from '../../redux/delieverySlice';
// import useUserInformation from '../../hooks/userInformation';

interface productProps {
  id: string;
  text: string;
  label: string;
  quantity: string;
  value: string;
  weight: number;
  category: string;
}
interface checkoutProps {
  date: string;
  deliveryAddress: string;
  gearCondition: string;
  notes: string;
  submitter: string;
  time: string;
}
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
    prefilled: true,
    prefilledUsername: true,
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
export const MaterialCheckout = ({navigation}: any) => {
  const [data, setData] = useState<any>();
  const [updatedItems, setUpdatedItems] = useState<productProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [mappedItems, setMappedItems] = useState<productProps[]>([]);

  const dataResponse = async () => {
    try {
      const response = await axios.get(
        'https://fivestaraccess.com.au/fivestaraccess_formapp/get_categories.php',
      );

      const modifiedData = response.data.records.map((item: any) => ({
        label: item.fields['Material Description'],
        value: item.fields['Material Description'],
        weight: item.fields['Weight KG'],
        quantity: '',
        text: '',
        id: item.id,
        category: item.fields['Material Category'],
      }));
      // console.log(modifiedData, 'modified Data');

      setData(modifiedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error for the calling code to handle
    }
  };
  const handleInputChange = (text: string, index: number, field: any) => {
    const baseItem =
      updatedItems.find((item: productProps) => item.id === data[index].id) ||
      data[index];
    const updatedItem: any = {...baseItem};

    // Update the specific field in the copied item
    updatedItem[field] = text;

    // Add the updated item to the updatedItems state
    setUpdatedItems((prevState: productProps[]) => {
      const existingItemIndex = prevState.findIndex(
        item => item.id === updatedItem.id,
      );
      if (existingItemIndex > -1) {
        console.log('if');
        // If the item already exists in the updatedItems array, replace it
        const updatedItems = [...prevState];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      } else {
        console.log('else');
        // If the item doesn't exist in the updatedItems array, add it
        return [...prevState, updatedItem];
      }
    });

    // console.log(updatedItems);
  };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const mappedData = updatedItems.map((item: productProps) => ({
      id: item.id,
      label: item.label,
      quantity: item.quantity,
      text: item.text,
      value: item.value,
      weight: item.weight * parseInt(item.quantity),
      category: item.category,
    }));
    setMappedItems(mappedData);
    console.log(mappedData)
    // setData([])
    // setUpdatedItems([]);
  };
  const deliveryDetails = useSelector((state: any) => state.delieveryDetails);

  const handleSubmit1 = async (values: any) => {
    try {
      const requestData = {
        date: values.date || addressOptions.date,
        time: values.time || addressOptions.time,
        notes: values.notes || addressOptions.notes,
        gearCondition: values.gearCondition || addressOptions.gearCondition,
        address: addressOptions.deliveryAddress,
        products: mappedItems,
        // submitter: addressOptions.submitter,
      };
      console.log(requestData);

      // const response = await axios.post(
      //   'https://fivestaraccess.com.au/custom_form/material_order_process_app.php',
      //   requestData,
      //   {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   },
      // );

      await dispatch(updateCheckoutDetails(requestData));
      navigation.navigate('Material Buy');
      console.log('Post Response:', requestData);
      // console.log(checkoutDetails, "checkout");
      console.log(deliveryDetails, 'checkout');

      // setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange1 = (
    text: string,
    index: number,
    property: string,
  ) => {
    const updatedItems = [...mappedItems];
    const updatedItem: any = updatedItems[index];
    if (property === 'quantity') {
      const newQuantity = parseInt(text, 10);
      console.log(newQuantity);
      // if (Number.isNaN(newQuantity)) {
      //   let oneQuantity = 0
      //   console.log("Nan")
      //   updatedItem['quantity'] = oneQuantity.toString(); // Set a default value when the input is not a valid number
      // } else {
      //   const weightOfOneQuantity = updatedItem.weight / parseInt(updatedItem.quantity, 10);
      //   updatedItem.weight = newQuantity * weightOfOneQuantity;
      //   updatedItem[property] = text;

      // }
      const weightOfOneQuantity =
        updatedItem.weight / parseInt(updatedItem.quantity, 10);

      updatedItem.weight = newQuantity * weightOfOneQuantity;
      updatedItem[property] = text;
    } else {
      updatedItem[property] = text;
    }

    console.log(updatedItem);
    // console.log(mappedItems)
    setMappedItems(updatedItems);
  };

  const removeItem = (id: string) => {
    const updatedMappedItems = mappedItems.filter(
      (item: productProps) => item.id !== id,
    );
    setMappedItems(updatedMappedItems);
  };

  const addressResult = useSelector(updateAddressResults);
  const addressOptions: any = useSelector<any>(
    (state: any) => state.address.address,
  );
  // console.log(addressOptions, 'addresssdfl;ksdf');
  // const checkoutDetails: any = useSelector<any>(
  //   (state: any) => state.delieveryDetails.address,
  // );

  useEffect(() => {
    dataResponse();
  }, []);

  const renderItem = ({item, index}: {item: productProps; index: number}) => {
    return (
      <View key={item.id} style={[commonStyles.mTop15]}>
        <Text style={[commonStyles.text16, commonStyles.fontBold]}>
          {item.label}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <ProductsInput
            value={item.input1}
            keyboardType="numeric"
            onChangeText={(text: string) =>
              handleInputChange(text, index, 'quantity')
            }
            placeholder="Quantity"
          />
          <ProductsInput
            value={item.input1}
            onChangeText={(text: string) =>
              handleInputChange(text, index, 'text')
            }
            placeholder="Text"
          />
        </View>
      </View>
    );
  };

  const renderFooter = () => (
    <View>
      <View>
        <Button
          mode="contained"
          onPress={handleAddToCart}
          style={[commonStyles.mTop15]}
          rippleColor={colors.riplePurple}>
          Add to Cart
        </Button>
      </View>
      <View
        style={[
          commonStyles.card,
          commonStyles.elevation,
          commonStyles.mTop15,
          {},
        ]}>
        <View
          style={{
            width: '90%',
            borderBottomColor: 'black',
            borderBottomWidth: 5,
          }}>
          <View
            style={[
              commonStyles.flexRow,
              {justifyContent: 'space-between'},
              commonStyles.rowCenter,
            ]}>
            <Text style={[commonStyles.heading26]}>Cart</Text>
            <Text style={[commonStyles.text16]}>
              {mappedItems.length} Items
            </Text>
          </View>
        </View>
        <Text>Products</Text>
        <View>
          {mappedItems.map((item: productProps, index: number) => {
            return (
              <View key={item.id} style={[commonStyles.mTop15]}>
                <Text style={[commonStyles.text16, commonStyles.fontBold]}>
                  {item.label}
                </Text>
                <Text style={[commonStyles.text16, commonStyles.fontBold]}>
                  Weight(KG) : {item.weight}
                </Text>
                <Text style={[commonStyles.text16, commonStyles.fontBold]}>
                  Category : {item.category || 'none'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <ProductsInput
                    value={item.quantity}
                    onChangeText={(text: string) =>
                      handleInputChange1(text, index, 'quantity')
                    }
                    placeholder="Quantity"
                    keyboardType="numeric"
                  />
                  {/* {item.weight} */}
                  <ProductsInput
                    value={item.text}
                    onChangeText={(text: string) =>
                      handleInputChange1(text, index, 'text')
                    }
                    placeholder="Text"
                  />
                </View>
                <Button
                  onPress={() => removeItem(item.id)}
                  style={[commonStyles.alignSelfEnd]}
                  mode="contained"
                  rippleColor={colors.riplePurple}>
                  Remove
                </Button>
              </View>
            );
          })}
        </View>
        <View>
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
                  <View>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                      Delivery Details
                    </Text>
                  </View>
                </View>
                <View style={{marginBottom: 50}}>
                  <Text
                    style={[
                      commonStyles.text16,
                      commonStyles.fontBold,
                      commonStyles.mb5,
                    ]}>
                    {addressOptions.submitter}
                  </Text>
                  <View>
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      DELIVERY DATE{' '}
                      <Text style={[commonStyles.errorText]}>*</Text>
                    </Text>
                    <DatePickers
                      name="date"
                      mode="date"
                      initialValue={addressOptions?.date || null}
                    />
                  </View>
                  <View style={[commonStyles.mTop15]}>
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      DELIVERY TIME{' '}
                      <Text style={[commonStyles.errorText]}>*</Text>
                    </Text>
                    <DatePickers
                      name="time"
                      mode="time"
                      initialValue={addressOptions.date || ''}
                    />
                  </View>
                  <TextInputGroup
                    inputFields={initialFormData}
                    username={addressOptions.notes}
                  />
                  <SelectPicker
                    label={gearCondition}
                    data={gearConditionData}
                    searchable={false}
                    initialValue={addressOptions.gearCondition}
                  />

                  <View>
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      Delievery Address :
                    </Text>
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      {addressOptions.deliveryAddress ?? ''}
                    </Text>
                  </View>
                  <View>
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      Total Weight :
                    </Text>
                    <Text style={[commonStyles.text16, commonStyles.mb5]}>
                      {mappedItems.reduce(
                        (accumulator, currentValue) =>
                          accumulator + currentValue.weight,
                        0,
                      )}
                    </Text>
                  </View>
                  {mappedItems.length >= 1 && (
                    <ButtonGreen text="Submit" onPress={handleSubmit} />
                   )}
                </View>
              </View>
            )}
          </Formik>
          {/* {loading && (
          <View style={myStyles.activityContainer}>
            <ActivityIndicator
              animating={true}
              size="large"
              color="#c7fe1a"
              style={myStyles.activityIndicator}
            />
          </View>
        )} */}
        </View>
      </View>
    </View>
  );

  const renderContent = () => {
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
    );
  };

  return (
    <View style={[commonStyles.commonContainer]}>
      {loading ? <LoadingSpinner /> : renderContent()}
    </View>
  );
};
