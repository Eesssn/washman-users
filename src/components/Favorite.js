import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

class Favorite extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
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
            {this.props.txtFavorite}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const {width, height} = Dimensions.get('window');

export default Favorite;
