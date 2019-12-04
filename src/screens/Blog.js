import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import StarRating from 'react-native-star-rating';

class Blog extends React.Component {
  onStarRatingPress(rating) {
    this.setState({
      StarRating: rating,
    });
  }

  changeStatus = item => {
    switch (item.status) {
      case 0:
        return [styles.titleComments, {color: '#02B800'}];
        break;
      case 1:
        return [styles.titleComments, {color: '#FED03F'}];
        break;
      default:
        return [styles.titleComments, {color: '#ED1111'}];
    }
  };

  tabView = () => {
    switch (this.state.discription) {
      case 'lastSubject':
        return (
          <View>
            {Last.map((lst, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{backgroundColor: '#FCFAFA'}}
                  onPress={() =>
                    this.props.navigation.navigate('TextBlog', {
                      image: lst.image,
                      title: lst.title,
                      text: lst.text,
                    })
                  }>
                  <Image source={lst.image} style={styles.imgBlog} />
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      justifyContent: 'flex-end',
                    }}></View>
                  <View style={{paddingHorizontal: 20}}>
                    <Text style={styles.txt}>{lst.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        paddingTop: 5,
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                      }}>
                      <Text style={styles.txtDate}>{lst.date}</Text>
                      <Text style={styles.txtLike}>{lst.like}</Text>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/images/heart.png')}
                          style={{
                            width: 15,
                            height: 15,
                            marginRight: 3,
                            marginBottom: 20,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );

      case 'best':
        return (
          <View>
            {Best.map((bst, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{backgroundColor: '#FCFAFA'}}
                  onPress={() =>
                    this.props.navigation.navigate('TextBlog', {
                      image: bst.image,
                      title: bst.title,
                      text: bst.text,
                    })
                  }>
                  <Image source={bst.image} style={styles.imgBlog} />
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      justifyContent: 'flex-end',
                    }}></View>
                  <View style={{paddingHorizontal: 20}}>
                    <Text style={styles.txt}>{bst.title}</Text>
                    <View
                      style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        paddingTop: 5,
                        borderBottomWidth: 1,
                        borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                      }}>
                      <Text style={styles.txtDate}>{bst.date}</Text>
                      <Text style={styles.txtLike}>{bst.like}</Text>
                      <TouchableOpacity>
                        <Image
                          source={require('../../assets/images/heart.png')}
                          style={{
                            width: 15,
                            height: 15,
                            marginRight: 3,
                            marginBottom: 20,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      case 'yourComment':
        return (
          <View style={{backgroundColor: '#FCFAFA', alignItems: 'center'}}>
            {Comments.map((item, i) => {
              return (
                <View key={i} style={[styles.viewComment, {marginTop: 30}]}>
                  <Text style={this.changeStatus(item)}>{item.title}</Text>
                  <Text style={styles.txtComments}>{item.text}</Text>

                  <View
                    style={{
                      width: width / 2,
                      flexDirection: 'row-reverse',
                      justifyContent: 'space-between',
                    }}>
                    <Text>{item.titleRating}</Text>
                    <StarRating
                      disabled={false}
                      emptyStar={'ios-star-outline'}
                      fullStar={'ios-star'}
                      halfStar={'ios-star-half'}
                      iconSet={'Ionicons'}
                      maxStars={5}
                      rating={item.rating}
                      selectedStar={rating => this.onStarRatingPress(rating)}
                      fullStarColor={'#FAC917'}
                      starSize={20}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        );
        break;

      default:
        break;
    }
  };

  constructor() {
    super();
    this.state = {
      discription: 'lastSubject',
      underLine: null,
      rateChanged: 2,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FCFAFA'}}>
        <View style={styles.tab}>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.setState({discription: 'lastSubject'})}>
              <Text style={styles.txt}>آخرین مطلب</Text>
              <View
                style={
                  this.state.discription === 'lastSubject'
                    ? styles.underline
                    : null
                }
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.setState({discription: 'best'})}>
              <Text style={styles.txt}>بهترینها</Text>
              <View
                style={
                  this.state.discription === 'best' ? styles.underline : null
                }
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => this.setState({discription: 'yourComment'})}>
              <Text style={styles.txt}>نظرات شما</Text>
              <View
                style={
                  this.state.discription === 'yourComment'
                    ? styles.underline
                    : null
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>{this.tabView()}</ScrollView>
      </View>
    );
  }
}

Blog.navigationOptions = () => {
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
    title: 'بلاگ',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
  };
};

const Comments = [
  {
    id: 1,
    title: 'تاثیر واکس بر روی ماشین به چه صورت است؟',
    text:
      'من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی حرفه ای و مجرب',
    titleRating: 'روشویی-سواری',
    status: 0,
    rating: 4.5,
  },
  {
    id: 2,
    title: 'می تونست بهتر از اینا باشه',
    text:
      'من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی حرفه ای و مجرب',
    titleRating: 'روشویی-سواری',
    status: 1,
    rating: 2,
  },
  {
    id: 3,
    title: 'توصیه نمی کنم',
    text:
      'من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی حرفه ای و مجرب',
    titleRating: 'روشویی-سواری',
    status: 2,
    rating: 5,
  },
];

const Best = [
  {
    image: require('../../assets/images/F1.png'),
    title: 'هر چند وقت یکبار باید کارواش رفت؟',
    date: 'دهم شهریور',
    like: 250,
    text:
      'هنگامی که از راننده‌ها می‌پرسید هر چند وقت یکبار باید به کارواش رفت، جواب‌های متفاوتی خواهید شنید. عده‌ای می‌گویند که شستن روزانه‌ی خودرو یک امر ضروری می‌باشد در حالیکه برخی دیگر می‌گویند یک بار یا دوبار در هفته کافی است. اما افراد دیگری نیز وجود دارند که شست و شوی خودرو را مهم نمیدانند به خصوص در مورد خودروهایی که اکثر مواقع بیرون از خانه و کثیف میباشند. به هر حال این سؤال بدون پاسخ خواهد ماند:' +
      'هر چند وقت یکبار بایستی به کارواش رفت؟' +
      'متأسفانه این سؤال دارای یک جواب مشخص نیست. عوامل زیر در این مورد مؤثر می باشند:' +
      'عوامل مؤثر در تعداد لازم کارواش' +
      '1. میزان و چگونگی رانندگی روزانه' +
      'اگر شما هر روز چندین ساعت در جاده رانندگی می کنید، این بدان معناست که سطح خودروی شما در معرض مواد مختلفی مثل گرد و خاک و حشرات می باشد. این مواد در مرور زمان سطح و لایه ی رنگ خودروی شما را از بین می برند. 2. منطقه ی رانندگی اگر شما در یک شهر بزرگ زندگی می کنید پس سطح آلودگی دغدغه ی اصلی می باشد. اگر در منطقه ی شما ساختمانی در حال ساخته شدن است پس موادی نظیر گرد و خاک، گل و حتی سیمان در آنجا وجود دارد. در مناطق سرسبز حشرات، برگ و یا حتی شاخه ی درختان می توانند آسیب رسان باشند و در کنار دریا، ماسه و آب و هوای شرجی به سطح خودرو آسیب می زنند.3. محل پارک خودروآیا شما خودروی خود را در پارکینگ و به دور از آسیب های محیطی پارک می کنید؟ یا اینکه محل پارک خودروی شما کنار خیابان و در معرض آسیب های محیطی می باشد؟ 4. آب و هوای محل رانندگی زندگی در شهر های بزرگ با سطح گرد و خاک و آلودگی بالا می تواند به سرعت به سطح خودروی شما آسیب وارد کند. افرادی که در مناطق بارانی زندگی می کنند ممکن است نیاز چندانی به کارواش احساس نکنند در حالیکه در مناطق خشک و مرطوب، توجه بیشتری به کارواش وجود دارد.5. ظاهر مناسب خودرو از دیدگاه هر فردبرخی از ما ترجیح می دهیم که همواره با خودروی کاملاً تمیز رانندگی کنیم. برای برخی دیگر این موضوع اهمیت چندانی ندارد. شما در کدام دسته قرار دارید؟هنگامی که به این عوامل توجه می کنید، تعداد دفعاتی که باید خودروی خود را به کارواش ببرید برای شما روشن می شود.برای اینکه موضوع را بیشتر درک کنید، به مثال های زیر توجه کنید:هفته ای یکبارهنگامی که شما بر روی خودروی خود برخورد حشرات، شیره ی درختان و یا مدفوع پرندگان را مشاهده می کنید، بایستی به سرعت آن ها را پاک کنید. اگر فقط بخشی از سطح خودروی شما در اثر این عوامل کثیف شده است، بدیهی است که لازم نیست کل خودروی خود را بشویید. اما اگر سطح زیادی از خودرو کثیف می باشد، صبر کردن برای رفتن به کارواش اشتباه است. اگر خودروی شما در معرض حرارت بالا، باران های زیاد و آلودگی هواست و یا مدت زمان زیادی در روز را به رانندگی می پردازید، بایستی هفته ای یکبار خودروی خود را به کارواش ببرید.یکبار یا دوبار در ماه برای شرایط متفاوت با آنچه در بخش قبل گفته شد، می توانید خودروی خود را یکبار یا دوبار در ماه به کارواش ببرید. این امر باعث سالم ماندن رنگ خودرو می شود.شستن خودرو مانند حمام رفتن است که به خاطر سالم و تمیز نگه داشتن پوست بدنمان می باشد. همین امر در مورد خودروی ما نیز صادق است',
  },
  {
    image: require('../../assets/images/F2.png'),
    title: 'اهمیت شستشوی خودرو ؟',
    date: 'دهم شهریور',
    like: 323,
    text:
      'از گذشته تا به امروز، مالکان خودرو به شستشو و تمیز نمودن وسیله خود و درخشان و براق کردن ظاهر آن اهمیت زیادی می دهند. توجه به این امر ظاهر خودرو و محیط شهری را زیبا نموده و بر حفظ کیفیت بدنه و بخش های دیگر خودرو تاثیر گذار است. انباشت آلودگی ها می تواند به مرور زمان به رنگ بدنه خودرو آسیب زده و از ارزش آن بکاهد. بنابراین نیاز است تا مالکان خودرو، از تجهیزاتی مناسب و سریع برای شستشوی آن استفاده نمایند که در حین حال آسیبی به رنگ و بدنه وسیله وارد نکند.',
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

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    height: 60,
    width,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  underline: {
    borderBottomWidth: 3,
    borderBottomColor: '#FED03F',
    marginTop: 12,
    width: 70,
  },

  imgBlog: {
    height: (height / 10) * 2.5,
    width: (width / 5) * 5 - 30,
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  txt: {
    fontFamily: 22,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingTop: 10,
  },

  icon: {
    width: 20,
    height: 20,
    marginLeft: 25,
    marginTop: 20,
  },
  txtDate: {
    fontFamily: 12,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  txtLike: {
    fontFamily: 10,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    paddingBottom: 20,
  },
  titleComments: {
    fontFamily: 'IRANSansWeb',
    fontSize: 16,
  },
  txtComments: {
    fontFamily: 'IRANSansWeb',
    fontSize: 14,
    color: '#858585',
  },
  viewComment: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    width: width - 20,
  },
});

export default Blog;
