import React, {useState} from 'react';
import {View} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {Button, ProgressBar, Text} from 'react-native-paper';
const audioRecorderPlayer = new AudioRecorderPlayer();

const Recorder = () => {
  const [recordSecs, setRecordSecs] = useState(0);
  const [recordTime, setRecordTime] = useState('');
  const [currentPositionSec, setCurrentPositionSec] = useState(0);
  const [currentDurationSec, setCurrentDurationSec] = useState(0);
  const [playTime, setPlayTime] = useState('');
  const [duration, setDuration] = useState('');

  // after
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const onStartRecord = async () => {
    const result = await audioRecorderPlayer.startRecorder();
    setIsRecording(true);
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordSecs(e.currentPosition);
      setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
    });
    console.log(result);
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setIsRecording(false);

    setRecordSecs(0);
    console.log(result);
  };

  const onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      setCurrentPositionSec(e.currentPosition);
      setCurrentDurationSec(e.duration);
      setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
      setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)));
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
        <Button  rippleColor="#e0aaff"
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
          style={{ height: 8, borderRadius: 5, marginTop: 10, width: '90%' }}
        />
      )}
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <Button  rippleColor="#e0aaff"
          icon={'play-circle'}
          onPress={onStartPlay}
          disabled={isRecording}
          // style={{width: '90%'}}
          mode="contained">
          Play
        </Button>
        <Button rippleColor="#e0aaff"
          icon={'play-pause'}
          onPress={onPausePlay }
          disabled={isRecording}
          // style={{width: '90%'}}
          mode="contained">
          Pause
        </Button>
        <Button rippleColor="#e0aaff"
          icon={'restart'}
          onPress={onStopPlay}
          disabled={isRecording}
          // style={{width: '90%'}}
          mode="contained">
          Restart
        </Button>
        
      </View>

      {/* <Text>Duration: {duration}</Text> */}
    </View>
  );
};

export default Recorder;
