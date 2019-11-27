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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
      fontFamily: 'IRANSansFaNum_Light',
    },
  };

  constructor() {
    super();
    this.state = {
      name: '',
      code: '',
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

          <View>
            <View style={{position: 'relative'}}>
              <TextInput
                style={styles.textinput}
                value={this.state.tell}
                onChangeText={val => this.setState({name: val})}
                placeholder={'نام و نام خانوادگی'}
                placeholderTextColor="#858585"
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
              <MaterialIcons
                name="star"
                size={25}
                style={{
                  position: 'absolute',
                  top: 30,
                  right: 10,
                  color: '#FAC917',
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
              onPress={() => this.props.navigation.navigate('Home')}>
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
