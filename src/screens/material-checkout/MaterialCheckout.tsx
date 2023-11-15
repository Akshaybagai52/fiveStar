import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingSpinner from '../../components/loader/LoadingSpinner';
import commonStyles from '../../styles/commonStyles';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {updateAddressResults} from '../../redux/mainSlice';
import {Button} from 'react-native-paper';
import ProductsInput from '../../components/screens/material-checkout/ProductsInput';
import {FlatList} from 'react-native';

interface productProps {
  id: string;
  text: string;
  label: string;
  quantity: string;
  value: string;
}
export const MaterialCheckout = () => {
  const [data, setData] = useState<any>();
  const [updatedItems, setUpdatedItems] = useState<productProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [mappedItems, setMappedItems] = useState<productProps[]>([]);

  const dataResponse = async () => {
    try {
      const response = await axios.get(
        'https://fivestaraccess.com.au/FivestarApp/get_categories.php',
      );

      const modifiedData = response.data.records.map((item: any) => ({
        label: item.fields['Material Description'],
        value: item.fields['Material Description'],
        quantity: '',
        text: '',
        id: item.id,
      }));

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
        // If the item already exists in the updatedItems array, replace it
        const updatedItems = [...prevState];
        updatedItems[existingItemIndex] = updatedItem;
        return updatedItems;
      } else {
        // If the item doesn't exist in the updatedItems array, add it
        return [...prevState, updatedItem];
      }
    });

    console.log(updatedItems);
  };
  const handleAddToCart = () => {
    const mappedData = updatedItems.map((item: productProps) => ({
      id: item.id,
      label: item.label,
      quantity: item.quantity,
      text: item.text,
      value: item.value,
    }));
    setMappedItems(mappedData);
  };

  const removeItem = (id: string) => {
    const updatedMappedItems = mappedItems.filter(
      (item: productProps) => item.id !== id,
    );
    setMappedItems(updatedMappedItems);
  };

  const addressResult = useSelector(updateAddressResults);
  const addressOptions = useSelector<any>(
    (state: any) => state.address.address,
  );
  console.log(addressOptions);

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
            onChangeText={(text: string) =>
              handleInputChange(text, index, 'quantity')
            }
            placeholder="Quantity"
          />
          <ProductsInput
            value={item.input2}
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
          style={[commonStyles.mTop15]}>
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
              {updatedItems.length} Items
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <ProductsInput
                    value={item.quantity}
                    onChangeText={(text: string) =>
                      handleInputChange(text, index, 'quantity')
                    }
                    placeholder="Quantity"
                  />
                  <ProductsInput
                    value={item.text}
                    onChangeText={(text: string) =>
                      handleInputChange(text, index, 'text')
                    }
                    placeholder="Text"
                  />
                </View>
                <Button onPress={() => removeItem(item.id)}>Remove</Button>
              </View>
            );
          })}
        </View>
        <View>
          <Text>Address</Text>
          <View>
            <Text>{addressOptions ? addressOptions.date : ''}</Text>
          </View>
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
