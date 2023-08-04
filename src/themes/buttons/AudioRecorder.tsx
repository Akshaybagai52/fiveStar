import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const Recorder = () => {
  const audioRecorderPlayer = new AudioRecorderPlayer();
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioPath, setAudioPath] = useState('')

  const startRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      console.log('Recording started:', result);
      setIsRecording(true);
    } catch (err) {
      console.log('Error starting recording:', err);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      console.log('Recording stopped:', result);
      setIsRecording(false);
    } catch (err) {
      console.log('Error stopping recording:', err);
    }
  };

  const startPlayback = async () => {
    try {
      audioRecorderPlayer.setVolume(1.0); // Set the volume before starting the playback
      console.log('Playback started');
      audioRecorderPlayer.addPlayBackListener((e: any) => {
        if (e.current_position === e.duration) {
          console.log('Playback finished');
          setIsPlaying(false);
          audioRecorderPlayer.stopPlayer();
        }
      });
      const path = await audioRecorderPlayer.startPlayer(); // Pass the audio path here
      console.log('Audio Path:', path);
      setIsPlaying(true);
    } catch (err) {
      console.log('Error starting playback:', err);
    }
  };

  const stopPlayback = async () => {
    try {
      console.log('Playback stopped');
      setIsPlaying(false);
      audioRecorderPlayer.stopPlayer();
    } catch (err) {
      console.log('Error stopping playback:', err);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up the playback listener when the component unmounts
      audioRecorderPlayer.removePlayBackListener();
    };
  }, []);

  return (
    <View>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? stopRecording : startRecording}
      />
      <Button
        title={isPlaying ? 'Stop Playback' : 'Start Playback'}
        onPress={isPlaying ? stopPlayback : startPlayback}
        disabled={isRecording}
      />
    </View>
  );
};

export default Recorder;
