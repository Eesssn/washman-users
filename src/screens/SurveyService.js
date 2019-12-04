import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import StarRating from 'react-native-star-rating';

class SurveyService extends React.Component {
  onStarRatingPress(rating) {
    this.setState({
      StarRating: rating,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      StarRating1: null,
      StarRating2: null,
      StarRating3: null,
      StarRating4: null,
      StarRating5: null,
    };
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#FCFAFA'}}>
        <View
          style={{flex: 1, backgroundColor: '#FCFAFA', alignItems: 'center'}}>
          <View
            style={{
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
              marginTop: 15,
              width: width - 20,
            }}>
            <View
              style={{
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 5,
              }}>
              <Text style={styles.title}>اطلاعات شما</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'IRANSansWeb',
                  color: '#3498DB',
                  marginLeft: 10,
                }}>
                انجام شده
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row-reverse',
                paddingBottom: 10,
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#3498DB',
                  borderRadius: 10,
                  width: 90,
                  height: 120,
                  alignItems: 'center',
                  marginRight: 5,
                }}>
                <Image
                  source={require('../../assets/images/4.png')}
                  style={{width: 60, height: 60, marginTop: 5}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'IRANSansWeb',
                    color: '#858585',
                  }}>
                  سرویس ویژه
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'IRANSansWeb',
                    color: '#FFC200',
                  }}>
                  C.I.P
                </Text>
              </View>

              <View>
                <View style={{flexDirection: 'row-reverse', paddingBottom: 5}}>
                  <Text style={styles.txtDetail}>نوع ماشین</Text>
                  <Text style={styles.txt}>سواری،ایرانی،پرشیا</Text>
                </View>

                <View style={{flexDirection: 'row-reverse', paddingBottom: 5}}>
                  <Text style={styles.txtDetail}>تاریخ و زمان</Text>
                  <View style={{width: 150}}>
                    <Text style={styles.txt}>
                      چهارشنبه 10 شهریور ساعت 10 صبح
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row-reverse',
                    paddingBottom: 5,
                  }}>
                  <Text style={styles.txtDetail}>آدرس</Text>
                  <View style={{width: 200}}>
                    <Text style={styles.txt}>
                      تهران-خیابان جمالزاده-بعد از پل صدر پلاک 399 واحد 3
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
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
              marginTop: 15,
              width: width - 20,
              height: height / 2 - 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: width - 60,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={styles.txtRate}>کیفیت انجام خدمت ؟</Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.StarRating1}
                selectedStar={rating =>
                  this.setState({
                    StarRating1: rating,
                  })
                }
                fullStarColor={'#FAC917'}
                starSize={20}
              />
            </View>

            <View
              style={{
                width: width - 60,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={styles.txtRate}>نحوه برخورد کارمندان ؟</Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.StarRating2}
                selectedStar={rating =>
                  this.setState({
                    StarRating2: rating,
                  })
                }
                fullStarColor={'#FAC917'}
                starSize={20}
              />
            </View>

            <View
              style={{
                width: width - 60,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={styles.txtRate}>وقت شناسی کارمندان ؟</Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.StarRating3}
                selectedStar={rating =>
                  this.setState({
                    StarRating3: rating,
                  })
                }
                fullStarColor={'#FAC917'}
                starSize={20}
              />
            </View>

            <View
              style={{
                width: width - 60,
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={styles.txtRate}>پاسخگویی پشتیبانی ؟</Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.StarRating4}
                selectedStar={rating =>
                  this.setState({
                    StarRating4: rating,
                  })
                }
                fullStarColor={'#FAC917'}
                starSize={20}
              />
            </View>

            <View
              style={{
                width: width - 60,
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <Text style={[styles.txtRate, {marginBottom: 10}]}>
                درکل چه نمره ای را به واش من میدهید؟
              </Text>
              <StarRating
                disabled={false}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={this.state.StarRating5}
                selectedStar={rating =>
                  this.setState({
                    StarRating5: rating,
                  })
                }
                fullStarColor={'#FAC917'}
                starSize={20}
              />
            </View>
          </View>

          <View
            style={{
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.1,
              shadowRadius: 1.41,
              elevation: 2,
              height: 100,
              width: width - 40,
              marginTop: 10,
              position: 'relative',
            }}>
            <TextInput
              value={this.state.person}
              onChangeText={val => this.setState({person: val})}
              style={styles.txtInput}
              placeholder="ثبت نظر"
              placeholderTextColor="#858585"
            />
            <Image
              source={require('../../assets/images/edit.png')}
              style={{
                width: 20,
                height: 20,
                position: 'absolute',
                right: 10,
                top: 10,
              }}
            />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>پرداخت آنلاین</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

SurveyService.navigationOptions = ({navigation}) => {
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
    title: 'جزییات خدمت',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
    headerRight: (
      <Image
        source={require('../../assets/images/call.png')}
        style={{width: 30, height: 30, marginRight: 20}}
      />
    ),
  };
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  txtRate: {
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    textAlign: 'center',
  },
  txtInput: {
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    fontSize: 16,
    paddingVertical: 7,
    paddingHorizontal: 35,
  },
  btn: {
    width: 300,
    height: 50,
    backgroundColor: '#3498DB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
  txtBtn: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
  },
  title: {
    fontSize: 18,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
    fontWeight: 'bold',
  },
  txtDetail: {
    fontSize: 18,
    fontFamily: 'IRANSansWeb',
    color: '#858585',
    fontWeight: 'bold',
    marginRight: 5,
    marginLeft: 5,
  },
  txt: {
    color: '#858585',
    fontSize: 14,
    fontFamily: 'IRANSansWeb',
  },
});

export default SurveyService;
