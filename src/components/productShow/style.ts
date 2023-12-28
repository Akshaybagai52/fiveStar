import {StyleSheet} from 'react-native';
import {colors} from '../../colors/colors';
import { Platform } from 'react-native';

export const productStyles = StyleSheet.create({
  main_product_box: {
    padding: 0,
  },
  sub_main_product_box: {
    backgroundColor: '#f7fbff',
  },
  checkOut_headingBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  product_Category: {
    backgroundColor: '#fff',
    padding: 8,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },
  heading: {
    fontSize: 25,
    color: colors.darkBlue,
    fontWeight: '700',
    fontFamily: 'Jost',
  },
  product_Quantity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 365,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  product_text: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
    marginTop: 10,
  },

  Standard_box: {
    marginTop: 20,
    borderBottomWidth: 1,
  },
  Standard_Text: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#444444',
  },
  Standard_data: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sub_Standard_Text: {
    lineHeight: 15,
    fontSize: 15,
  },

  /* // Delivery Details  */
  delivery_details: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
   
    borderRadius: 10,
  },
  delivery_text: {
    fontSize: 20,
    fontWeight: '500',
    // backgroundColor: colors.darkBlue
    borderBottomWidth: 5,
    borderBottomColor:colors.darkBlue,
  },
  delivery_details_text: {
    lineHeight: 25,
    fontWeight: '500',
  },
  checkout_button: {
    marginTop: 10,
    paddingBottom: 40,
  },
  border_bottom: {
    borderBottomWidth:2,
    borderBottomColor: colors.darkBlue,
  },
  productElevation: {
      backgroundColor: '#fff',
      borderRadius: 10,
      // padding: 20,
      margin: 5,
      // Apply shadow styles based on the platform
      ...Platform.select({
        ios: {
          shadowColor: 'rgba(0, 0, 0, 0.35)',
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 1,
          shadowRadius: 15,
        },
        android: {
          elevation: 5,
        },
      }),
  },
  product_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.darkBlue,
    // borderRadius: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  product_container_heading: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});
