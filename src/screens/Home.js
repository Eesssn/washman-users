import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

class Home extends React.Component {
  // goToServices = data => {
  //   switch (data.id) {
  //     case '2':
  //       this.props.navigation.navigate('Services');
  //       break;
  //     case '3':
  //       this.props.navigation.navigate('Services');
  //       break;
  //     case '4':
  //       this.props.navigation.navigate('Services');
  //       break;
  //     case '5':
  //       this.props.navigation.navigate('Services');
  //       break;
  //     case '6':
  //       this.props.navigation.navigate('Services');
  //       break;

  //     default:
  //       this.props.navigation.navigate('Services');
  //       break;
  //   }
  // };
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#FCFAFA'}}>
          <View>
            <FlatList
              style={{marginTop: 10}}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={images}
              keyExtractor={images.id}
              renderItem={img => {
                return (
                  <TouchableOpacity>
                    <Image source={img.item.image} style={styles.img} />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{marginRight: 10}}>
            <Text style={styles.title}>انواع خدمات</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {services.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.btn}
                  onPress={() =>
                    this.props.navigation.navigate('Services', {
                      image: item.image,
                      title: item.title,
                      VIP: item.VIP,
                      CIP: item.CIP,
                      text: item.text,
                    })
                  }>
                  <Image
                    source={item.image}
                    style={{width: 40, height: 40, marginBottom: 10}}
                  />
                  <Text style={styles.titleService}>{item.title}</Text>
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
          <View style={{marginRight: 10}}>
            <Text style={styles.title}>بلاگ</Text>
          </View>

          <View style={{position: 'relative'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TextBlog')}>
              <Image
                source={require('../../assets/images/Blog1.png')}
                style={styles.imgBlog}
              />
            </TouchableOpacity>
            <View style={styles.view}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#858585',
                  marginTop: 4,
                }}>
                سرویس ویژه
              </Text>
            </View>
          </View>
          <View style={{position: 'relative'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('TextBlog')}>
              <Image
                source={require('../../assets/images/Blog2.png')}
                style={styles.imgBlog}
              />
            </TouchableOpacity>
            <View style={styles.view}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#858585',
                  textAlign: 'center',
                  marginTop: 4,
                }}>
                چرا واش من
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Home.navigationOptions = ({navigation}) => {
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
    title: 'واش من',
    headerTitleStyle: {
      fontFamily: 'IRANSansWeb',
    },
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('MyRequest')}>
        <Image
          source={require('../../assets/images/bell.png')}
          style={{width: 30, height: 30, marginRight: 20}}
        />
      </TouchableOpacity>
    ),
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../../assets/images/home.png')}
        color={tintColor}
      />
    ),
  };
};

const images = [
  {image: require('../../assets/images/F1.png'), id: '1'},
  {image: require('../../assets/images/F2.png'), id: '2'},
];

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  img: {
    height: (height / 10) * 2,
    width: (width / 5) * 4 - 30,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'IRANSansWeb',
    textAlign: 'right',
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#858585',
    // marginRight: 10,
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 7,
    margin: 7,
    padding: 15,
    alignItems: 'center',
    minWidth: 95,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imgBlog: {
    height: (height / 10) * 2,
    width: (width / 5) * 5 - 30,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  view: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 15,
    width: 130,
    height: 30,
    right: 30,
    top: 100,
    marginBottom: 5,
    alignItems: 'center',
  },
  icon: {
    bottom: 23,
    right: 2,
    color: '#858585',
  },
  titleService: {
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    fontSize: 14,
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
export default Home;
