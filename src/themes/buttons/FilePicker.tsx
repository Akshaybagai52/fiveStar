// Importing necessary components and modules from React Native
import React, { useState, useEffect } from 'react';
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

// Define the properties for the FilePicker component
interface FilePickerProps {
  selectedFiles: DocumentPickerResponse[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<DocumentPickerResponse[]>>;
}

// FilePicker component
const FilePicker: React.FC<FilePickerProps> = ({ selectedFiles, setSelectedFiles }) => {
  // State to store selected files
  const [multipleFile, setMultipleFile] = useState<DocumentPickerResponse[]>([]);

  // Function to handle multiple file selection
  const selectMultipleFile = async () => {
    try {
      // Using DocumentPicker to select images
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        allowMultiSelection: true,
      });
      // Adding selected files to the state
      setMultipleFile(prevFiles => [...prevFiles, ...results]);
    } catch (err) {
      // Handling errors during file selection
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('Canceled from multiple doc picker');
      } else {
        Alert.alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  // Function to remove a selected file based on its index
  const removeFile = (index: any) => {
    setMultipleFile(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  // Function to truncate text for display
  const textTruncate = (text: string | null) => {
    if (text) return text.length > 6 ? text.substring(0, 6) + "..." : text;
  };

  // useEffect to update selectedFiles state when multipleFile state changes
  useEffect(() => {
    setSelectedFiles(multipleFile);
  }, [multipleFile]);

  // JSX structure for the FilePicker component
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.titleText}>Upload Your File</Text>
      <View style={styles.container}>
        <View style={styles.divider} />
        {/* Button to trigger file selection */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectMultipleFile}>
          <Text style={{ marginRight: 10, fontSize: 19 }}>
            Click here to upload files
          </Text>
          <Image
            source={{
              uri: 'https://img.icons8.com/offices/40/000000/attach.png',
            }}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
        {/* Display selected files */}
        <ScrollView>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
            {multipleFile.map((item, index) => (
              <View key={index}>
                {/* Display selected file image */}
                <Image
                  source={{ uri: item.uri }}
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 10,
                    objectFit: 'contain',
                  }}
                />
                {/* Button to remove selected file */}
                <Icon name='cancel' color="#ef233c" size={18} style={{ position: 'absolute', right: 0 }} onPress={() => removeFile(index)} />
                {/* Display truncated file name */}
                <Text>{textTruncate(item.name)}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// Export the FilePicker component
export default FilePicker;

// Styles for the component
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
