import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class DetailsService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
    };
  }
  render() {
    return (
      <ScrollView>
        <View
          style={{flex: 1, backgroundColor: '#FCFAFA', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1.41,
              elevation: 2,
              marginTop: 15,
              width: width - 20,
            }}>
            <Text style={styles.title}>اطلاعات شما</Text>

            <View
              style={{
                flexDirection: 'row-reverse',
                paddingBottom: 10,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#3498DB',
                  borderRadius: 10,
                  width: 90,
                  height: 120,
                  alignItems: 'center',
                  marginRight: 5,
                }}>
                <Image
                  source={require('../../assets/images/4.png')}
                  style={{width: 60, height: 60, marginTop: 5}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'IRANSansWeb',
                    color: '#858585',
                  }}>
                  سرویس ویژه
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'IRANSansWeb',
                    color: '#FFC200',
                  }}>
                  C.I.P
                </Text>
              </View>

              <View>
                <View style={{flexDirection: 'row-reverse', paddingBottom: 5}}>
                  <Text style={styles.txtDetail}>نوع ماشین</Text>
                  <Text style={styles.txt}>سواری،ایرانی،پرشیا</Text>
                </View>

                <View style={{flexDirection: 'row-reverse', paddingBottom: 5}}>
                  <Text style={styles.txtDetail}>تاریخ و زمان</Text>
                  <View style={{width: 150}}>
                    <Text style={styles.txt}>
                      چهارشنبه 10 شهریور ساعت 10 صبح
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row-reverse',
                    paddingBottom: 5,
                  }}>
                  <Text style={styles.txtDetail}>آدرس</Text>
                  <View style={{width: 200}}>
                    <Text style={styles.txt}>
                      تهران-خیابان جمالزاده-بعد از پل صدر پلاک 399 واحد 3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{marginTop: 10}}>
            <MapView
              style={{width: width, height: 200}}
              showsUserLocation={true}
              region={{
                latitude: 35.731993,
                longitude: 51.367769,
                latitudeDelta: 0.0511,
                longitudeDelta: 0.0511,
              }}>
              <Marker
                coordinate={{latitude: 35.731993, longitude: 51.367769}}
              />
            </MapView>
          </View>

          <View
            style={{
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1.41,
              elevation: 2,
              height: 100,
              width: width - 40,
              marginTop: 10,
              position: 'relative',
            }}>
            <TextInput
              value={this.state.person}
              onChangeText={val => this.setState({person: val})}
              style={styles.txtInput}
              placeholder="لطفا یه شخص بگید که خیلی حرفه ای باشه"
              placeholderTextColor="#858585"
              multiline={true}
            />
            <Image
              source={require('../../assets/images/edit.png')}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 10,
                top: 10,
              }}
            />
          </View>

          <View>
            <Text style={[styles.title, {marginVertical: 10}]}>
              فاکتور خدمت
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderBottomColor: '#707070',
              borderTopColor: '#707070',
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontFamily: 'IRANSansWeb',
                fontSize: 20,
                color: '#3498DB',
                textAlign: 'center',
              }}>
              هزینه خدمت: 50 هزار تومان
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                fontSize: 14,
                color: '#02B800',
                fontFamily: 'IRANSansWeb',
              }}>
              پرداخت بصورت آنلاین صورت گرفته
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

DetailsService.navigationOptions = ({navigation}) => {
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
    title: 'جزییات خدمت',
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

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    marginRight: 5,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  txtDetail: {
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 5,
  },
  txt: {
    color: '#858585',
    fontSize: 14,
    fontFamily: 'IRANSansWeb',
  },
  txtInput: {
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    fontSize: 14,
    paddingBottom: 45,
    paddingHorizontal: 40,
  },
});

export default DetailsService;
