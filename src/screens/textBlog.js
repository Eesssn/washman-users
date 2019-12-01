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

class TextBlog extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#FCFAFA'}}>
        <Image
          source={require('../../assets/images/Blog1.png')}
          style={styles.img}
        />
        <View
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            paddingVertical: 17,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={styles.title}>چرا واش من؟</Text>
          <View style={{flexDirection: 'row-reverse', paddingRight: 20}}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/bookmark.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/share.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <Text style={styles.txt}>
            پروتئین های سالم و مواد مغذی میوه ها و سبزیجات به داشتن پوستی درخشان
            کمک می کنند.این مواد را به رژیم غذایی تان اضافه کنید تا نتایج را به
            سرعت مشاهده کنید: اسید های چرب امگا ۳.این ماده در ماهی و گردو پیدا
            میشود و مخصوصا برای پوستتان مفید است. ویتامین C.این ماده به بهبود
            جوش ها کمک میکند پس خوردن چند وعده مرکبات و اسفناج در روز سودمند
            است. غذاهای غنی از فیبر.سبزیجات تازه،آجیل و میوه های فرآوری نشده به
            تعادل،نظم و کُند نبودن دستگاه گوارش کمک می کنند.اگر در روز یکبار یا
            بیشتر دفع مدفوع نداشته باشید،ممکن است به نظر خسته و مریض(سردرد و
            مشکلات معدوی) بیایید پروتئین های سالم و مواد مغذی میوه ها و سبزیجات
            به داشتن پوستی درخشان کمک می کنند.این مواد را به رژیم غذایی تان
            اضافه کنید تا نتایج را به سرعت مشاهده کنید: اسید های چرب امگا ۳.این
            ماده در ماهی و گردو پیدا میشود و مخصوصا برای پوستتان مفید است.
            ویتامین C.این ماده به بهبود جوش ها کمک میکند پس خوردن چند وعده
            مرکبات و اسفناج در روز سودمند است.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            paddingVertical: 20,
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              color: '#323232',
              fontSize: 16,
              fontFamily: 'IRANSansWeb',
              marginLeft: 20,
            }}>
            مطلب بنظرتون مفید بود ؟
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/heart2.png')}
              style={{width: 20, height: 20, top: 5}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  img: {
    width,
    height: 200,
  },
  icon: {
    width: 15,
    height: 15,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    color: '#858585',
    fontFamily: 'IRANSansWeb',

    paddingRight: 15,
  },
  txt: {
    color: '#323232',
    fontFamily: 'IRANSansWeb',
    fontSize: 14,
  },
});

export default TextBlog;
