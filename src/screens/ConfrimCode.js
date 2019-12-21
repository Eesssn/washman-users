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
import Axios from 'axios';

class ConfrimCode extends React.Component {
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
    title: 'کد فعال سازی',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
  };

  constructor() {
    super();
    this.state = {
      name: '',
      code: '',
    };
  }

  signUp = () => {
    var that = this;
    const password = that.props.navigation.getParam('password');
    const tell = that.props.navigation.getParam('tell');
    const verify_code = that.props.navigation.getParam('verify_code');
    if (this.state.name) {
      Axios.post('customer/register/step_2', {
        name: that.state.name,
        password: password,
        phone: tell,
        verify_code: verify_code,
      })
        .then(function(response) {
          if (response.data.is_successful) {
            that.props.navigation.navigate('Home');
          } else {
            alert(response.data.message);
          }
        })
        .catch(function(e) {
          console.warn(e);
        });
    } else {
      alert('نام خود را وارد کنید');
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
                style={styles.textinput}
                value={this.state.tell}
                onChangeText={val => this.setState({name: val})}
                placeholder={'نام و نام خانوادگی'}
                placeholderTextColor="#858585"
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
                onChangeText={val => this.setState({code: val})}
                placeholder={'کد معرف  دارید؟'}
                placeholderTextColor="#858585"
                keyboardType="numeric"
              />
              <Image
                source={require('../../assets/images/star.png')}
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
              style={styles.btnCode}
              onPress={() => this.signUp()}>
              <Text style={styles.textBtn}>ثبت نام</Text>
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
  btnCode: {
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
  },
  textBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
  },
});

export default ConfrimCode;
