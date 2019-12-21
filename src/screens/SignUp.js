import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Axios from 'axios';

class SignUp extends React.Component {
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
    title: 'ثبت نام',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
  };
  constructor() {
    super();
    this.state = {
      tell: '',
      password: null,
      cPassword: null,
      TextChanger: styles.txtP,
      showTxt: true,
    };
  }

  ReciveCode = () => {
    const tell = this.state.tell;
    const password = this.state.password;
    this.props.navigation.navigate('ReciveCode', {tel: tell, pass: password});
  };

  placeHolderMove = lol => {
    lol
      ? this.setState({TextChanger: styles.txtN})
      : this.setState({TextChanger: styles.txtP});
  };

  register = () => {
    var that = this;
    if (this.state.password && this.state.cPassword) {
      if (this.state.password === this.state.cPassword) {
        if (this.state.password.length >= 6) {
          Axios.post('customer/register/step_1', {
            phone: that.state.tell,
          })
            .then(function(response) {
              if (response.data.is_successful) {
                that.props.navigation.navigate('ReciveCode', {
                  tell: that.state.tell,
                  password: that.state.password,
                });
              } else {
                alert(response.data.message);
              }
            })
            .catch(function(e) {
              console.warn(e);
            });
        } else {
          alert('تعداد کاراکتر کمتر از 6 می باشد');
        }
      } else {
        alert('پسورد برابر نیست');
      }
    } else {
      alert('همه فیلد ها را پر کنید');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled={true}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.img}
            source={require('../../assets/images/washman.png')}
          />

          <View>
            <View style={{position: 'relative'}}>
              <TextInput
                ref={input => (this.txtInput = input)}
                style={styles.textinput}
                value={this.state.tell}
                onChangeText={val => this.setState({tell: val})}
                onFocus={() => {
                  this.placeHolderMove(true);
                }}
                onBlur={() => {
                  this.placeHolderMove(false);
                  if (!this.state.tell.trim()) {
                    this.setState({showTxt: true});
                  } else {
                    this.setState({showTxt: false});
                  }
                }}
                keyboardType="numeric"
                maxLength={11}
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
              {this.state.showTxt ? (
                <TouchableWithoutFeedback onPress={() => this.txtInput.focus()}>
                  <Text style={this.state.TextChanger}>شماره موبایل</Text>
                </TouchableWithoutFeedback>
              ) : (
                <TouchableWithoutFeedback>
                  <Text style={styles.txtN}>شماره موبایل</Text>
                </TouchableWithoutFeedback>
              )}
            </View>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.textinput}
                value={this.state.password}
                onChangeText={val => this.setState({password: val})}
                placeholder={'رمز عبور'}
                placeholderTextColor="#858585"
                secureTextEntry={true}
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
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.textinput}
                value={this.state.cPassword}
                onChangeText={val => this.setState({cPassword: val})}
                placeholder={'تایید رمز عبور'}
                placeholderTextColor="#858585"
                secureTextEntry={true}
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
          <View
            style={{
              paddingTop: 30,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.register()}>
              <Text style={styles.textBtn}>دریافت کد فعال سازی</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginTop: 5,
  },

  btn: {
    backgroundColor: '#3498DB',
    borderRadius: 25,
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
  textBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
  },
  txtP: {
    position: 'absolute',
    top: 30,
    right: 45,
    color: '#858585',
    fontSize: 18,
  },
  txtN: {
    position: 'absolute',
    top: 20,
    right: 40,
    color: '#858585',
    fontSize: 13,
  },
});

export default SignUp;
