import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {productStyles} from './style';
import {ButtonGreen} from '../../themes/text/ButtonGreen';
import {useSelector} from 'react-redux';
import axios from 'axios';
import commonStyles from '../../styles/commonStyles';
import useUserInformation from '../../hooks/userInformation';
interface ProductProps {
  category: string;
  id: string;
  label: string;
  quantity: string;
  text: string;
  value: string;
  weight: number;
}

interface DeliveryDetailsProps {
  address: string;
  submitter?: string;
  date: string;
  gearCondition: string;
  notes: string;
  products: ProductProps[]; // Assuming you've already defined the 'Product' interface
  time: string;
}
const ProductsShow = () => {
  const deliveryDetails = useSelector(
    (state: any) => state.delieveryDetails.address,
  );

  const {username, userId} = useUserInformation();
  const {
    address,
    date,
    gearCondition,
    notes,
    time,
  }: DeliveryDetailsProps = deliveryDetails;
  console.log(deliveryDetails)
  const handleSubmit = async (values: any) => {
    const data = {
      deliveryDetails,
      submitter: username,
      userId: userId
    }
    try {
      const response = await axios.post(
        'https://fivestaraccess.com.au/fivestaraccess_formapp/material_order_process_app.php',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Post Response:', data);
      // handleGetStartedPress();

      // setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderListFooter = () => (
    <View style={productStyles.delivery_details}>
      <Text style={productStyles.delivery_text}>Delivery Details</Text>
      <Text style={productStyles.delivery_details_text}>
        {username || 'N/A'}
      </Text>
      <Text>
        <Text style={productStyles.delivery_details_text}>Delivery Date :</Text>{' '}
        <Text>{new Date(date).toLocaleDateString() || 'N/A'}</Text>
      </Text>
      <Text>
        <Text style={productStyles.delivery_details_text}>
          {' '}
          Delivery Time :
        </Text>{' '}
        <Text>{new Date(time).toLocaleTimeString() || 'N/A'}</Text>
      </Text>
      <Text>
        <Text style={productStyles.delivery_details_text}>
          Delivery Notes :
        </Text>{' '}
        <Text>{notes || 'N/A'}</Text>
      </Text>
      <Text>
        <Text style={productStyles.delivery_details_text}>
          Gear Condition :
        </Text>
        <Text>{gearCondition || 'N/A'}</Text>
      </Text>
      <Text>
        <Text style={productStyles.delivery_details_text}>
          Total Weight(KG) :
        </Text>{' '}
        <Text>To Do this</Text>
      </Text>
      <Text>
        <Text style={productStyles.delivery_details_text}>
          Delivery Address :
        </Text>{' '}
        <Text>{address || 'N/A'}</Text>
      </Text>
      <View style={productStyles.checkout_button}>
        <ButtonGreen text="Checkout" onPress={handleSubmit} />
      </View>
    </View>
  );
  const renderProducts = ({item}: {item: ProductProps}) => (
    <View
      style={[
        productStyles.product_Category,
        deliveryDetails.products[deliveryDetails.products.length - 1].id !==
        item.id
          ? productStyles.border_bottom
          : null,
      ]}>
      <View style={productStyles.Standard_data}>
        <View>
          <Text style={[productStyles.Standard_Text, commonStyles.mb2]}>
            {item.label}
          </Text>
          <Text style={[productStyles.sub_Standard_Text, commonStyles.mb2]}>
            <Text style={{fontWeight: '600'}}>Category :</Text>{' '}
            {item.category || 'N/A'}
          </Text>
          <Text style={[productStyles.sub_Standard_Text, commonStyles.mb2]}>
            <Text style={{fontWeight: '600'}}>Gear Notes :</Text>{' '}
            {item.text || 'N/A'}{' '}
          </Text>
          <Text style={[productStyles.sub_Standard_Text]}>
            <Text style={{fontWeight: '600'}}>Weight(kg) :</Text>{' '}
            {item.weight || 'N/A'}
          </Text>
        </View>
        <Text>{item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      style={{backgroundColor: '#cde2f8', padding: 15}}
      data={deliveryDetails.products}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <View style={productStyles.main_product_box}>
          <View style={productStyles.checkOut_headingBox}>
            <Text style={[productStyles.heading]}>Checkout</Text>
          </View>

          <ScrollView style={[productStyles.productElevation]}>
            <View style={[productStyles.product_container]}>
              <Text style={[productStyles.product_container_heading]}>
                Products
              </Text>
              <Text style={[productStyles.product_container_heading]}>
                Quantity
              </Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <FlatList
                data={deliveryDetails.products}
                keyExtractor={item => item.id}
                renderItem={renderProducts}
                ListFooterComponentStyle={[productStyles.productElevation]}
              />
            </View>
          </ScrollView>
        </View>
      )}
      ListFooterComponent={renderListFooter}
      ListFooterComponentStyle={[
        productStyles.productElevation,
        commonStyles.mTop15,
        {marginBottom: 50},
      ]}

      // renderItem={renderProducts}
    />
  );
};

export default ProductsShow;
