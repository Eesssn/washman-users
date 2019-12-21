import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

class GteStarted extends React.Component {
  static navigationOptions = {header: null};

  constructor() {
    super();
    this.state = {
      showRealApp: false,
      tell: null,
      password: null,
      loading: true,
    };
  }

  _renderItem = item => {
    return (
      <View style={styles.slide}>
        <Image source={item.item.image} style={styles.images} />
        <Text style={styles.title}>{item.item.title}</Text>
        <Text style={styles.text}>{item.item.text}</Text>
      </View>
    );
  };

  _onDone = () => {
    this.setState({
      showRealApp: true,
    });
  };

  login = () => {
    console.log('1');
    var that = this;
    this.setState({loading: false});
    // if (this.state.tell.length < 11) {
    //   alert('شماره تلفن صحیح نیست');
    // } else {
    Axios.post('customer/login', {
      phone: that.state.tell,
      password: that.state.password,
    })
      .then(function(response) {
        console.log('2');
        if (response.data.is_successful) {
          that.storeData(response.data.data);
          that.setState({loading: true});
          // console.log(response.data.data);
          console.log('in log');
        } else {
          alert(response.data.message);
          that.setState({loading: true});
          console.log('3');
        }
      })
      .catch(function(error) {
        console.error(error);
      });
    // }
  };

  storeData = async info => {
    var that = this;
    try {
      await AsyncStorage.setItem('Token', info.remember_token);
      await AsyncStorage.setItem('ID', info.id.toString());
      that.props.navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
  };

  getData = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      // console.log(token);
      setTimeout(() => {
        if (token !== null) {
          this.props.navigation.navigate('Home');
        } else if (token == null) {
          this.props.navigation.navigate('GetStarted');
        }
      }, 100);
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return this.state.showRealApp ? (
      <KeyboardAvoidingView behavior="padding" enabled={true}>
        <View style={{alignItems: 'center', marginTop: 70}}>
          <Image
            style={styles.img}
            source={require('../../assets/images/washman.png')}
          />
          <View style={{alignItems: 'center', marginTop: 20}}>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.textinput}
                value={this.state.tell}
                onChangeText={tell => this.setState({tell: tell})}
                placeholder={'شماره موبایل'}
                placeholderTextColor="#858585"
                keyboardType="numeric"
                maxLength={12}
              />
              <Image
                source={require('../../assets/images/user.png')}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 10,
                  width: 25,
                  height: 25,
                }}
              />
            </View>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.textinput}
                value={this.state.password}
                onChangeText={pass => this.setState({password: pass})}
                placeholder={'رمز عبور'}
                secureTextEntry={true}
                placeholderTextColor="#858585"
              />
              <Image
                source={require('../../assets/images/locked.png')}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 10,
                  width: 25,
                  height: 25,
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{alignSelf: 'flex-start', paddingTop: 5, paddingLeft: 45}}
            onPress={() => this.props.navigation.navigate('ForgotPass')}>
            <Text
              style={{
                color: '#3498DB',
                fontSize: 12,
                fontFamily: 'IRANSansWeb',
              }}>
              فراموشی رمز
            </Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center', paddingTop: 50}}>
            {this.state.loading ? (
              <TouchableOpacity style={styles.btn} onPress={() => this.login()}>
                <Text style={styles.textBtn}>وارد شوید</Text>
              </TouchableOpacity>
            ) : (
              <ActivityIndicator size="small" color="#3498DB" />
            )}
            <TouchableOpacity
              style={{paddingTop: 15, fontFamily: 'IRANSansFaNum_Light'}}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{fontSize: 16, color: '#272727'}}>ثبت نام کنید</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    ) : (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
        nextLabel={'بعدی'}
        buttonTextStyle={{
          fontSize: 22,
          color: 'gray',
          fontFamily: 'IRANSansWeb',
        }}
        activeDotStyle={{backgroundColor: 'rgba(52, 152, 219, .9)'}}
        doneLabel={'شروع'}
      />
    );
  }
}

const slides = [
  {
    key: 'somethun',
    title: 'درخشان',
    text:
      'واش من برای درخشان شدن ماشین شماست با استفاده از بروزترین متود و فناوری فقط کافیست یکبار امتحان کنید :)',
    image: require('../../assets/images/S1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'دوستانه',
    text:
      'تمام خدمات حضوری و درمحل شما انجام می شود مجرب ترین کارکنان بصورت کاملا دوستانه بهترین خدمات را به شما عرضه میدهند.',
    image: require('../../assets/images/S2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'سریع',
    text:
      'با استفاده از بروز ترین تکنولوژی روز دنیا  و کارکنانی حرفه ای تمام خدمات در کوتاه ترین زمان و در بهترین کیفیت به شما ارائه خواهد شد',
    image: require('../../assets/images/S3.png'),
    backgroundColor: '#22bcb5',
  },
];

const styles = StyleSheet.create({
  slide: {
    width: width,
    height: height,
    alignItems: 'center',
    paddingTop: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#707070',
    paddingTop: 30,
    fontFamily: 'IRANSansWeb',
  },
  text: {
    fontSize: 16,
    color: '#707070',
    paddingTop: 50,
    paddingHorizontal: 30,
    textAlign: 'center',
    fontFamily: 'IRANSansWeb',
  },
  images: {
    width: 180,
    height: 180,
    borderRadius: 40,
  },
  textinput: {
    borderRadius: 25,
    borderColor: '#C3C3C3',
    borderWidth: 1,
    fontSize: 16,
    paddingRight: 50,
    paddingLeft: 20,
    width: 350,
    marginTop: 20,
    fontFamily: 'IRANSansWeb',
    textAlign: 'right',
  },
  btn: {
    backgroundColor: '#3498DB',
    borderRadius: 25,
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 300,
  },
  activity: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GteStarted;
