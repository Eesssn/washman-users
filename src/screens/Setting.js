import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-community/async-storage';

class Setting extends React.Component {
  constructor() {
    super();
  }
  logOut = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('GetStarted');
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FCFAFA', alignItems: 'center'}}>
        <View style={{paddingTop: 30}}>
          <TouchableOpacity
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}>
            <Text style={styles.txt}>تغییر گذرواژه</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}>
            <Text style={styles.txt}>سوالات متداول</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}>
            <Text style={styles.txt}>تماس با واش من</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
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
            <Text style={styles.txt}>معرفی به دوستان</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}
            onPress={() => this.logOut()}>
            <Text style={styles.txtExit}>خروج از برنامه</Text>
            <Entypo name="chevron-small-left" size={35} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/washman.png')}
          style={{width: 170, height: 170}}
        />
      </View>
    );
  }
}

Setting.navigationOptions = () => {
  return {
    tabBarIcon: ({tintColor}) => (
      <FontAwesome name="instagram" style={{color: tintColor}} size={28} />
    ),
    headerStyle: {
      backgroundColor: '#3498DB',
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      height: 70,
      textAlign: 'center',
    },
    headerTintColor: 'white',
    headerLeft: null,
    title: 'تنظیمات',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
  };
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  view: {
    width,
    height: 55,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    marginVertical: 12,
    marginRight: 10,
  },
  icon: {
    bottom: 43,
    left: 10,
    color: '#858585',
  },
  txtExit: {
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
    color: '#ED1111',
    marginVertical: 12,
    marginRight: 10,
  },
});

export default Setting;
