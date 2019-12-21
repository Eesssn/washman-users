import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class addItem extends React.Component {
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
      favorite: '',
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

  addFavorite = () => {
    this.props.navigation.navigate('ReserveWash', {
      name: this.state.favorite,
    });
  };

  address = () => {
    var that = this;
    Axios.post('customer/addresses', {
      customer_id: that.state.ID,
      token: that.state.token,
    })
      .then(function(reseponse) {
        if (response.data.is_successful) {
          this.setState({address: reseponse.data.data});
        } else {
          alert(reseponse.data.message);
        }
      })
      .catch(function(e) {
        console.warn(e);
      });
  };

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

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            height: 100,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <TextInput
            style={styles.textinput}
            value={this.state.favorite}
            onChangeText={val => this.setState({favorite: val})}
            placeholder={''}
            placeholderTextColor="#858585"
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.addFavorite()}>
            <Text style={styles.txtBtn}>افزودن</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

addItem.navigationOptions = ({navigation}) => {
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
    title: 'رزرو کارواش',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
  };
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  textinput: {
    borderRadius: 25,
    borderColor: '#C3C3C3',
    borderWidth: 1,
    fontSize: 16,
    paddingRight: 50,
    paddingLeft: 20,
    width: width / 2,
    height: 50,
    fontFamily: 'IRANSansWeb',
    textAlign: 'right',
  },
  btn: {
    width: width / 3,
    height: 50,
    backgroundColor: '#3498DB',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf: 'center',
    // position: 'absolute',
    // bottom: 50,
  },
  txtBtn: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
  },
});

export default addItem;
