import {
  View,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Image,
  Dimensions,
} from 'react-native';

import React, {useEffect} from 'react';
interface WindowDimension {
  width: number;
  height: number;
}
import {Button, Text} from 'react-native-paper';
import Checkmark from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles';
import TestimonialCard from '../../components/common/TestimonialCard';
const data = [
  {
    icon: 'dots-triangle',
    heading: 'King Partner',
    description:
      'Five Star Scaffolding exceeded our expectations on several projects across Sydney metro area! We recommend their services without any hesitation...',
  },
  {
    icon: 'dots-hexagon',
    heading: 'GARETH COLLIN',
    title: 'Project Manager',
    description:
      'We have found Five Star Scaffolding very professional and reliable. Their prompt attention to our requirements is very much appreciated. Regards, Steve-Watt Constructions.',
  },
  {
    icon: 'dots-circle',
    heading: 'DANIEL ANTOUN',
    title: 'Project Manager',
    description:
      'I have used the service of Five Star Scaffolding for a few projects now. I am very satisfied with their service and their prices are reasonable. I wouldn’t hesitate recommending them to other builders and developers.',
  },
  {
    icon: 'dots-grid',
    heading: 'JASON HONG',
    title: 'Accounting & Admin Manager',
    description:
      'We are very satisfied with FIVE STAR SCAFFOLDING! the team at FSS is always on time allowing us to confidently keep to our schedule. FIVE STAR SCAFFOLDING has a great team that works in a very well organised manner.',
  },
  {
    icon: 'dots-square',
    heading: 'LOUIE TAKCHI',
    title: 'Project Manager',
    description:
      'It was a pleasure dealing with Five Star Scaffolding for our Carlingford project. From their competitive pricing, creativity in overcoming site constraints, reliability in delivery, erection and dismantling to responding to urgent changes, our building challenge was mad all that much simpler by using Five Star Scaffolding.',
  },
];

import Carousel from 'react-native-reanimated-carousel';
import TeamCard from '../../components/common/TeamCard';
import {fetchAddressOptions} from '../../redux/addressSlice';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useUserInformation from '../../hooks/userInformation';

let imgData = [
  require('../../assets/carousel/build0.jpg'),
  require('../../assets/carousel/build1.jpg'),
  require('../../assets/carousel/build2.jpeg'),
  require('../../assets/carousel/build3.jpg'),
  require('../../assets/carousel/build4.jpg'),
  require('../../assets/carousel/build5.jpeg'),
  require('../../assets/carousel/build6.jpg'),
  require('../../assets/carousel/build7.jpg'),
  require('../../assets/carousel/build8.jpg'),
  require('../../assets/carousel/build9.jpg'),
];
const teamData = [
  {
    img: require('../../assets/home/team-1.jpg'),
    name: 'Gareth Collin',
    occupation: 'Project Manager',
  },
  {
    img: require('../../assets/home/team-2.jpg'),
    name: 'Daniel Antoun',
    occupation: 'Project Manager',
  },
  {
    img: require('../../assets/home/team-3.jpg'),
    name: 'Jason Hong',
    occupation: 'Accounting & Admin Manager',
  },
  {
    img: require('../../assets/home/team-4.jpg'),
    name: 'Louie Takchi',
    occupation: 'Project Manager',
  },
];

