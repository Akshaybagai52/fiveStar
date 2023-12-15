import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserInformation = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState<string | null>(null);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedUserEmail = await AsyncStorage.getItem('userEmail');
        const storedUserPhoneNumber = await AsyncStorage.getItem('userPhoneNumber');
        setUsername(storedUsername);
        setUserEmail(storedUserEmail);
        setUserPhoneNumber(storedUserPhoneNumber)
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return {username, userEmail, userPhoneNumber};
};

export default useUserInformation;
