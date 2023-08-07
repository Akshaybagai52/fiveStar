import React, { useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import SignatureCanvas, { SignatureViewRef } from 'react-native-signature-canvas';

export const MySignatureCanvas: React.FC = () => {
  const signatureRef = useRef<SignatureViewRef>(null); // Create a ref for the signature canvas

  const handleClearSignature = () => {
    signatureRef.current?.clearSignature();
  };

  const handleGetSignature = () => {
    const signatureData = signatureRef.current?.getData();
    console.log(signatureData);
  };

  return (
    <View >
      <SignatureCanvas
      androidHardwareAccelerationDisabled={true}
        ref={signatureRef}
        scrollable={false} // Disable scrolling
        // backgroundColor="#000"
        maxWidth={3}
        style={styles.canvas}
      />
      <View style={styles.buttonsContainer}>
        <Button title="Clear Signature" onPress={handleClearSignature} />
        <Button title="Get Signature Data" onPress={handleGetSignature} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    borderWidth: 1,
    borderColor: '#000000',
    width: '90%',
    height: 300, // Increase the height for more drawing space
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