const Home = ({navigation}: any) => {
  const {height: windowHeight, width: windowWidth}: WindowDimension =
    useWindowDimensions();
  const width = Dimensions.get('window').width;

  // const contactUs = ({ navigation }:any) => {

  const handleGetContact = () => {
    navigation.navigate('Help Center');
    // }
  };
  const dispatch = useDispatch<any>();
  const addressOptions = useSelector((state: any) => state.addressOptions);
  useEffect(() => {
    dispatch(fetchAddressOptions());
  }, [dispatch]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: Math.floor(windowHeight) - 80,
      backgroundColor: '#37517e',
      alignContent: 'center',
      padding: 40,
    },
    homeImg: {
      height: windowWidth > 500 ? 450 : 250,
      width: windowWidth > 500 ? '65%' : '85%',
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
      justifyContent: 'space-between',
    },
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
              icon="play-circle"
              mode="outlined"
              textColor="white"
              style={styles.buttonStyles}>
              Watch Now
            </Button>
          </View>
        </View>
        <View>
          <View style={[commonStyles.commonContainer]}>
            <Text
              style={[
                windowWidth > 500
                  ? commonStyles.heading42
                  : commonStyles.heading32,
                commonStyles.textDarkBlue,
                commonStyles.textCenter,
              ]}>
              ABOUT US
            </Text>
            <Text style={[commonStyles.text16, commonStyles.mTop15]}>
              In addition to scaffolding, Five Star can provide
            </Text>
            <View style={[commonStyles.rowCenter, commonStyles.mTop15]}>
              <Checkmark
                name="checkmark-done-circle-sharp"
                color="#47b2e4"
                size={27}
              />
              <Text style={[commonStyles.text16, commonStyles.pleft5]}>
                Qualified onsite workforce
              </Text>
            </View>
            <View style={[commonStyles.rowCenter]}>
              <Checkmark
                name="checkmark-done-circle-sharp"
                color="#47b2e4"
                size={27}
              />
              <Text style={[commonStyles.text16, commonStyles.pleft5]}>
                Swinging stages
              </Text>
            </View>
            <View style={[commonStyles.rowCenter]}>
              <Checkmark
                name="checkmark-done-circle-sharp"
                color="#47b2e4"
                size={27}
              />
              <Text style={[commonStyles.text16, commonStyles.pleft5]}>
                Man and Material hoists
              </Text>
            </View>
            <View>
              <Text style={[commonStyles.mTop15, commonStyles.text16]}>
                We believe there is always more than one way to do anything and
                over the years, our willingness to be guided by our clients has
                opened up fresh possibilities and continued innovation. Though
                we consider ourselves to be experts in the provision of
                scaffolding supply and installation, we are keen to allow the
                flow of information to be inward as well as outward. We also
                make a point of staying informed of new developments in
                scaffolding products and installation methods, OH&S legislation,
                safety compliance and other aspects that improve how we do
                business.
              </Text>
              <Button
                mode="elevated"
                style={[styles.buttonStyles, commonStyles.mTop15]}
                textColor="#47b2e4"
                rippleColor="#47b2e4">
                Learn More
              </Button>
            </View>
          </View>
        </View>
        <View style={[commonStyles.commonContainer]}>
          <Text
            style={[
              windowWidth > 500
                ? commonStyles.heading42
                : commonStyles.heading32,
              commonStyles.textDarkBlue,
              commonStyles.textCenter,
              commonStyles.mb15,
            ]}>
            TESTIMONIALS
          </Text>
          <TestimonialCard data={data} />
        </View>
        <View style={[{flex: 1}, commonStyles.commonContainer]}>
          <Text
            style={[
              windowWidth > 500
                ? commonStyles.heading42
                : commonStyles.heading32,
              commonStyles.textDarkBlue,
              commonStyles.textCenter,
              commonStyles.mb15,
            ]}>
            PORTFOLIO
          </Text>
          <Carousel
            loop
            width={width - 40}
            height={width / 1.5}
            autoPlay={false}
            data={[...new Array(10).keys()]}
            scrollAnimationDuration={1000}
            withAnimation={{type: 'timing', config: {}}}
            mode="parallax"
            // vertical={true}
            renderItem={({index}) => (
              <View>
                <Image
                  source={imgData[index]}
                  style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
              </View>
            )}
          />
        </View>
        <View style={commonStyles.commonContainer}>
          <Text
            style={[
              windowWidth > 500
                ? commonStyles.heading42
                : commonStyles.heading32,
              commonStyles.textDarkBlue,
              commonStyles.textCenter,
              commonStyles.mb15,
            ]}>
            Team
          </Text>
          <TeamCard teamData={teamData} />
        </View>
        <View style={commonStyles.commonContainer}>
          <Button mode="contained" onPress={handleGetContact}>
            Contact
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
