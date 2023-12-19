import React, {useRef, useState, useEffect, useImperativeHandle, forwardRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SignatureCanvas, {SignatureViewRef} from 'react-native-signature-canvas';
import {Button} from 'react-native-paper';
import { useFormikContext } from 'formik';

export const MySignatureCanvas = forwardRef(({onBegin, onEnd, signature, setSignature}: any, ref: any) => {
  const [signatureImage, setSignatureImage] = useState<string>('');
  const {values, setFieldValue} = useFormikContext<any>();

  const signatureRef = useRef<SignatureViewRef>(null); // Create a ref for the signature canvas
  // const handleOK = (signature) => {
  //   console.log(signature);
  //   onOK(signature); // Callback from Component props
  // };
  const handleClearSignature = () => {
    signatureRef.current?.clearSignature();
    setSignature(''); 
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
  };
  useImperativeHandle(ref, () => ({
    handleClearSignature,
  }));

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
});

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

// export default React.forwardRef(MySignatureCanvas);