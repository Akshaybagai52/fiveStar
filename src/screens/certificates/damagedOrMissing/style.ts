import { StyleSheet } from 'react-native';
import { View, Dimensions } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

export const myStyles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#14274E"        
    },
    activityContainer: {
        position:'absolute',
        left:'40%',
        // transform: [{ translateX: -ScreenWidth * 0.5 }],
        bottom: "7%"
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 70
     },
     activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
     }
    

});