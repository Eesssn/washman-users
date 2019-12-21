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
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: '',
      token: null,
      ID: null,
      avatarSource: null,
    };
  }

  componentDidMount() {
    this.LoadData();
  }

  LoadData = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      const ID = await AsyncStorage.getItem('ID');
      this.setState({
        token,
        ID,
      });
    } catch (e) {
      console.warn(e);
    }
  };

  balance = () => {
    var that = this;
    Axios.post('customer/balance', {
      customer_id: that.state.ID,
      token: that.state.token,
    })
      .then(function(response) {
        if (response.data.is_successful) {
          that.setState({balance: response.data});
        } else {
          alert(response.data.message);
        }
      })
      .catch(function(e) {
        console.warn(e);
      });
  };

  avatar = async () => {
    var that = this;
    var bodyFormData = new FormData();
    bodyFormData.append('avatar', {
      uri: this.state.avatarSource,
      name: 'mamad.jpg',
      type: 'image/jpeg',
    });
    bodyFormData.append('token', that.state.token);
    bodyFormData.append('id', that.state.ID);

    Axios({
      method: 'post',
      url: 'http://alireza-shahsavari.ir/washman/public/api/customer/avatar',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(function(response) {
        if (response.data.is_successful) {
          that.setState({avatarSource: response.data.data});
        } else {
          alert(response.data.message);
        }
        console.log(response);
      })
      .catch(function(e) {
        console.warn(e);
      });
  };

  showImage = () => {
    ImagePicker.openPicker({
      // includeBase64: true,
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.setState({avatarSource: image.path});
      setTimeout(() => {
        this.avatar();
      }, 1000);
    });
  };

  render() {
    return (
      <View styles={{flex: 1, backgroundColor: 'red', position: 'relative'}}>
        <Image
          style={styles.img}
          source={
            this.state.avatarSource
              ? {uri: this.state.avatarSource}
              : require('../../assets/images/plus.png')
          }
        />
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
          }}
          onPress={() => this.showImage()}>
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
                <Text style={styles.txtP}>
                  اعتبار {this.state.balance} تومان
                </Text>
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
        </View>
      </View>
    );
  }
}

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
    borderRadius: 50,
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
