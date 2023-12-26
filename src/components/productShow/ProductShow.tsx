import React from 'react';
import {View, Text, Button} from 'react-native';
import { productStyles} from './style';

const ProductsShow = () => {
  return (
    <View style={productStyles.main_product_box}>
      <View style={productStyles.checkOut_headingBox}>
        <Text style={productStyles.heading}>Checkout</Text>
      </View>
      <View style={productStyles.sub_main_product_box}>
        <View>
          <View style={productStyles.product_Quantity}>
            <Text style={productStyles.product_text}>Product</Text>
            <Text style={productStyles.product_text}>Quantity</Text>
          </View>
          <View style={productStyles.Standard_box}>
            <View style={productStyles.Standard_data}>
              <View>
                <Text style={productStyles.Standard_Text}>Standard 3.5m</Text>
                <Text style={productStyles.sub_Standard_Text}>
                  Category: Standard & Brace
                </Text>
                <Text style={productStyles.sub_Standard_Text}>Gear Notes:</Text>
                <Text style={productStyles.sub_Standard_Text}>Weight(kg): 41</Text>
              </View>
              <Text>1</Text>
            </View>
            <View style={productStyles.Standard_data}>
              <View>
                <Text style={productStyles.Standard_Text}>
                  Not in List 4-write in Gear Notes 3.5m
                </Text>
                <Text style={productStyles.sub_Standard_Text}>
                  Category: Standard & Brace
                </Text>
                <Text style={productStyles.sub_Standard_Text}>Gear Notes:</Text>
                <Text style={productStyles.sub_Standard_Text}>Weight(kg): 41</Text>
              </View>
              <Text>1</Text>
            </View>
          </View>
        </View>
      </View>

      {/* // Delivery Details  */}

      <View style={productStyles.delivery_details}>
        <Text style={productStyles.delivery_text}>Delivery Details</Text>
        <Text style={productStyles.delivery_details_text}>Manisha Kumari</Text>
        <Text style={productStyles.delivery_details_text} >Delivery Date :<Text> 2023-12-31</Text></Text>
        <Text style={productStyles.delivery_details_text}>Delivery Time : <Text>07:00 AM</Text></Text>
        <Text style={productStyles.delivery_details_text}>Delivery Notes : <Text>fdf</Text></Text>
        <Text style={productStyles.delivery_details_text}>Gear Condition : <Text>Fresh</Text></Text>
        <Text style={productStyles.delivery_details_text}>Total Weight(KG) : <Text>41.00</Text></Text>
        <Text style={productStyles.delivery_details_text}>
          Delivery Address :<Text> ** 171 Avenue Rd Mosman new building - FSS4146</Text>
        </Text>
        <View style={productStyles.checkout_button}>
          <Button
            title="Checkout"
            color="#60cf1d"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
  );
};

export default ProductsShow;


