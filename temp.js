import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

class Temp extends React.Component {
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
    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  map: {
    height: height / 2,
  },
  container: {
    width: width,
    height: height,
  },
});

export default Temp;
