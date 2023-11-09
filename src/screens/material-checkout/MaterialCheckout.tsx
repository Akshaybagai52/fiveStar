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
  const [data, setData] = useState<any>(); // const { loading, setLoading } = ();
  const [updatedItems, setUpdatedItems] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
      updatedItems.find(item => item.id === data[index].id) || data[index];
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

  // const addressResult = useSelector(updateAddressResults);
  // const addressOptions = useSelector<any>(
  //   (state: any) => state.address.address,
  // );

  useEffect(() => {
    dataResponse();
  }, []);

  const renderItem = ({item, index}: {item: any; index: number}) => {
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
          onPress={() => console.log(updatedItems)}
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
          {updatedItems.map((item: any, index: number) => {
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
          })}
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
