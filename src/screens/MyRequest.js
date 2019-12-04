import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

class MyRequest extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FCFAFA', alignItems: 'center'}}>
        <View style={styles.view}>
          <View
            style={{
              marginHorizontal: 5,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={require('../../assets/images/4.png')}
              style={styles.img}
            />
            <Text style={styles.title}>واکس داشبورد</Text>
          </View>

          <View
            style={{
              marginRight: 10,
              borderRightWidth: 1,
              borderRightColor: '#C3C3C3',
              marginVertical: 15,
            }}>
            <Text style={styles.date}>پنجشنبه 22 شهریور ماه</Text>
            <Text style={styles.time}>ساعت 10 الی 10:30</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('DetailsService')}>
            <Text style={styles.txtBtn}>مشاهده جزِیات</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <View
            style={{
              marginHorizontal: 5,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={require('../../assets/images/3.png')}
              style={styles.img}
            />
            <Text style={styles.title}>موتور شویی</Text>
          </View>

          <View
            style={{
              marginRight: 10,
              borderRightWidth: 1,
              borderRightColor: '#C3C3C3',
              marginVertical: 15,
            }}>
            <Text style={styles.date}>سه شنبه 20 شهریور</Text>
            <Text style={styles.time}>ساعت 10 الی 10:30</Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('DetailsService')}>
            <Text style={styles.txtBtn}>مشاهده جزِیات</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.title2}>انجام شده</Text>
        </View>

        <View style={styles.view}>
          <View
            style={{
              marginHorizontal: 5,
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              source={require('../../assets/images/3.png')}
              style={styles.img}
            />
            <Text style={styles.title}>موتور شویی</Text>
          </View>
          <View
            style={{
              marginRight: 10,
              borderRightWidth: 1,
              borderRightColor: '#C3C3C3',
              marginVertical: 15,
            }}>
            <Text style={styles.date}>شنبه 12 شهریور</Text>
            <Text style={styles.time}>ساعت 10 الی 10:30</Text>
          </View>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('SurveyService')}>
            <Text style={styles.txtBtn}>مشاهده نظرسنجی</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

MyRequest.navigationOptions = ({navigation}) => {
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
    title: 'درخواست های من',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
    headerRight: (
      <TouchableOpacity onPress={() => Linking.openURL('tel:02144085717')}>
        <Image
          source={require('../../assets/images/call.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
  },
  date: {
    fontSize: 16,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingRight: 10,
  },
  time: {
    fontSize: 12,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingRight: 10,
    marginTop: 5,
  },
  img: {
    width: 50,
    height: 50,
  },
  view: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 100,
    width: 350,
    flexDirection: 'row-reverse',
    marginTop: 40,
    position: 'relative',
  },
  title2: {
    fontSize: 16,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingRight: 10,
    marginTop: 40,
  },
  btn: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#3498DB',
    paddingHorizontal: 15,
    paddingVertical: 2,
    bottom: 10,
    right: 10,
  },
  txtBtn: {
    fontSize: 12,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
  },
});
export default MyRequest;
