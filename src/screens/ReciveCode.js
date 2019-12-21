import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Axios from 'axios';

class ReciveCode extends React.Component {
  counter = null;
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#3498DB',
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      height: 70,
      textAlign: 'center',
    },
    headerTintColor: 'white',
    headerLeft: null,
    title: 'کد فعالسازی',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansFaNum_Light',
    },
  };

  // Edited = () => {
  //   const {navigation} = this.props;
  //   var lol = JSON.stringify(navigation.getParam('tel', 'pass'));
  //   console.log(lol);
  //   this.props.navigation.navigate('SignUp');
  // };

  resiveCode = () => {
    var that = this;
    const tell = that.props.navigation.getParam('tell');
    const password = that.props.navigation.getParam('password');

    Axios.post('customer/verify', {
      verify_code:
        that.state.first.toString() +
        that.state.secound.toString() +
        that.state.third.toString() +
        that.state.fourth.toString() +
        that.state.fifth.toString(),
      phone: tell,
      // password: password,
    })
      .then(function(response) {
        if (response.data.is_successful) {
          that.props.navigation.navigate('ConfrimCode', {
            tell: tell,
            password: password,
            verify_code:
              that.state.first.toString() +
              that.state.secound.toString() +
              that.state.third.toString() +
              that.state.fourth.toString() +
              that.state.fifth.toString(),
          });
        } else {
          alert(response.data.message);
        }
      })
      .catch(function(e) {
        console.warn(e);
      });
  };

  resiveAgain = () => {
    console.log('1');
    var that = this;
    const tell = that.props.navigation.getParam('tell');
    Axios.post('customer/register/step_1', {
      phone: tell,
    })
      .then(function(response) {
        console.log('2');
        if (response.data.is_successful) {
          console.log('3');
          that.setState({counter: 1, again: true});
          that.timeShow();
          // this.setState({again: false});
        } else {
          alert(response.data.message);
        }
      })
      .catch(function(e) {
        console.warn(e);
      });
  };

  timeShow = () => {
    setTimeout(() => {
      this.setState({again: false});
    }, 20000);
    this.counter = setInterval(() => {
      if (this.state.counter >= 20) {
        clearInterval(this.counter);
        this.setState({counter: 1});
      } else {
        this.setState(pervState => ({counter: pervState.counter + 1}));
      }
    }, 1000);
  };

  componentDidMount() {
    this.timeShow();
  }

  // componentWillUnmount() {
  //   clearInterval(this.counter);
  // }

  constructor() {
    super();
    this.state = {
      first: '',
      secound: '',
      third: '',
      fourth: '',
      fifth: '',
      again: true,
      counter: 1,
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled={true}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.img}
            source={require('../../assets/images/washman.png')}
          />
          <View style={{paddingTop: 30}}>
            <Text style={styles.txt}>
              جهت تکمیل فرایند ثبت نام کد ارسال شده به شماره تلفن همراه راه در
              کادر زیر وارد کنید
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              width: width,
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <TextInput
              ref="1"
              style={styles.textinput}
              value={this.state.first}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={val => {
                if (this.state.first.length == 0) {
                  this.firstInput.focus();
                }
                this.setState({first: val});
              }}
            />
            <TextInput
              ref={input => {
                this.firstInput = input;
              }}
              style={styles.textinput}
              value={this.state.secound}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={val => {
                if (this.state.secound.length == 0) {
                  this.secondInput.focus();
                }
                this.setState({secound: val});
              }}
            />
            <TextInput
              ref={input => {
                this.secondInput = input;
              }}
              style={styles.textinput}
              value={this.state.third}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={val => {
                if (this.state.third.length == 0) {
                  this.thirdInput.focus();
                }
                this.setState({third: val});
              }}
            />
            <TextInput
              ref={input => {
                this.thirdInput = input;
              }}
              style={styles.textinput}
              value={this.state.fourth}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={val => {
                if (this.state.fourth.length == 0) {
                  this.fourthInput.focus();
                }
                this.setState({fourth: val});
              }}
            />
            <TextInput
              ref={input => {
                this.fourthInput = input;
              }}
              style={styles.textinput}
              value={this.state.fifth}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={val => {
                this.setState({fifth: val});
              }}
            />
          </View>
          <TouchableOpacity
            style={{paddingTop: 10}}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={{color: '#858585', fontSize: 12}}>ویرایش اطلاعات</Text>
          </TouchableOpacity>
          <View
            style={{
              paddingTop: 30,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.btnCode}
              onPress={() => this.resiveCode()}>
              <Text style={styles.textBtnJoin}>تایید کل فعال سازی</Text>
            </TouchableOpacity>
            {this.state.again ? (
              <Text style={{color: '#3498DB', fontSize: 12, marginTop: 10}}>
                {this.state.counter}
              </Text>
            ) : (
              <TouchableOpacity
                style={{paddingTop: 10}}
                onPress={() => this.resiveAgain()}>
                <Text style={{color: '#3498DB', fontSize: 12}}>
                  دریافت مجدد
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  txt: {
    fontSize: 16,
    color: '#858585',
    textAlign: 'center',
    paddingHorizontal: 65,
  },
  btnCode: {
    backgroundColor: '#3498DB',
    borderRadius: 25,
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderRadius: 20,
    borderColor: '#C3C3C3',
    borderWidth: 1,
    fontSize: 26,
    height: 60,
    width: 50,
    marginTop: 20,
    fontFamily: 'IRANSansWeb',
    textAlign: 'center',
  },
  textBtnJoin: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
  },
});

export default ReciveCode;
