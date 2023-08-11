import React, { useRef } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  Alert
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';

const GeneratePdf: React.FC = () => {
  const createPDF = async () => {
    let options = {
      html: '<h1>PDF sfadfasdfsdfsdfsdfsdffsddsfssfTEST</h1>',
      fileName: 'test',
      directory: 'Documents/subdirectory', 
    };

    try {
      let file = await RNHTMLtoPDF.convert(options);
      // console.log(file.filePath);
    //  Alert.alert(file.filePath);
    console.log(file.filePath);
    } catch (error) {
      console.error('Error creating PDF:', error);
    }
  };

  return (
    <View>
      <TouchableHighlight onPress={createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  );
};

export default GeneratePdf;
