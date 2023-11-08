import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingSpinner from '../../components/loader/LoadingSpinner';
import commonStyles from '../../styles/commonStyles';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {updateAddressResults} from '../../redux/mainSlice';
import {TextInput} from 'react-native';

export const MaterialCheckout = () => {
  const [productsData, setProductsData] = useState<any>('');
  // const { loading, setLoading } = ();
  const [loading, setLoading] = useState<boolean>();
  const dataResponse = async () => {
    try {
      const response = await axios.get(
        'https://fivestaraccess.com.au/FivestarApp/get_categories.php',
      );
      const modifiedData = response.data.records.map((item: any) => ({
        label: item.fields['Project Address'],
        value: item.fields['Project Address'],
      }));
      return modifiedData; // Return the modified data to the caller
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error for the calling code to handle
    }
  };
  const addressResult = useSelector(updateAddressResults);
  const addressOptions = useSelector<any>((state: any) => state.address.address);
  // console.log(addressOptions);
  // console.log(addressResult)
  // console.log(addressResult)

  // dataResponse()
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(error => {
  //       console.log(error)
  //   });

  useEffect(() => {
    setLoading(false);
    // Perform some asynchronous operation
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000); // Simulate loading for 2 seconds
  }, []);

  const renderContent = () => {
    // Your 200 lines of HTML content
    return (
      <SafeAreaView>
        <View>
          <TextInput style={[commonStyles.textInput]} 
          value={addressOptions?.date} />
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={[commonStyles.commonContainer]}>
      {loading ? <LoadingSpinner /> : renderContent()}
    </View>
  );
};
