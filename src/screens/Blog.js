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

  tabView = () => {
    switch (this.state.discription) {
      case 'lastSubject':
        return (
          <View>
            <TouchableOpacity
              style={{backgroundColor: '#FCFAFA'}}
              onPress={() => this.props.navigation.navigate('TextBlog')}>
              <Image
                source={require('../../assets/images/Blog1.png')}
                style={styles.imgBlog}
              />
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-end',
                }}>
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
              <View style={{paddingHorizontal: 20}}>
                <Text style={styles.txt}>تجربه ای حرفه ای با واش من</Text>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    paddingTop: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                  }}>
                  <Text style={styles.txtDate}>دهم شهریور</Text>
                  <Text style={styles.txtLike}>250</Text>
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

            <TouchableOpacity>
              <Image
                source={require('../../assets/images/Blog2.png')}
                style={styles.imgBlog}
              />
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-end',
                }}>
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
              <View style={{paddingHorizontal: 20}}>
                <Text style={styles.txt}>چرا واش من</Text>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    paddingTop: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                  }}>
                  <Text style={styles.txtDate}>دهم شهریور</Text>
                  <Text style={styles.txtLike}>323</Text>
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
          </View>
        );

      case 'best':
        return (
          <View>
            <View style={{backgroundColor: '#FCFAFA'}}>
              <Image
                source={require('../../assets/images/F1.png')}
                style={styles.imgBlog}
              />
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-end',
                }}>
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
              <View style={{paddingHorizontal: 20}}>
                <Text style={styles.txt}>تجربه ای حرفه ای با واش من</Text>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    paddingTop: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                  }}>
                  <Text style={styles.txtDate}>دهم شهریور</Text>
                  <Text style={styles.txtLike}>250</Text>
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
            </View>

            <View>
              <Image
                source={require('../../assets/images/F2.png')}
                style={styles.imgBlog}
              />
              <View
                style={{
                  flexDirection: 'row-reverse',
                  justifyContent: 'flex-end',
                }}>
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
              <View style={{paddingHorizontal: 20}}>
                <Text style={styles.txt}>چرا واش من</Text>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    paddingTop: 5,
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(112, 112, 112, 0.5)',
                  }}>
                  <Text style={styles.txtDate}>دهم شهریور</Text>
                  <Text style={styles.txtLike}>323</Text>
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
            </View>
          </View>
        );
      case 'yourComment':
        return (
          <View style={{backgroundColor: '#FCFAFA', alignItems: 'center'}}>
            <View style={[styles.viewComment, {marginTop: 30}]}>
              <Text style={[styles.titleComments, {color: '#02B800'}]}>
                تیم حرفه ای واش من
              </Text>
              <Text style={styles.txtComments}>
                من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن
                خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی
                حرفه ای و مجرب
              </Text>

              <View
                style={{
                  width: width / 2,
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                }}>
                <Text>روشویی-سواری</Text>
                <StarRating
                  disabled={false}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={this.state.StarRating}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor={'#FAC917'}
                  starSize={20}
                />
              </View>
            </View>

            <View style={styles.viewComment}>
              <Text style={[styles.titleComments, {color: '#FED03F'}]}>
                می تونست بهتر از اینا باشه
              </Text>
              <Text style={styles.txtComments}>
                من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن
                خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی
                حرفه ای و مجرب
              </Text>

              <View
                style={{
                  width: width / 2,
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                }}>
                <Text>روشویی-سواری</Text>
                <StarRating
                  disabled={false}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={this.state.StarRating}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor={'#FAC917'}
                  starSize={20}
                />
              </View>
            </View>

            <View style={styles.viewComment}>
              <Text style={[styles.titleComments, {color: '#ED1111'}]}>
                توصیه نمی کنم
              </Text>
              <Text style={styles.txtComments}>
                من به تازگی با تیم واش من آشنا شدم و از خدماتی که ارائه میدن
                خیلی خیلی راضی هستم.حتما پیشنهاد میکنم ازشون استفاده کنید. تیمی
                حرفه ای و مجرب
              </Text>

              <View
                style={{
                  width: width / 2,
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                }}>
                <Text>روشویی-سواری</Text>
                <StarRating
                  disabled={false}
                  emptyStar={'ios-star-outline'}
                  fullStar={'ios-star'}
                  halfStar={'ios-star-half'}
                  iconSet={'Ionicons'}
                  maxStars={5}
                  rating={this.state.StarRating}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  fullStarColor={'#FAC917'}
                  starSize={20}
                />
              </View>
            </View>
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
    title: 'بلاگ',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'IRANSansWeb',
    },
  };
};

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
  txt: {
    fontSize: 18,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
  },
  imgBlog: {
    height: (height / 10) * 2.5,
    width: (width / 5) * 5 - 30,
    marginHorizontal: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  txt: {
    fontFamily: 20,
    color: '#858585',
    fontFamily: 'IRANSansWeb',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 15,
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
