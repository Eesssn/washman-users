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
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      index: [],
    };
  }

  index = async () => {
    var that = this;
    const id = await AsyncStorage.getItem('ID');
    const token = await AsyncStorage.getItem('Token');
    Axios.post('customer/index', {
      customer_id: id,
      token: token,
    })
      .then(function(response) {
        if (response.data.is_successful) {
          that.setState({index: response.data.data});
          console.log(that.state.index);
        } else {
          alert(response.data.message);
        }
      })
      .catch(function(e) {
        Console.warn(e);
      });
  };

  componentDidMount() {
    this.index();
  }

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
            {/* <ScrollView>
              {this.state.index.sliders.map(item => {
                return <Image source={item.image} style={styles.img} />;
              })}
            </ScrollView> */}
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

            {/* {this.state.index.services.map(item => {
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
            })} */}
          </View>
          <View style={{marginRight: 10}}>
            <Text style={styles.title}>بلاگ</Text>
          </View>

          {Last.map((lst, i) => {
            return (
              <View key={i} style={{position: 'relative'}}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('TextBlog', {
                      image: lst.image,
                      title: lst.title,
                      text: lst.text,
                    })
                  }>
                  <Image source={lst.image} style={styles.imgBlog} />
                </TouchableOpacity>
                <View style={styles.view}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#858585',
                      marginTop: 4,
                      textAlign: 'center',
                    }}>
                    {lst.title}
                  </Text>
                </View>
              </View>
            );
          })}
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
    bottom: 15,
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
      'خدمات روشویی واش من شامل:شست و شوی بدنه جرم گری رینگ ها جرم گیری رینگ ها,لاستیک و زیرگلگیر',
  },
  {
    image: require('../../assets/images/2.png'),
    VIP: null,
    CIP: null,
    title: 'نظافت داخل',
    id: '2',
    text: 'نظافت داخل شامل:نظافت کامل کابین خودرو صندوق باز خودرو',
  },
  {
    image: require('../../assets/images/3.png'),
    VIP: null,
    CIP: null,
    title: 'موتورشویی',
    id: '3',
    text: 'موتورشویی شامل:جرم گیری و شست و شو موتور',
  },
  {
    image: require('../../assets/images/4.png'),
    VIP: null,
    CIP: null,
    title: 'پرمیوم واکس',
    id: '4',
    text:
      'پرمیوم واکس شامل:واکس داشبورد و سطوح وینیلی واکس و درخشندگی تایرها سایر سطوح پلاستیکی',
  },
  {
    image: require('../../assets/images/5.png'),
    VIP: true,
    CIP: null,
    title: 'صفرشویی',
    id: '5',
    text:
      'شامل دو بار روشویی ؛ نظافت داخل ؛ موتور شویی ؛ زیر شویی ؛ پرمیوم واکس . اعمال کرم پاک کننده و محافظ چرم اتومبیل . اعمال شیشه شوی ضد بخار .  واکس و سرامیک فوری بدنه با خاصیت ابگریزی و پایداری میان مدت ',
  },
  {
    image: require('../../assets/images/6.png'),
    VIP: null,
    CIP: true,
    title: 'سرویس ویژه',
    id: '6',
    text:
      'خدمات روشویی واش من شامل:شامل روشویی ؛ نظافت داخل ؛ موتور شویی ؛ زیر شویی ؛ پرمیوم واکس . اعمال کرم پاک کننده و محافظ چرم اتومبیل . اعمال شیشه شوی ضد بخار',
  },
];

