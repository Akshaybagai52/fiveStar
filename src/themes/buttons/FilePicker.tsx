import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  FlatList,
} from 'react-native';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FilePicker: React.FC = () => {
  const [multipleFile, setMultipleFile] = useState<DocumentPickerResponse[]>(
    [],
  );

  // const selectOneFile = async () => {
  //   try {
  //     const res = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //   //   setSingleFile(res);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       Alert.alert('Canceled from single doc picker');
  //     } else {
  //       Alert.alert('Unknown Error: ' + JSON.stringify(err));
  //       throw err;
  //     }
  //   }
  // };

  const selectMultipleFile = async () => {
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
      });
      setMultipleFile(prevFiles => [...prevFiles, ...results]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled from multiple doc picker');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  const removeFile = (index: any) => {
    setMultipleFile(prevFiles => prevFiles.filter((_, i) => i !== index));
  };
  const textTruncate = (text:string | null) => {
    if(text)
    return text.length > 6 ? text.substring(0, 6) + "..." : text;
  }



  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>Upload Your File</Text>
      <View style={styles.container}>
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectOneFile}
        >
          <Text style={{ marginRight: 10, fontSize: 19 }}>
            Click here to pick one file
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity> */}
        {/* <Text style={styles.textStyle}>
          File Name: {singleFile?.name || ''}
          {'\n'}
          Type: {singleFile?.type || ''}
          {'\n'}
          File Size: {singleFile?.size || ''}
          {'\n'}
          URI: {singleFile?.uri || ''}
          {'\n'}
        </Text> */}
        <View style={styles.divider} />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectMultipleFile}>
          <Text style={{marginRight: 10, fontSize: 19}}>
            Click here to upload files
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        <ScrollView>
          <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
            {multipleFile.map((item, index) => (
              <View key={index}>
                {/* <Text style={styles.textStyle}> */}
                {/* File Name: {item.name || ''} */}
                {/* {'\n'} */}
                {/* Type: {item.type || ''}
                {'\n'}
                File Size: {item.size || ''}
                {'\n'} */}
                {/* URI: {item.uri || ''} */}
                {/* {'\n'} */}
                <Image
                  source={{uri: item.uri}}
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 10,
                    objectFit: 'contain',
                  }}
                />
                <Icon name='cancel' color="#ef233c" size={18} style={{position:'absolute',right:0}} onPress={() => removeFile(index)}/>

                {/* </Text> */}
                <Text>{textTruncate(item.name)}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FilePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  divider: {
    backgroundColor: 'grey',
    height: 2,
    margin: 10,
  },
});
