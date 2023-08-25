import { StyleSheet, useWindowDimensions } from "react-native";
import { WindowDimension } from "../types/interfaces/types";
// const { height:windowHeight, width:windowWidth }: WindowDimension = useWindowDimensions();


const commonStyles = StyleSheet.create({
    commonContainer: {
      padding: 25,
      flex: 1,
    },
    // heading styles ***************************
    heading32: {
      fontSize : 32,
      fontWeight: 'bold',
    },
    heading42: {
      fontSize : 42,
      fontWeight: 'bold',
    },
    heading26: {
      fontSize: 26,
      fontWeight: 'bold'
    },
    // color styles ***************************
    textDarkBlue: {
      color: '#37517e',
    },
    textCenter: {
      textAlign:'center'
    },
    alignSelfCenter: {
      alignSelf: 'center'
    },
    fontBold: {
      fontWeight: 'bold'
    },
    // text size *********************************
    text24: {
      fontSize : 24,
    },
    text16: {
      fontSize: 16
    },
    text20: {
      fontSize: 20
    },
    
    rowCenter: {
      flexDirection:"row",
      alignItems :"center"
    },
    // spacing styles *******************************
    pleft5: {
      paddingLeft: 5
    },
    mb15: {
      marginBottom: 15
    },
    mt5: {
      marginTop: 5
    },
    mTop15: {
      marginTop: 15,
    },
    mL25: {
      marginLeft:25
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 45,
      paddingHorizontal: 25,
      width: '100%',
      marginVertical: 10,
    },
    shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    elevation: {
      elevation: 5,
      shadowColor: '#47b2e4',
    },
    flexRow: {
      flexDirection: 'row'
    }
  });
  
  export default commonStyles;