const Last = [
  {
    image: require('../../assets/images/Blog1.png'),
    title: 'تاریخچه کارواش ؟',
    date: 'دهم شهریور',
    like: 250,
    text:
      'از زمانیکه اولین خودرو جهان به شکلی که امروزه رایج است، در حدود سال ۱۹۰۰ ساخته شد، شستشو و تمیز کردن آن مورد توجه قرار داشت. از روش های دستی قدیمی گرفته تا کارواش های دستی و اتوماتیک جدید با تکنولوژی بالا، همه در برهه ای از زمان بخش عمده ای از وظایف شستشوی خودرو را بر عهده گرفته اند. در این بین استفاده از کارواش ها به دلیل مزایای متعدد آن به طور چشم گیری افزایش یافته است. شستشوی خودرو بوسیله کارواش امروزه به شستشوی بدنه، شیشه ها، چرخ ها و در مواردی موتور خودرو اطلاق می شود. در این مقاله تاریخچه شستشوی خودرو با کارواش از ابتدا تا کنون مورد بررسی قرار می گیرد.' +
      'شروع سیر تحولی مراکز شستشوی خودرو ، با کارواش دستی و در حدود سال ۱۹۱۴ آغاز شده است. در این کارواش ها، خودرو بوسیله دستمال و سطل آب شستشو می شد و تجهیز خاصی مورد استفاده قرار نمی گرفت. مدتی بعد این ماشین شوی ها پیشرفت کرده به گونه ای که ابتدا یک نیروی خدماتی ، سطح خودرو را با مواد پاک کننده تمیز می کرد، سپس خودرو توسط شخص مسئول کمی جلوتر برده شده و توسط فرد دیگری شستشو و در نهایت توسط یک نیروی دیگر خشک می شد! این عملیات تماما دستی و بدون هیچگونه تجهیز خاصی انجام می شد. نسل بعدی تجهیزات شستشوی خودرو کمی تحول پیدا کرد و خودرو بوسیله یک سیستم قلاب مانند ( وینچ) به جلو کشیده می شد. این نسل در حدود سال ۱۹۴۰ در آمریکا بطور گسترده مورد استفاده قرار گرفت. در سال ۱۹۴۶ پاشش آب بر روی خودرو توسط آب پاش های فوقانی و خشک کردن بدنه توسط دمنده مکانیکی در یک مرکز شستشوی خودرو مورد استفاده قرار گرفت که از سیستم نوار نقاله انتقال خودرو بهره می برد.' +
      'اولین مدل از دستگاه های شستشوی خودرو با نام کارواش اتوماتیک، در سال ۱۹۵۰ ساخته شد. این کارواش ها مراحل شستشوی خودرو را بطور نیمه خودکار انجام می دادند به گونه ای که عملیات حرکت دادن خودرو بوسیله سیستم اتوماتیک و برس زنی بصورت دستی انجام می شد. سیستم های بازیابی آب، روش های مختلف شستشوی تایر ها و برس های با کیفیت و نرم از ویژگی هایی بودند که در سال ۱۹۶۰ برای این دستگاه های شستشوی ماشین فراهم شدند. سیستم هوشمند شستشوی چرخ ها و پاشش واکس نیز از سال ۱۹۷۰ به این مراکز اضافه شد. البته وجود بحران های اقتصادی در دنیا و گران شدن سوخت، در این دهه موجب توقف رشد دستگاه کارواش شد اما ده سال بعد، در سال ۱۹۸۰ با افزایش رشد اقتصادی تمایل افراد برای استفاده از خودرو افزایش یافت و تجهیزات شستشوی آن دوباره رونق یافتند. در ادامه این مراکز شستشوی خودرو، ها به امکانات و تجهیزات بیشتر مانند سیستم بازیابی و تصفیه آب، برس های با کیفیت با حرکت هوشمند در زوایای مختلف، نازل های فشار قوی آب، نازل های پاشش واکس برای افزایش درخشندگی خودرو و سیستم های کامپیوتری برنامه ریز مجهز شدند و امکان تعیین عملیات دلخواه برای مشتریان فراهم شد. کارواش تونلی نسل پیشرفته مدل های اتوماتیک ماشین شوی هاست که در آن خودرو بر روی یک نوار نقاله یا کانوایر حرکت کرده و در بخش های مختلف شستشو و خشک می شود.',
  },
  {
    image: require('../../assets/images/Blog2.png'),
    title: 'اهمیت شستشوی خودرو ؟',
    date: 'دهم شهریور',
    like: 323,
    text:
      'از گذشته تا به امروز، مالکان خودرو به شستشو و تمیز نمودن وسیله خود و درخشان و براق کردن ظاهر آن اهمیت زیادی می دهند. توجه به این امر ظاهر خودرو و محیط شهری را زیبا نموده و بر حفظ کیفیت بدنه و بخش های دیگر خودرو تاثیر گذار است. انباشت آلودگی ها می تواند به مرور زمان به رنگ بدنه خودرو آسیب زده و از ارزش آن بکاهد. بنابراین نیاز است تا مالکان خودرو، از تجهیزاتی مناسب و سریع برای شستشوی آن استفاده نمایند که در حین حال آسیبی به رنگ و بدنه وسیله وارد نکند.',
  },
];

export default Home;
