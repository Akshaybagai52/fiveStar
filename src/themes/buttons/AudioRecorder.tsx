import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Voice, {
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import { Button } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {updateResults} from '../../redux/mainSlice';

export default function SpeechRecognitionScreen() {
  const dispatch = useDispatch();
  const [results, setResults] = useState<string>('');
  const [isListening, setIsListening] = useState(false);
  useEffect(() => {
    function onSpeechResults(e: SpeechResultsEvent) {
      console.log(e.value ? e.value[0] : '', 'e.value');

      setResults(e.value ? e.value[0] : '');
      dispatch(updateResults(e.value?.length ? e.value[0] : ''));
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
  
      // backgroundColor: '#F5FCFF',
    },
    buttonStyles: {
      alignSelf: 'flex-start',
      backgroundColor: isListening ? '#dc3545': '#6750A4'
    }
  });


  return (
    <View style={styles.container}>
      
      <Button mode='contained' icon={isListening ? 'stop' : 'record'} style={styles.buttonStyles} onPress={toggleListening}>{isListening ? 'Stop Recognizing' : 'Start Recognizing'}</Button>
      
    </View>
  );
}


