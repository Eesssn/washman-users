import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

class Service extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.onPress}
        key={item.id}
        style={
          lol2
            ? lol2.length % 2 == 0
              ? styles.btnService
              : [
                  styles.btnService,
                  {
                    shadowColor: '#3498DB',
                    borderColor: '#3498DB',
                    borderWidth: 1.5,
                  },
                ]
            : null
        }>
        <Image source={this.props.img} style={{width: 60, height: 60}} />
        <Text style={styles.titleCar}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btnService: {
    flexDirection: 'column',
    height: 110,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
    margin: 4,
  },
  titleCar: {
    fontSize: 13,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
  },
});

const {width, height} = Dimensions.get('window');

export default Service;
