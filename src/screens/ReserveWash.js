import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
// const getCurrentPosition = () => {
//   return new Promise((resolve, rejects) => {
//     navigator.geolocation.getCurrentPosition(
//       position => resolve(position),
//       e => rejects(e),
//     );
//   });
// };
class ReserveWash extends Component {
  constructor() {
    super();
    this.state = {
      region: null,
    };
  }

  // componentDidMount() {
  //   return getCurrentPosition().then(position => {
  //     console.log(position);
  //     if (position) {
  //       this.setState({
  //         region: position.coords,
  //       });
  //     } else {
  //       console.log('error in map');
  //     }
  //   });
  // }
  render() {
    return (
      <View style={{flex: 1, position: 'relative'}}>
        {/* <View style={styles.tab}></View> */}
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          region={{
            latitude: 35.731993,
            longitude: 51.367769,
            latitudeDelta: 0.0511,
            longitudeDelta: 0.0511,
          }}>
          <Marker coordinate={{latitude: 35.731993, longitude: 51.367769}} />
        </MapView>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.props.navigation.navigate('ConfrimReserveWash')}>
          <Text style={styles.txtBtn}>تایید محل</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ReserveWash.navigationOptions = ({navigation}) => {
  return {
    tabBarIcon: ({tintColor}) => (
      <FontAwesome name="instagram" style={{color: tintColor}} size={28} />
    ),
    // headerStyle: {
    //   backgroundColor: '#3498DB',
    //   borderBottomRightRadius: 25,
    //   borderBottomLeftRadius: 25,
    //   height: 70,
    //   textAlign: 'center',
    // },
    headerTintColor: 'white',
    headerLeft: null,
    title: 'رزرو کارواش',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'FDK_aban{@fontbartar}',
    },

    header: ({navigation}) => {
      return (
        <View style={styles.tab}>
          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'flex-end',
              paddingVertical: 20,
              paddingHorizontal: 20,
              justifyContent: 'center',
            }}>
            <View>
              <Image
                source={require('../../assets/images/star.png')}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'IRANSansWeb',
                  color: '#858585',
                  marginRight: 5,
                }}>
                خانه
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'flex-end',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <View>
              <Image
                source={require('../../assets/images/star.png')}
                style={{width: 20, height: 20}}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'IRANSansWeb',
                  color: '#858585',
                  marginRight: 5,
                }}>
                محل کار
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'flex-end',
              paddingVertical: 20,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/plus.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#3498DB',
              borderBottomRightRadius: 25,
              borderBottomLeftRadius: 25,
              height: 70,
              width,
              textAlign: 'center',
              position: 'absolute',
            }}>
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 20,
                paddingHorizontal: 10,
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MyRequest')}>
                  <Image
                    source={require('../../assets/images/bell.png')}
                    style={{width: 30, height: 30, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: 'IRANSansWeb',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'white',
                  }}>
                  رزرو کارواش
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    },
  };
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#3498DB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 50,
  },
  txtBtn: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
  },
  tab: {
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    height: 120,
    width,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.016,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
});

export default ReserveWash;
