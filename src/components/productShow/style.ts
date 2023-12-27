import { StyleSheet } from "react-native";
import { colors } from "../../colors/colors";

export  const productStyles = StyleSheet.create({
    main_product_box: {
      padding: 10,
    },
    sub_main_product_box: {
      backgroundColor: '#f7fbff',
      borderTopWidth: 1,
      borderColor: '#2c2c2d',
      padding: 15,
    },
    checkOut_headingBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
    },
    heading: {
      fontSize: 30,
      color: colors.darkBlue,
      fontWeight: '600',
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
      fontSize: 15,
      color: '#444444',
    },
    Standard_data: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    sub_Standard_Text: {
      lineHeight: 30,
    },
  
    /* // Delivery Details  */
    delivery_details: {
      marginTop: 15,
      paddingLeft: 15,
    },
    delivery_text: {
      fontSize: 20,
      fontWeight: '500',
    },
    delivery_details_text:{
      lineHeight:25,
      fontWeight: '500',
    },
    checkout_button:{
      marginTop:10,
      paddingBottom: 40,
    }
  });