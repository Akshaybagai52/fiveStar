import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

interface Alert {
  title: string;
  visible: boolean;
  message: string;
  onClose: (text: any) => void;
}

const CustomAlert = ({visible, title, message, onClose}: Alert) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.container}>
        <View style={styles.alertBox}>
          <Image
            source={require('../../assets/alert/thank-you.png')}
            style={{width: 200, height: 120,alignSelf: 'center', objectFit: 'scale-down'}}
          />

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default CustomAlert;
