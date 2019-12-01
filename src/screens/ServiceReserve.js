import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

class ServiceReserve extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>نوع ماشین</Text>
          </View>
          <View
            style={{
              width: width - 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity style={styles.btnCar}>
              <Image
                source={require('../../assets/images/car1.png')}
                style={{width: 60, height: 30}}
              />
              <Text style={styles.titleCar}>شاسی</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCar}>
              <Image
                source={require('../../assets/images/car2.png')}
                style={{width: 60, height: 30}}
              />
              <Text style={styles.titleCar}>سواری</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCar}>
              <Image
                source={require('../../assets/images/car3.png')}
                style={{width: 60, height: 30}}
              />
              <Text style={styles.titleCar}>کراس اور</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCar}>
              <Image
                source={require('../../assets/images/car4.png')}
                style={{width: 60, height: 30}}
              />
              <Text style={styles.titleCar}>هاچ بک</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20, width}}>
          <Text
            style={{
              fontFamily: 'IRANSansWeb',
              fontSize: 14,
              color: '#858585',
              textAlign: 'right',
              marginRight: 5,
              marginBottom: 5,
            }}>
            نوع و تیپ ماشین
          </Text>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#707070'}} />
          <View style={{alignItems: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>نوع خدمت</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
              {services.map(item => {
                return (
                  <TouchableOpacity key={item.id} style={styles.btnService}>
                    <Image
                      source={item.image}
                      style={{width: 60, height: 60}}
                    />
                    <Text style={styles.titleCar}>{item.title}</Text>
                    <Text style={{color: '#FFC200'}}>
                      {item.VIP === null && item.CIP === null
                        ? null
                        : item.CIP === true
                        ? 'CIP'
                        : 'VIP'}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>زمان و تاریخ</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width,
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity>
                <Text style={styles.titleCar}>اسرع وقت</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.titleCar}>تعیین وقت</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

ServiceReserve.navigationOptions = () => {
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
    title: 'رزرو خدمت',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'FDK_aban{@fontbartar}',
    },
    headerRight: (
      <TouchableOpacity>
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
    fontSize: 20,
    fontFamily: 'IRANSansWeb',
    textAlign: 'right',
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#858585',
    // marginRight: 10,
  },
  titleCar: {
    fontSize: 13,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
  },
  btnCar: {
    flexDirection: 'column',
    width: 80,
    height: 85,
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
  },
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
});

const services = [
  {
    image: require('../../assets/images/1.png'),
    VIP: null,
    CIP: null,
    title: 'روشویی',
    id: '1',
    text:
      'خدمات روشویی واش من شامل:1-شست و شوی کامل بدنه2-جرم گیری رینگ هاکه شامل لاستیک ها و زیر گلگیر می باشد.همچنین شما می توانید برای اطلاعات بیشتربا ما تماس بگیرید021-88551470',
  },
  {
    image: require('../../assets/images/2.png'),
    VIP: null,
    CIP: null,
    title: 'نظافت داخل',
    id: '2',
    text: 'خدمات نظافت داخل شامل:شست و شوی بدنه تایر..........',
  },
  {
    image: require('../../assets/images/3.png'),
    VIP: null,
    CIP: null,
    title: 'موتورشویی',
    id: '3',
    text: 'خدمات موتورشویی شامل:شست و شوی بدنه تایر..........',
  },
  {
    image: require('../../assets/images/4.png'),
    VIP: null,
    CIP: null,
    title: 'پرمیوم واکس',
    id: '4',
    text: 'خدمات واکس داشبورد شامل:شست و شوی بدنه تایر..........',
  },
  {
    image: require('../../assets/images/5.png'),
    VIP: true,
    CIP: null,
    title: 'صفرشویی',
    id: '5',
    text: 'خدمات صفرشویی شامل:شست و شوی بدنه تایر..........',
  },
  {
    image: require('../../assets/images/6.png'),
    VIP: null,
    CIP: true,
    title: 'سرویس ویژه',
    id: '6',
    text:
      'خدمات روشویی واش من شامل:1-شست و شوی کامل بدنه2-جرم گیری رینگ هاکه شامل لاستیک ها و زیر گلگیر می باشد.همچنین شما می توانید برای اطلاعات بیشتربا ما تماس بگیرید',
  },
];

export default ServiceReserve;
