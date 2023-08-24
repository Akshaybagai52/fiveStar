import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';
interface WindowDimension {
  width: number;
  height: number;
}
import commonStyles from '../../styles/CommonStyles';
import {Button} from 'react-native-paper';

const Home = () => {
  const {height: windowHeight, width: windowWidth}: WindowDimension =
    useWindowDimensions();

  // console.log(Math.floor(windowHeight))
  // console.log(windowWidth)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: Math.floor(windowHeight) - 80,
      //   width: Math.floor(windowWidth),
      backgroundColor: '#37517e',
      alignContent: 'center',
      padding: 40,
    },
    homeImg: {
      height: windowWidth > 500 ? 450 : 250,
      width: windowWidth > 500 ? '65%' : '85%',
      // objectFit: 'contain',
      alignSelf: 'center',
      marginTop: 60,
    },
    textHeading: {
      fontSize: windowWidth > 500 ? 36 : 25,
      color: '#fff',
      textAlign: 'center',
      lineHeight: 28,
      marginTop: 30,
    },
    textDescription: {
      fontSize: windowWidth > 500 ? 24 : 18,
      color: 'rgba(255, 255, 255, 0.6)',
      textAlign: 'center',
      lineHeight: 28,
      marginTop: 20,
    },
    buttonStyles: {
      alignSelf: 'flex-start',
    },
    buttonContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
  });
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/home/building.jpg')}
            style={styles.homeImg}
          />
          <Text style={[styles.textHeading]}>
            Five Star Scaffolding is the most trusted construction company
          </Text>
          <Text style={[styles.textDescription]}>
            Engineering the most appropriate, cost-effective and efficient
            system for each individual project.
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              buttonColor="#47b2e4"
              style={styles.buttonStyles}>
              Get Started
            </Button>
            <Button
            icon='play-circle'
              mode="outlined"
              textColor='white'              
              style={styles.buttonStyles}>
              Watch Now
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
