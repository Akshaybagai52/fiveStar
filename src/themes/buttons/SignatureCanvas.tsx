import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SignatureCanvas, {SignatureViewRef} from 'react-native-signature-canvas';
import {Button} from 'react-native-paper';

export const MySignatureCanvas = ({onBegin, onEnd, signature, setSignature}: any) => {
  const [signatureImage, setSignatureImage] = useState<string>('');
  const signatureRef = useRef<SignatureViewRef>(null); // Create a ref for the signature canvas
  // const handleOK = (signature) => {
  //   console.log(signature);
  //   onOK(signature); // Callback from Component props
  // };
  const handleClearSignature = () => {
    signatureRef.current?.clearSignature();
  };

  const handleGetSignature = async () => {

      signatureRef.current?.readSignature()
      
  };
  const handleData = (data: any) => {
    if (signatureRef.current) {
      signatureRef.current.getData();
      console.log(data);
    }
  };
  const handleOK = (signature: any) => {
    setSignature(signature)
    // console.log(signature);
  };

  return (
    <View>
      <SignatureCanvas
        androidHardwareAccelerationDisabled={true}
        ref={signatureRef}
        onOK={handleOK}
        maxWidth={3}
        style={styles.canvas}
        onBegin={onBegin}
        onEnd={onEnd}
      />
      <View style={styles.buttonsContainer}>
        <Button
          rippleColor="#e0aaff"
          icon="delete"
          onPress={handleClearSignature}
          mode="contained">
          Clear
        </Button>
        <Button
          rippleColor="#e0aaff"
          icon="content-save"
          onPress={handleGetSignature}
          mode="contained">
          Save Signature
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  canvas: {
    borderWidth: 1,
    borderColor: '#000000',
    width: '90%',
    height: 200, // Increase the height for more drawing space
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
    width: '90%',
  },
})
