import { StyleSheet, useWindowDimensions } from "react-native";
import { WindowDimension } from "../types/interfaces/types";
// const { height:windowHeight, width:windowWidth }: WindowDimension = useWindowDimensions();


const commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHeading: {
    //   fontSize: windowWidth > 500 ? 30 : 20,
    
      fontWeight: 'bold',
      color: '#fff'
    },
  });
  
  export default commonStyles;