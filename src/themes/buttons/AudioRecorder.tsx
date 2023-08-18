import React, {useState, useEffect} from 'react';
import {View, Platform} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {Button, ProgressBar, Text} from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs'; // Import RNFS
import {decode} from 'base-64';
import axios from 'axios';
import Voice from '@react-native-voice/voice';

const audioRecorderPlayer = new AudioRecorderPlayer();

const Recorder = () => {
  const [recordTime, setRecordTime] = useState('');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);

  // after
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioData, setAudioData] = useState<ArrayBuffer | null>(null);
  // const [recognizedText, setRecognizedText] = useState('');
  
  // Voice.onSpeechResults = (results:any) => {
  //   setRecognizedText(results[0]);
    
  // };

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    setIsRecording(true);
    // await Voice.start('en-US');
    audioRecorderPlayer.addRecordBackListener(e => {
      // setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    // await Voice.stop();
    setIsRecording(false);

    // setRecordSecs(0);
    // console.log(result);
    if (Platform.OS === 'ios') {
      const response = await RNFetchBlob.fs.readFile(result, 'base64');
      const audioArrayBuffer = base64ToArrayBuffer(response);
      setAudioData(audioArrayBuffer); // Store the audio data
    } else {
      const audioArrayBuffer = await RNFS.readFile(result, 'base64');
      setAudioData(base64ToArrayBuffer(audioArrayBuffer));
      // console.log("Base64 Audio Data:", audioArrayBuffer);
    }
  };
  useEffect(() => {
    if (!audioData) {
      return;
    }
    const uint8Array = new Uint8Array(audioData);
    // @ts-ignore
    const blob = new Blob([uint8Array], {type: 'audio/mpeg'});

    const formData = new FormData();
    formData.append('audioFile', blob);

    axios
      .post(
        'https://api.fivestaraccess.com.au/handover_certificate.php',
        FormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then(res => {
        console.log('status', res);
      })
      .catch(err => {
        console.log('errr', err);
      });
  }, [audioData]);
  function base64ToArrayBuffer(base64: string) {
    const binaryString = decode(base64);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      // setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      // setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
      setIsPlaying(true);
    });
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
    // setIsPlaying(false);
  };

  const onStopPlay = () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setIsPlaying(false);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90%',
        }}>
        <Button
          rippleColor="#e0aaff"
          icon={isRecording ? 'stop' : 'record'}
          onPress={isRecording ? onStopRecord : onStartRecord}
          disabled={isPlaying}
          mode="contained">
          {isRecording ? 'Stop Recording' : 'Start Recording'}
          {/* <IconRecord name={isRecording ? 'controller-stop' : 'controller-record'} /> */}
        </Button>
        <Text>{recordTime}</Text>
      </View>
      {/* <Text>Record Secs: {recordSecs}</Text> */}

      {/* <Text>Current Position Sec: {currentPositionSec}</Text> */}
      {/* <Text>Current Duration Sec: {currentDurationSec}</Text> */}
      {/* <Text>Play Time: {playTime}</Text> */}
      {currentDurationSec > 0 && ( // Conditional rendering of ProgressBar
        <ProgressBar
          progress={currentPositionSec / currentDurationSec}
          color="#112D4E"
          style={{height: 8, borderRadius: 5, marginTop: 10, width: '90%'}}
        />
      )}
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <Button
          rippleColor="#e0aaff"
          icon={'play-circle'}
          onPress={onStartPlay}
          disabled={isRecording}
          // style={{width: '90%'}}
          mode="contained">
          Play
        </Button>
        <Button
          rippleColor="#e0aaff"
          icon={'play-pause'}
          onPress={onPausePlay}
          disabled={isRecording}
          // style={{width: '90%'}}
          mode="contained">
          Pause
        </Button>
        <Button
          rippleColor="#e0aaff"
          icon={'restart'}
          onPress={onStopPlay}
          disabled={isRecording}
          // style={{width: '90%'}}
          mode="contained">
          Restart
        </Button>
      </View>    

      {/* <Text>Recognized Text: {recognizedText}</Text> */}
    </View>
  );
};

export default Recorder;
