import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Support extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#FCFAFA',
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/washman.png')}
            style={styles.img}
          />
          <TouchableOpacity
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}>
            <Text style={styles.txt}>درباره واش من</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}>
            <Text style={styles.txt}>تماس با ما</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.view}>
            <Text style={styles.txt}>گزارش مشکل برنامه</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'IRANSansWeb',
              color: '#858585',
              marginVertical: 30,
            }}>
            با ما در ارتباط باشید
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/whatsapp.png')}
              style={{marginHorizontal: 10, width: 50, height: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/telegram.png')}
              size={50}
              style={{marginHorizontal: 10, width: 50, height: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/instagram.png')}
              style={{marginHorizontal: 10, width: 50, height: 50}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Support.navigationOptions = () => {
  return {
    headerStyle: {
      backgroundColor: '#3498DB',
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      height: 70,
      textAlign: 'center',
    },
    headerTintColor: 'white',
    headerLeft: null,
    title: 'پشتیبانی',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
    headerRight: (
      <Image
        source={require('../../assets/images/call.png')}
        style={{width: 30, height: 30, marginRight: 20}}
      />
    ),
  };
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  img: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  view: {
    width,
    height: 55,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.016,
    shadowRadius: 5,
    elevation: 5,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    marginVertical: 10,
    marginRight: 10,
  },
  icon: {
    bottom: 40,
    left: 10,
    color: '#858585',
  },
});

export default Support;
