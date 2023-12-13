import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserInformation = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedUserEmail = await AsyncStorage.getItem('userEmail');
        setUsername(storedUsername);
        setUserEmail(storedUserEmail);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return {username, userEmail};
};

export default useUserInformation;
