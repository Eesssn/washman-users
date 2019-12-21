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
import geolocation from '@react-native-community/geolocation';
import Favorite from '../components/Favorite';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';

class ReserveWash extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 35.731993,
        longitude: 51.367769,
        latitudeDelta: 0.0511,
        longitudeDelta: 0.0511,
      },
      Marker: null,
      token: null,
      ID: null,
      address: [],
    };
  }
  componentDidMount() {
    this.LoadData();
  }

  LoadData = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      const ID = await AsyncStorage.getItem('ID');
      this.setState({
        token,
        ID,
      });
    } catch (e) {
      console.warn(e);
    }
  };

  ChangeRegion = data => {
    this.setState({
      region: data,
    });
  };

  ChangeMarker = () => {
    let val = this.state.region;
    this.setState({
      Marker: val,
    });
  };

  address = () => {
    var that = this;
    Axios.post('customer/address', {});
  };

  // componentDidMount() {
  //   // geolocation.getCurrentPosition(
  //   //   position => {
  //   //     fetch(
  //   //       'https://maps.googleapis.com/maps/api/geocode/json?address=' +
  //   //         this.state.region.latitude +
  //   //         ',' +
  //   //         this.state.region.longitude +
  //   //         '&key=' +
  //   //         'AIzaSyBZFYN2GmsATw8CxRZiG1Y_O2uQPcQY3ec',
  //   //     )
  //   //       .then(response => response.json())
  //   //       .then(responseJson => {
  //   //         console.log(
  //   //           'ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson),
  //   //         );
  //   //       });
  //   //     // alert(JSON.stringify(position));
  //   //   },
  //   //   error => alert(error, message),
  //   //   {timeout: 20000, maximumAge: 1000},
  //   // );

  //   // Geocoder.getFromLatLng(28.6139, 77.209).then(
  //   //   json => {
  //   //     var addressComponent = json.results[0].address_components[0];
  //   //     alert(JSON.stringify(addressComponent));
  //   //   },
  //   //   error => {
  //   //     alert(JSON.stringify(error));
  //   //   },
  //   // );
  // }

  render() {
    return (
      <View style={{flex: 1, position: 'relative'}}>
        <MapView
          style={{flex: 1}}
          showsUserLocation={true}
          onRegionChangeComplete={e => this.ChangeRegion(e)}
          mapType="terrain"
          region={this.state.region}>
          {this.state.Marker !== null ? (
            <Marker coordinate={this.state.Marker} />
          ) : null}
        </MapView>
        <TouchableOpacity
          onPress={() => this.ChangeMarker()}
          style={{
            width: 70,
            height: 120,
            position: 'absolute',
            top: height / 2 - 190,
            left: width / 2 - 35,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/images/marker.png')}
            style={{width: 30, height: 55}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.state.Marker !== null
              ? this.props.navigation.navigate('ConfrimReserveWash', {
                  marker: this.state.marker,
                  origin: this.state.origin,
                })
              : alert('choose origin')
          }>
          <Text style={styles.txtBtn}>تایید محل</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ReserveWash.navigationOptions = ({navigation}) => {
  return {
    headerTintColor: 'white',
    headerLeft: null,
    title: 'رزرو کارواش',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },

    header: ({navigation}) => {
      return (
        <View style={styles.tab}>
          <Favorite txtFavorite={'خانه'} />

          <Favorite txtFavorite={'محل کار'} />
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
                {navigation.getParam('name')}
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
            <TouchableOpacity
              onPress={() => navigation.navigate('addItemMaps')}>
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

const {width, height} = Dimensions.get('window');

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
