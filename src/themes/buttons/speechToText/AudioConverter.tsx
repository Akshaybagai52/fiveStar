import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import {Button} from 'react-native-paper';
import commonStyles from '../../../styles/commonStyles';
import { Field } from 'formik';

export function AudioConverter({ field, form }: {field:any, form:any}) {
  const [results, setResults] = useState<string>('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    function onSpeechResults(e: SpeechResultsEvent) {
      console.log(e.value ? e.value[0] : '', 'e.value');

      setResults(e.value ? e.value[0] : '');
      form.setFieldValue(field.name, e.value ? e.value[0] : ''); // Update the field value in Formik
    }
    function onSpeechError(e: SpeechErrorEvent) {
      console.error(e);
    }
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    return function cleanup() {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  async function toggleListening() {
    try {
      if (isListening) {
        await Voice.stop();
        setIsListening(false);
      } else {
        setResults('');
        await Voice.start('en-US');
        setIsListening(true);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonStyles: {
      alignSelf: 'flex-start',
      backgroundColor: isListening ? '#dc3545' : '#6750A4',
    },
  });

  function setRecognizedTextManually(text: string) {
    form.setFieldValue(field.name, text); // Update the field value in Formik
  }

  return (
    <View style={[styles.container, commonStyles.mTop15]}>
      <TextInput
        value={field.value} // Use the field value from Formik
        onChangeText={text => setRecognizedTextManually(text)} // Handle manual text input
        style={[commonStyles.textInput, {width: '100%', minHeight:90}, commonStyles.mb15]}
        multiline={true}
        numberOfLines={5}
      />
      <Button
        mode="contained"
        icon={isListening ? 'stop' : 'record'}
        style={styles.buttonStyles}
        onPress={toggleListening}>
        {isListening ? 'Stop Recognizing' : 'Start Recognizing'}
      </Button>
    </View>
  );
}

// Usage in Formik form
// <Field name="audioInput" component={AudioConverter} />
