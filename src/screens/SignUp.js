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

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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
      fontFamily: 'IRANSansFaNum_Light',
    },
  };
  constructor() {
    super();
    this.state = {
      tell: '',
      password: null,
      cPassword: null,
      TextChanger: styles.txtP,
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
                style={styles.textinput}
                value={this.state.tell}
                onChangeText={val => this.setState({tell: val})}
                onFocus={() => {
                  this.placeHolderMove(true);
                }}
                onBlur={() => {
                  this.placeHolderMove(false);
                }}
                keyboardType="numeric"
                maxLength={12}
              />
              <SimpleLineIcons
                name="user"
                size={25}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 10,
                  color: '#a7a9ac',
                }}
              />
              <Text style={this.state.TextChanger}>شماره موبایل</Text>
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
              <SimpleLineIcons
                name="lock"
                size={25}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 10,
                  color: '#a7a9ac',
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
              <SimpleLineIcons
                name="lock"
                size={25}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 10,
                  color: '#a7a9ac',
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingTop: 30,
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.btn} onPress={this.ReciveCode}>
              <Text style={styles.textBtn}>دریافت کد فعال سازی</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

let TextChanger = null;

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
    top: 35,
    right: 40,
    color: '#858585',
    fontSize: 18,
  },
  txtN: {
    position: 'absolute',
    top: 20,
    right: 40,
    color: '#858585',
    fontSize: 15,
  },
});

export default SignUp;
