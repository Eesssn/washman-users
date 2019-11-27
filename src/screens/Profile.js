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
import AntDesign from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View styles={{flex: 1, backgroundColor: 'red', position: 'relative'}}>
      <Image style={styles.img} source={require('../../assets/images/1.png')} />
      <TouchableOpacity
        style={{
          position: 'absolute',
          borderWidth: 2,
          borderRadius: 15,
          borderColor: '#707070',
          width: 25,
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          top: 90,
          left: 130,
          backgroundColor: 'white',
        }}>
        <Entypo name="plus" size={20} style={{textAlign: 'center'}} />
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row-reverse',
          width: 300,
          alignItems: 'center',
          bottom: 50,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'IRANSansWeb',
            color: '#484848',
            textAlign: 'center',
          }}>
          سارا احمدی
        </Text>
        <Entypo name="bookmark" size={20} style={{marginRight: 20}} />
      </View>

      <View>
        <View style={{position: 'relative'}}>
          <View
            style={[
              styles.view,
              {borderBottomWidth: 1, borderBottomColor: '#C3C3C3'},
            ]}>
            <Text style={styles.txt}>افزایش اعتبار کیف پول</Text>
            <View style={styles.viewP}>
              <Text style={styles.txtP}>اعتبار 0 تومان</Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#707070',
                  width: 15,
                  height: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Entypo name="plus" size={10} />
              </TouchableOpacity>
            </View>
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
    title: 'پروفایل کاربری',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'FDK_aban{@fontbartar}',
    },
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
        <AntDesign name="setting" size={25} style={styles.iconHeader} />
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
    marginLeft: 40,
    marginTop: 10,
  },
  iconHeader: {
    color: 'white',
    marginRight: 20,
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
