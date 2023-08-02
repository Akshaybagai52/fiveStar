import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
} from 'react-native-audio-recorder-player';

const AudioRecorderScreen: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFilePath, setAudioFilePath] = useState('');
  const audioRecorderPlayer = new AudioRecorderPlayer();

  useEffect(() => {
    // Setup the audio recorder player
    audioRecorderPlayer.setSubscriptionDuration(0.09);
  }, []);

  const handleRecord = async () => {
    if (!isRecording) {
      const path = await audioRecorderPlayer.startRecorder();
      setIsRecording(true);
      setAudioFilePath(path);
    } else {
      const result = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      console.log('Recorded audio file:', result);
    }
  };

  const handlePlay = async () => {
    const path = audioFilePath || ''; // Use the recorded audio file path
    if (path) {
      await audioRecorderPlayer.startPlayer(path);
      audioRecorderPlayer.addPlayBackListener((e: any) => {
        if (e.current_position === e.duration) {
          console.log('finished');
          audioRecorderPlayer.stopPlayer();
        }
        console.log('Playing', e);
      });
    } else {
      console.log('No audio file to play.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title={isRecording ? 'Stop Recording' : 'Start Recording'} onPress={handleRecord} />
      <Button title="Play Recorded Audio" onPress={handlePlay} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default AudioRecorderScreen;
