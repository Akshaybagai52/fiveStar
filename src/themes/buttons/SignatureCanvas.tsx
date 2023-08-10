import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import SignatureCanvas, { SignatureViewRef } from 'react-native-signature-canvas';
import { Button } from 'react-native-paper';

export const MySignatureCanvas = ({ onBegin, onEnd }: any) => {
  const [signatureImage, setSignatureImage] = useState<string>('');
  const signatureRef = useRef<SignatureViewRef>(null); // Create a ref for the signature canvas

  const handleClearSignature = () => {
    signatureRef.current?.clearSignature();
  };

  const handleGetSignature =async () => {
    
    if (signatureRef.current) {
      signatureRef.current.readSignature() // Retrieve the signature as base64
     
      
    
    }
  };
  const handleData = (data:any) => {
    if (signatureRef.current) {
    signatureRef.current.getData()
    console.log(data);
  }
  };
  const handleOK = (signature:any) => {
    console.log(signature);
  };
  // useEffect(() => {
  //   console.log(signatureImage);
  // }, [signatureImage]);

  return (
    <View >
      <SignatureCanvas
      androidHardwareAccelerationDisabled={true}
        ref={signatureRef}
        scrollable={false} // Disable scrolling
        // backgroundColor="#000"
        maxWidth={3}
        style={styles.canvas}
        onBegin={onBegin}
      onEnd={onEnd}
      />
      <View style={styles.buttonsContainer}>
        <Button rippleColor="#e0aaff" icon='delete' onPress={handleClearSignature} mode='contained' >Clear</Button>
        {/* <Button icon='content-save' onPress={handleGetSignature} mode='contained' >Save</Button> */}
        {/* <Button icon='content-save' onPress={handleData} mode='contained' >sfds</Button> */}
        {/* <Button icon='undo' onPress={handleClearSignature} mode='contained' >Undo</Button> */}
        {/* <Button icon='redo' onPress={handleClearSignature} mode='contained' >Redo</Button> */}
        {/* <Button onPress={handleGetSignature} >Get Signature Data </Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
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
    width: '90%'
  },
});
