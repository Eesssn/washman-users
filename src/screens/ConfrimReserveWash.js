import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class ConfrimReserveWash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.tab}></View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 35.736841,
              longitude: 51.389038,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}>
            <Marker coordinate={{latitude: 35.736841, longitude: 51.389038}} />
          </MapView>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#C3C3C3',
              width: width - 40,
              marginTop: 10,
            }}>
            <Text style={styles.txt}>
              آدرس:خیابان مطهری-میرزای شیرازی-پلاک 299-واحد سوم
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row-reverse',
              justifyContent: 'space-around',
              width: width - 50,
            }}>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#C3C3C3',
                width: width / 2 - 80,
                marginTop: 10,
              }}>
              <Text style={styles.txt}>پلاک:299</Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#C3C3C3',
                width: width / 2 - 80,
                marginTop: 10,
              }}>
              <Text style={styles.txt}>واحد سوم</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ServiceReserve')}>
              <Text style={styles.txtBtn}>تایید محل</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

ConfrimReserveWash.navigationOptions = () => {
  return {
    tabBarIcon: ({tintColor}) => (
      <FontAwesome name="instagram" style={{color: tintColor}} size={28} />
    ),
    headerStyle: {
      backgroundColor: '#3498DB',
      borderBottomRightRadius: 25,
      borderBottomLeftRadius: 25,
      height: 70,
      textAlign: 'center',
    },
    headerTintColor: 'white',
    headerLeft: null,
    title: 'رزرو کارواش',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'FDK_aban{@fontbartar}',
    },
    headerRight: (
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/bell.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
      </TouchableOpacity>
    ),
  };
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  map: {
    height: height / 2,
  },
  container: {
    width: width,
    height: height,
    position: 'relative',
  },
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#3498DB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 10,
  },
  txtBtn: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
  },
  txt: {
    fontSize: 14,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    textAlign: 'center',
    padding: 10,
  },
  tab: {
    position: 'absolute',
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    height: 50,
    width: width,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    position: 'absolute',
    bottom: 100,
  },
});

export default ConfrimReserveWash;
