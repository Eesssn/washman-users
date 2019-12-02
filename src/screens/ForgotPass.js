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

class ForgotPass extends React.Component {
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

  constructor() {
    super();
    this.state = {
      tell: '',
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
              جهت بازیابی رمز خود شماره تلفن همراه خود را که با آن اکانت واش من
              را ساخته اید به صورت کامل وارد کنید
            </Text>
          </View>
          <View style={{paddingTop: 20}}>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.textinput}
                value={this.state.tell}
                onChangeText={tell => this.setState(tell)}
                placeholder={'شماره موبایل'}
                placeholderTextColor="#858585"
                keyboardType="numeric"
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
          </View>
          <View style={{paddingTop: 30}}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ForgotPass2')}>
              <Text style={styles.textBtn}>دریافت کد فعالسازی</Text>
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
  },
  textBtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
  },
});

export default ForgotPass;
