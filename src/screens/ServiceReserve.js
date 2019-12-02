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
import Datepicker, {getFormatedDate} from 'react-native-modern-datepicker';

class ServiceReserve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'date',
      time: '',
      time2: '',
      temp: [],
      temp2: [],
      tempCar: [],
    };
  }

  selectedView = () => {
    switch (this.state.selected) {
      case 'date':
        return (
          <>
            <Datepicker
              isGregorian={false}
              mode="time"
              minuteInterval={3}
              options={{
                defaultFont: 'Shabnam-Light',
                headerFont: 'Shabnam-Medium',
              }}
              onTimeChange={selectedTime => {
                this.setState({time: selectedTime});
                console.log(selectedTime);
                console.log(this.state.time);
              }}
            />
            <Datepicker
              minimumDate={this.state.time}
              isGregorian={false}
              mode="time"
              current={this.state.time}
              minuteInterval={3}
              options={{
                defaultFont: 'Shabnam-Light',
                headerFont: 'Shabnam-Medium',
              }}
              onTimeChange={selectedTime2 => {
                this.setState({time2: selectedTime2});
              }}
            />
          </>
        );
        break;

      case 'time':
        return (
          <View style={{width: 300, paddingVertical: 50}}>
            <Datepicker
              isGregorian={false}
              options={{
                defaultFont: 'Shabnam-Light',
                headerFont: 'Shabnam-Medium',
              }}
            />
          </View>
        );
      default:
        break;
    }
  };
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
            {Cars.map(item => {
              let indexer2 = this.state.tempCar.length - 1;
              let key2 = this.state.tempCar[indexer2];
              let lol4 = this.state.tempCar.filter(hehe => hehe == item.id);
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({tempCar: [...this.state.tempCar, item.id]})
                  }
                  key={item.id}
                  style={
                    key2 == item.id
                      ? [
                          styles.btnService,
                          {
                            shadowColor: '#3498DB',
                            borderColor: '#3498DB',
                            borderWidth: 1,
                          },
                        ]
                      : styles.btnService
                  }>
                  <Image source={item.image} style={{width: 60, height: 30}} />
                  <Text style={styles.titleCar}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
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
                let lol2;
                if (this.state.temp) {
                  lol2 = this.state.temp.filter(hehe => hehe == item.id);
                }
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        temp: [...this.state.temp, item.id],
                        temp2: [],
                      });
                    }}
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
                                borderWidth: 1,
                              },
                            ]
                        : null
                    }>
                    <Image
                      source={item.image}
                      style={{width: 60, height: 60}}
                    />
                    <Text style={styles.titleCar}>{item.title}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View
              style={{
                flexDirection: 'row',
                width,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
              {tempService.map(item => {
                let indexer = this.state.temp2.length - 1;
                let key = this.state.temp2[indexer];
                let lol3 = this.state.temp2.filter(hehe => hehe == item.id);
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({temp2: [...this.state.temp2, item.id]});
                      this.setState({temp: []});
                    }}
                    key={item.id}
                    style={
                      key == item.id
                        ? lol3.length % 2 == 0
                          ? styles.btnService
                          : [
                              styles.btnService,
                              {
                                shadowColor: '#3498DB',
                                borderColor: '#3498DB',
                                borderWidth: 1,
                              },
                            ]
                        : styles.btnService
                    }>
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
                flexDirection: 'row-reverse',
                width,
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={
                  this.state.selected === 'date' ? styles.selectedTab : null
                }
                onPress={() => this.setState({selected: 'date'})}>
                <Text style={styles.txtTab}>اسرع وقت</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={
                  this.state.selected === 'time' ? styles.selectedTab : null
                }
                onPress={() => this.setState({selected: 'time'})}>
                <Text style={styles.txtTab}>تعیین وقت</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 20, width, alignItems: 'center'}}>
              {this.selectedView()}
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('ReserveWash2')}>
            <Text style={styles.txtBtn}>مبلغ کل:50 هزار تومان</Text>
          </TouchableOpacity>
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
      fontFamily: 'IRANSansWeb',
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
  selectedTab: {
    borderWidth: 1,
    borderColor: '#3498DB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTab: {
    fontSize: 13,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingVertical: 5,
  },
  txtInput: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#858585',
    fontSize: 16,
    fontFamily: 'IRANSansWeb',
    width: 250,
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 15,
  },
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#3498DB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  txtBtn: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
  },
  tmp: {
    flexDirection: 'column',
    height: 110,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#3498DB',
    margin: 4,
  },
});

const services = [
  {
    image: require('../../assets/images/1.png'),
    title: 'روشویی',
    id: '1',
    text:
      'خدمات روشویی واش من شامل:1-شست و شوی کامل بدنه2-جرم گیری رینگ هاکه شامل لاستیک ها و زیر گلگیر می باشد.همچنین شما می توانید برای اطلاعات بیشتربا ما تماس بگیرید021-88551470',
  },
  {
    image: require('../../assets/images/2.png'),

    title: 'نظافت داخل',
    id: '2',
    text: 'خدمات نظافت داخل شامل:شست و شوی بدنه تایر..........',
  },
  {
    image: require('../../assets/images/3.png'),

    title: 'موتورشویی',
    id: '3',
    text: 'خدمات موتورشویی شامل:شست و شوی بدنه تایر..........',
  },
  {
    image: require('../../assets/images/4.png'),

    title: 'پرمیوم واکس',
    id: '4',
    text: 'خدمات واکس داشبورد شامل:شست و شوی بدنه تایر..........',
  },
];

const tempService = [
  {
    image: require('../../assets/images/6.png'),
    VIP: null,
    CIP: true,
    title: 'سرویس ویژه',
    id: '6',
    text:
      'خدمات روشویی واش من شامل:1-شست و شوی کامل بدنه2-جرم گیری رینگ هاکه شامل لاستیک ها و زیر گلگیر می باشد.همچنین شما می توانید برای اطلاعات بیشتربا ما تماس بگیرید',
  },
  {
    image: require('../../assets/images/5.png'),
    VIP: true,
    CIP: null,
    title: 'صفرشویی',
    id: '5',
    text: 'خدمات صفرشویی شامل:شست و شوی بدنه تایر..........',
  },
];

const Cars = [
  {image: require('../../assets/images/car1.png'), id: 1, title: 'شاسی'},
  {image: require('../../assets/images/car2.png'), id: 2, title: 'سواری'},
  {image: require('../../assets/images/car3.png'), id: 3, title: 'کراس اور'},
  {image: require('../../assets/images/car4.png'), id: 4, title: 'هاچ بک'},
];

export default ServiceReserve;
