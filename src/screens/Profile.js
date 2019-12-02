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

const Profile = () => {
  return (
    <View styles={{flex: 1, backgroundColor: 'red', position: 'relative'}}>
      <Image style={styles.img} source={require('../../assets/images/1.png')} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          borderRadius: 15,
          width: 25,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          top: 90,
          left: 130,
          backgroundColor: 'white',
        }}>
        <Image
          source={require('../../assets/images/plus.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row-reverse',
          width: 300,
          alignItems: 'center',
          bottom: 60,
          left: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'IRANSansWeb',
            color: '#484848',
          }}>
          سارا احمدی
        </Text>
        <Image
          source={require('../../assets/images/bookmark.png')}
          style={{marginRight: 20, width: 20, height: 20}}
        />
      </View>

      <View>
        <View style={{position: 'relative'}}>
          <View
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}>
            <Text style={styles.txt}>افزایش اعتبار کیف پول</Text>
            <TouchableOpacity style={styles.viewP}>
              <Text style={styles.txtP}>اعتبار 0 تومان</Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 15,
                  height: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Image
                  source={require('../../assets/images/plus.png')}
                  style={{width: 20, height: 20}}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.view,
            {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
          ]}>
          <Text style={styles.txt}>سفارش های من</Text>
          <Entypo name="chevron-small-left" size={35} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.view,
            {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
          ]}>
          <Text style={styles.txt}>آدرس های من</Text>
          <Entypo name="chevron-small-left" size={35} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.view,
            {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
          ]}>
          <Text style={styles.txt}>نظرات من</Text>
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
          ]}>
          <Text style={styles.txt}>خیریه</Text>
          <Entypo name="chevron-small-left" size={35} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.view,
            {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
          ]}>
          <Text style={styles.txtLuck}>قرعه کشی</Text>
          <Entypo name="chevron-small-left" size={35} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Profile.navigationOptions = ({navigation}) => {
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
    title: 'پروفایل کاربری',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <Image
          source={require('../../assets/images/setting.png')}
          style={styles.iconHeader}
        />
      </TouchableOpacity>
    ),
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
  viewP: {
    position: 'absolute',
    top: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginLeft: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  txtp: {
    fontSize: 10,
    fontFamily: 'IRANSansWeb',
    color: '#323232',
  },
  img: {
    width: 110,
    height: 110,
    borderRadius: 40,
    marginLeft: 50,
    marginTop: 10,
  },
  iconHeader: {
    marginRight: 20,
    width: 25,
    height: 25,
  },
  txtLuck: {
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
    color: '#FED03F',
    marginVertical: 12,
    marginRight: 10,
  },
});

export default Profile;
