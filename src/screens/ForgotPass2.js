import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

class ForgotPass2 extends React.Component {
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
    title: 'فراموشی رمز',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
  };

  Edited = () => {
    const {navigation} = this.props;
    var lol = JSON.stringify(navigation.getParam('tel', 'pass'));
    console.log(lol);
    this.props.navigation.navigate('SignUp');
  };

  constructor() {
    super();
    this.state = {
      first: '',
      secound: '',
      third: '',
      fourth: '',
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
              width: 250,
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
                this.setState({fourth: val});
              }}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 10}} onPress={this.Edited}>
            <Text style={{color: '#858585', fontSize: 12}}>ویرایش اطلاعات</Text>
          </TouchableOpacity>
          <View
            style={{
              paddingTop: 30,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={styles.btnCode}
              onPress={() => this.props.navigation.navigate('GetStarted')}>
              <Text style={styles.textBtnJoin}>تایید کل فعال سازی</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingTop: 10}}>
              <Text style={{color: '#3498DB', fontSize: 12}}>دریافت مجدد</Text>
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

export default ForgotPass2;
