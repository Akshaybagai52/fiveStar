import React from 'react';
import {View, Text, Button, ScrollView, FlatList} from 'react-native';
import {productStyles} from './style';
import {ButtonGreen} from '../../themes/text/ButtonGreen';
import {useSelector} from 'react-redux';
import axios from 'axios';
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
  submitter: string;
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
  const {
    address,
    date,
    gearCondition,
    notes,
    time,
    submitter,
  }: DeliveryDetailsProps = deliveryDetails;

  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post(
        'https://fivestaraccess.com.au/custom_form/material_order_process_app.php',
        deliveryDetails,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Post Response:', response);
      // handleGetStartedPress();

      // setCustomAlertVisible(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderListFooter = () => (
    <View style={productStyles.delivery_details}>
      <Text style={productStyles.delivery_text}>Delivery Details</Text>
      <Text style={productStyles.delivery_details_text}>{submitter}</Text>
      <Text style={productStyles.delivery_details_text}>
        Delivery Date :<Text>{date ?? 'N/A'}</Text>
      </Text>
      <Text style={productStyles.delivery_details_text}>
        Delivery Time : <Text>{time ?? 'N/A'}</Text>
      </Text>
      <Text style={productStyles.delivery_details_text}>
        Delivery Notes : <Text>{notes ?? 'N/A'}</Text>
      </Text>
      <Text style={productStyles.delivery_details_text}>
        Gear Condition : <Text>{gearCondition ?? 'N/A'}</Text>
      </Text>
      <Text style={productStyles.delivery_details_text}>
        Total Weight(KG) : <Text>To Do this</Text>
      </Text>
      <Text style={productStyles.delivery_details_text}>
        Delivery Address :<Text>{address ?? 'N/A'}</Text>
      </Text>
      <View style={productStyles.checkout_button}>
        <ButtonGreen text="Checkout" onPress={handleSubmit} />
      </View>
    </View>
  );
  const renderProducts = ({item}: {item: ProductProps}) => (
    <View style={{marginBottom: 10}}>
      <View style={productStyles.Standard_data}>
        <View>
          <Text style={productStyles.Standard_Text}>{item.label}</Text>
          <Text style={productStyles.sub_Standard_Text}>
            Category: {item.category || 'N/A'}
          </Text>
          <Text style={productStyles.sub_Standard_Text}>
            Gear Notes: {item.text || 'N/A'}{' '}
          </Text>
          <Text style={productStyles.sub_Standard_Text}>
            Weight(kg): {item.weight || 'N/A'}
          </Text>
        </View>
        <Text>{item.quantity || 'N/A'}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={deliveryDetails.products}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => (
        <View style={productStyles.main_product_box}>
          <View style={productStyles.checkOut_headingBox}>
            <Text style={[productStyles.heading]}>Checkout</Text>
          </View>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
              Products
            </Text>
          </View>
          <ScrollView>
            <FlatList
              data={deliveryDetails.products}
              keyExtractor={item => item.id}
              renderItem={renderProducts}
              ListFooterComponent={renderListFooter}
            />
          </ScrollView>
        </View>
      )}
      // renderItem={renderProducts}
    />
  );
};

export default ProductsShow;
