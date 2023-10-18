import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SignatureCanvas, { SignatureViewRef } from 'react-native-signature-canvas';
import { Button } from 'react-native-paper';

export const CanvasSignature = ({ field, form, onEnd, onBegin, setSignature }: any) => {
//   const [signature, setSignature] = useState<string>('');
  const signatureRef = useRef<SignatureViewRef>(null);

  const handleClearSignature = () => {
    signatureRef.current?.clearSignature();
    setSignature('');
    form.setFieldValue(field.name, ''); // Update the Formik field value
  };

  const handleGetSignature = async () => {
    const signatureData = await signatureRef.current?.readSignature();
    if (signatureData) {
      setSignature(signatureData);
      form.setFieldValue(field.name, signatureData); // Update the Formik field value
    }
  };

//   useEffect(() => {
//     // Set initial signature value if it exists
//     if (field.value) {
//       setSignature(field.value);
//       signatureRef.current?.setSignature(field.value);
//     }
//   }, [field.value]);

  return (
    <View>
      <SignatureCanvas
        androidHardwareAccelerationDisabled={true}
        ref={signatureRef}
        onOK={() => {}}
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
