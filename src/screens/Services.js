import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';

class ServicesR extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{flex: 1, backgroundColor: '#FCFAFA', alignItems: 'center'}}>
          <View style={styles.container}>
            <Image
              source={this.props.navigation.state.params.image}
              style={styles.img}
            />
            <Text style={{color: '#FFC200', fontSize: 20, marginBottom: 5}}>
              {this.props.navigation.state.params.VIP === null &&
              this.props.navigation.state.params.CIP === null
                ? null
                : this.props.navigation.state.params.CIP === true
                ? 'C.I.P'
                : 'V.I.P'}
            </Text>
            <Text style={styles.txt}>
              {this.props.navigation.state.params.text}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('ReserveWash')}>
              <Text style={styles.txtBtn}>ثبت خدمات</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

ServicesR.navigationOptions = ({navigation}) => {
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
    title: `${navigation.state.params.title}`,
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
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#3498DB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    width: 320,
    height: 420,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.016,
    shadowRadius: 5,
    elevation: 5,
    marginHorizontal: 30,
    marginVertical: 20,
    alignItems: 'center',
  },
  img: {
    width: 120,
    height: 120,
    marginVertical: 30,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
    paddingHorizontal: 30,
    textAlign: 'center',
    color: '#858585',
  },
});

export default ServicesR;
