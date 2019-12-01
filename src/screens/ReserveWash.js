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
        <View style={styles.tab}></View>
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

ReserveWash.navigationOptions = () => {
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
    height: 50,
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: 'absolute',
  },
});

export default ReserveWash;
